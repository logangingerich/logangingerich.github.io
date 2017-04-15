---
layout: post
title: Cheese + Beer Pairing App
---

The last few months, for me, have been dedicated heavily to devoloping projects from the gound up with Ruby on Rails. It is painfully cliched, but true: just doing something is the best way to learn it. You can sit down and read every letter of documentation on RoR or any other framework or programming language, but it still won't serve you as well as putting that knowledge into practice. 

A couple of weeks ago I found myself at the end of the first half (Web Development) of my current educational program. However, I was significantly ahead of pace and decided to take on an extra personal project to really solidify my RoR app-building knowledge. With infinite possible directions, I had to ask myself: what do I want to spend time on? What interests me? What type of app would I actually use? As a cheesemonger of the past 3+ years, the answer was clear: cheese. Oh, and beer.

I only had a couple of weeks to get it off the ground so I wanted to keep it simple. It would be an app where users could type in a search for a style of beer or cheese and get back a list of matching results.  From there, they could select a cheese or beer and see a list of suggested pairings. They could upvote, downvote, or save pairings to their personal profile (where they can also take notes on said pairings). Also, on their profile, they could create their own pairings from scratch.

In general, the task was fairly straight forward, with only a few curve balls thrown in. You have your Beer objects, your Cheese objects, and then the oddball of a Pairing object. Each Pairing is essentially a a join table, containing a specific Cheese and a specific Beer. At first I implemented this via a `has_and_belongs_to_many` relationship. After reading many warnings against using this specific type of relationship, I altered it to be a `has_many through` relationship, which is by far the preferred route. 

In the end, I came up with a neat little app that serves a function that I can very much appreciate: it helps find that perfect beer for your cheese, or vice versa. This week, I will begin the second half of my program: Software Engineering Principles. I am excited for a new, more complex challenge and to deepend my software knowledge.

In case you're interested in finding your own perfect beer and cheese pairing, feel free to create and account and poke around with my Cheese + Beer app, currently hosted through Heroku at this address: https://cheese-plus-beer.herokuapp.com/ .