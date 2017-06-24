---
layout: post
title: Algorithms and Ruby
---

To anyone even remotely math-phobic, the word 'algorithm' can be frightening, conjuring up visions of high-minded, incomprehensible mathematical problems, littered with confusing symbols. It may even sounds like something completely removed and separate from 'real life,' only useful in academia. In reality, this couldn't be farther from the truth. Simply put, and algorithm is a sequence of steps taken in order to complete a particular task in a finite amount of time. The process of cooking a meal, for example, could easily be broken down into steps and that one would take in order to produce a predictable result. Even those allergic to words like 'algorithm' may think in a somewhat algorithmic way in completing everyday tasks.

In computer science, you can think of algorithms in the same way. We write algorithms in order to instruct computers how to accomplish a particular task. I've spent the last month digging deeper into some of the most fundamental algorithms for computer science using my current programming language of choice, Ruby. Searching and Sorting through data is one of the most common tasks for a programmer.

There are a number of considerations to make when determining the proper algorithm for your sort or search. Time and space complexity are probably the most important factors in that determination. To represent these algorithmic complexities, we use asymptotic notation. This is a fairly complex subject, but to put things as simply as possible, we typically use Big-O notation (O(n)) to represent the worst-case performance of an algorithm's performance, Big-Omega notation (Ω(n)) to represent the best-case scenario of an algorithm's performance and Big-Theta notation (Ө(n)) to represent the bounded-case scenario of an algorithm's performance. It may sound like we're dipping into some of that inaccessible math mentioned earlier, but with a little research these methods of measuring algorithmic efficiency become relatively straightforward. If you're interested in a terrific introduction to Big-O (which is probably the most commonly used of the three), Rob Bell has a terrific post that you can read here: [A Beginner's Guide To Big - O](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation).

So, what does a common algorithm look like in Ruby code? I've included below a Ruby implementation of an algorithm that takes in an integer (the nth number of the Fibonacci Sequence) and returns the corresponding value from the Fibonacci Sequence. This is actually a pretty common technical interview question, so it's definitely one to read up on.

```Ruby
def fib(n)
   fib_0 = 0
   fib_1 = 1
   (0...n).each do
     temp = fib_0
     fib_0 = fib_1
     fib_1 = temp + fib_1
   end
   fib_1
 end
```
