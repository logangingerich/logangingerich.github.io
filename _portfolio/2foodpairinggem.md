---
layout: post
title: Foodpairing Ruby Gem
thumbnail-path: "img/rubygem.png"
short-description: A Ruby Gem wrapper for the external Foodpairing API.

---

{:.center}
![]({{ site.baseurl }}/img/rubygem.png)

{:.center}
[Documentation and Code for the Foodpairing Ruby Gem](https://github.com/logangingerich/foodpairing)

## Explanation

The Ruby community is truly amazing, in my opinion. For evidence of this, you need not look further than the abundance of ruby gems that developers have put out into the world to help their fellow app creators. This is especially clear with the number of gems created as wrappers for external APIs, making integration easy. So, when I discovered that there was not yet a Ruby Gem wrapper for the fascinating [Foodpairing API](http://developer.foodpairing.com/), I knew that this could be my next contribution to the Ruby community. It also doesn't hurt that it brings together my love for code with my love for food.

## Implementation

The initial setup for the Foodpairing Ruby Gem was fairly simple. I had to build out methods for the various endpoints in the API, the syntax of which was fairly simply, looking like this:

```Ruby
def self.get_ingredient_by_id(id)
  response = HTTParty.get("https://api.foodpairing.com/ingredients/#{id}", headers: { 'X-Application-ID' => ENV['XApplicationID'], 'X-Application-Key' => ENV['XApplicationKey'] })
  @ingredient = JSON.parse(response.body)
end
```

For testing purposes, I used the very helpful and simple Dotenv gem to set the environment variables that you see above. Once added as a dependency, you simply create a .env file in your root directory containing your variables and access them by declaring `require 'dotenv'` and `Dotenv.load('variables.env')`. And, of course, remember to add your variables file to .gitignore.

When writing my tests (I opted to use RSpec), I also had to consider the fact that I didn't want to make calls to the actual API for every single test that I run. Instead, I needed a way to stub out the tests and create custom JSON responses. To do this, I used WebMock. When stubbing out a method, such as get_ingredient_by_id seen above, I added the following to my RSpec configuration:

```Ruby
config.before(:each) do
  stub_request(:get, "https://api.foodpairing.com/ingredients/1").
    with(:headers => {'X-Application-Id'=>ENV['XApplicationID'], 'X-Application-Key'=>ENV['XApplicationKey']}).
      to_return(:status => 200, :body => "{\"id\":1,\"name\":\"Bourbon whiskey\"}", :headers => {})
end
```
With this, I can easily test my get_ingredient_by_id method without having to make an http call to the actual API.

## Results

In order test my final product, I created an example web application that would integrate the gem. I do this using Rails as my back-end and React as my client. You can take a look at the Github repo for the example app [here](https://github.com/logangingerich/foodpairing_example_app). Using the gem was extremely simple. I set up my Rails server as an API and called to the gem in my ingredient and brand controllers as follows"

```Ruby
ingredient = Foodpairing.search_ingredients_by_name(params[:query]).first
```

Then, I needed to render a JSON object usable by my React client:

```Ruby
render json: {
  ingredient: ingredient["name"],
  pairings: pairings_array,
  all_ingredients: all_ingredients_array
}
```
With that in place, I was able to use jQuery to make the call to my Rails server:

```Javascript
getIngredientData = (name) => (ev) =>  {
  $.getJSON('/api/ingredients?query=' + name)
    .then((results) => {
      this.setState({
        ingredient: results.ingredient,
      });
    })
}
```

And there you have it: we've taken the ingredient information from external API to Ruby Gem to controller to client.

## Conclusion

I love the Ruby language and community and am always happy to contribute in whatever small way that I can. For full documentation on installation and usage of the Foodpairing Ruby Gem, please visit the [Github repository](https://github.com/logangingerich/foodpairing). I also welcome any and all useful contributions! If you have an idea on how to improve the gem, please submit a pull request and let's work together to make this project the best that it can be!
