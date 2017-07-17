---
layout: post
title: Loggit
thumbnail-path: "img/loggit.png"
short-description: A Ruby on Rails app for creating and interacting with user posts.

---

{:.center}
![]({{ site.baseurl }}/img/loggit.png)

## Explanation

My task in this project was to create an application, similar to Reddit, that allowed users to sign up, create topics, create posts under the topics and comment on posts. Users also needed to have the ability to upvote or downvote posts. The user interface needed to be clear and simple to use.

## Implementation

I built Loggit from the ground up using Ruby on Rails. Rails is a powerful back-end framework that allows for quick, efficient app-building. Users must create an account in order to create new posts or to comment/vote on a post. There is also an authorization system that allows only system administrators to create or delete topics. Admins also have the ability to change or delete other users' posts to insure that inappropriate content does not run rampant.  I implemented Bloccit using Test-Driven Development, specifically with RSpec.

## Results

The resulting web application acts much like Reddit, giving users who have signed up for a Bloccit account the ability to create posts, and interact with the posts of other users through comments and upvotes or downvotes.

## Conclusion

My task was to implement the back-end structure on this project and I am pleased with how it turned out. You can take a look at my code here: [Loggit GitHub Repo](https://github.com/logangingerich/loggit). Loggit is also hosted on Heroku, and you can try it for yourself here: [Loggit Website](https://aqueous-oasis-58295.herokuapp.com/).
