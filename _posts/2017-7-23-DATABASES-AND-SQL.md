---
layout: post
title: Databases and SQL
---

Back-end development has always been the layer of programming that has drawn me in the most. There's something very satisfying to me about making all of the right connections and seeing my application drawing out all of the right database information at the right time and seeing it rendered where it should. It feels like connecting wires in just the right way and seeing everything light up. Rails can make this pretty easy. Active Record takes care of most of your database interactions in a way that you might not even need to write a single line of SQL. In fact, when I was first writing Rails apps, SQL kind of scared me. I'd hop into the Rails Console, write some basic Ruby and the ORM would translate it into SQL for me. I never had to think about it.

Most experienced programmers will probably tell you that you can only rely on this type of "magic" for so long, and they're correct. At a certain point, if you are interested in really digging into back-end development, you're going to need to understand the SQL language and how to query and alter tables in your database. The good news is that SQL is not nearly as scary as it might seem to those who have only interacted with their database via Active Record. The syntax is very straightforward, especially for basic queries. For example, if I wanted to pull out all of my current records from a table called movie_table, I'd write `SELECT * FROM movie_table;`.

Of course, it gets more complicated than that. Things get a little trickier when you start joining or altering tables, but in general the language is very user-friendly, in my experience. It's a much more intuitive language than Javascript or Ruby.

Over the past month I dug deep into SQL and database management by creating my own ORM. It is basically a mini-version of Active Record. It was certainly a challenge, but it was enormously helpful in understanding the magic that we often take for granted behind ORMs like Active Record.
