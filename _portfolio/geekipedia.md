---
layout: post
title: Geekipedia
thumbnail-path: "img/geekipedia.png"
short-description: A Ruby on Rails app for creating and editing wikis.

---

{:.center}
![]({{ site.baseurl }}/img/geekipedia.png)

## Explanation

My task in this project was to create a Geek Fandom version of Wikipedia that allowed users to create an account, create and update wikis, and edit the wikis of other users. Users also needed the option to pay to upgrade to premium status, where they are given the ability to create private wikis, only viewable to them, other premium members, and collaborators of their choosing.

## Implementation

I built Geekipedia using using Ruby on Rails, and utilized a lot of helpful Ruby Gems during the implementation. I used Devise to set up the user authentication system, Pundit for authorization, Faker for seeding data, Redcarpet for parsing Markdown syntax in the wikis, and Stripe to take payments and upgrade accounts.

## Results

The resulting web application acts much like Wikipedia. Standard users are able to create, edit and view public wikis. Members can pay with Stripe to upgrade to Premium status. Premium users are able to create private wikis, and select certain standard members as collaborators if they so choose.

## Conclusion

One of the benefits of Ruby on Rails is the vast amount of Ruby Gems available to aid you in your development. In this particular project, I was able to utilize a number of very helpful Gems in order to put together a fully-functional Wikipedia replica that is easy to navigate.

You can take a look at my code for Geekipedia here: [Geekipedia GitHub Repo](https://github.com/logangingerich/geekipedia).

Geekipedia is also hosted on Heroku and you can try it for yourself here: [Geekipedia Website](https://pacific-badlands-79563.herokuapp.com/).
