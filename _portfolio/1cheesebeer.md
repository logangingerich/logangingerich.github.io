---
layout: post
title: Cheese + Beer
thumbnail-path: "img/cheesebeer.png"
short-description: An original app for finding and cataloguing cheese + beer pairings.

---

{:.center}
![]({{ site.baseurl }}/img/cheesebeer.png)

## Explanation

My core goal with this app was pretty straightforward: I wanted an easy interface for searching for a specific style of cheese or beer, and then be able to see a list of beers that would pair with that cheese, or cheeses that would pair with the beer.  Going a little beyond that basic functionality, I wanted users to be able to upvote or downvote pairings they liked or disliked. I also wanted users to be able to save their favorite pairings, take notes on them, and create their own custom pairings on their user page.

## Implementation

Ruby on Rails proved to be a great framework for implementing such a web app. First off, Devise gave me the tools to easily implement user authentication and authorizations. One interesting challenge in putting everything together was making the pairing association between beers and cheeses via a pairings model. This was accomplished by using a `has_many through` association, as in `has_many :cheeses, through: :pairings`. I loaded the database with professionally-suggested cheese-beer pairings, but also wanted users to be able to create their own. Wanting to keep the main database professionally curated, I added this functionality to the user's personal page, below their favorited pairings and notes.

## Results

I'm pretty proud of this project. I spent years as a professional cheesemonger and this app really brought together a love of artisinal cheese and beer with my love of programming. 
You can see my GitHub repository for the project here: [Cheese + Beer GitHub Repo](https://github.com/logangingerich/cheese-plus-beer)
You can also try it out for yourself at this address: [Cheese + Beer Website](https://cheese-plus-beer.herokuapp.com/)

## Conclusion

I brainstormed, wireframed, coded and tested this app from the ground up, and believe that I came up with an easy and fun-to-use app that any cheese and beer lover can appreciate. I look forward to taking the knowledge I gained throughout its development and using it in my next project.
