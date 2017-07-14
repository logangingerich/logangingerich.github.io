---
layout: post
title: Blocipedia
thumbnail-path: "img/blocipedia.png"
short-description: A Ruby on Rails app for creating and editing wikis.

---

{:.center}
![]({{ site.baseurl }}/img/blocipedia.png)

## Explanation

My task in this project was to create a Wikipedia replica that allowed users to create an account, create and update wikis, and edit the wikis of other users. Users also needed the option to pay to upgrade to premium status, where they are given the ability to create private wikis, only viewable to them, other premium members, and collaborators of their choosing.

## Implementation

I built Blocipedia using using Ruby on Rails, and utilized a lot of helpful Ruby Gems during the implementation. I used Devise to set up the user authentication system, Pundit for authorization, Faker for seeding data, Redcarpet for parsing Markdown syntax in the wikis, and Stripe to take payments and upgrade accounts.

## Results

The resulting web application acts much like Wikipedia. Standard users are able to create, edit and view public wikis. Members can pay with Stripe to upgrade to Premium status. Premium users are able to create private wikis, and select certain standard members as collaborators if they so choose.

## Conclusion

One of the benefits of Ruby on Rails is the vast amount of Ruby Gems available to aid you in your development. In this particular project, I was able to utilize a number of very helpful Gems in order to put together a fully-functional Wikipedia replica that is easy to navigate.
