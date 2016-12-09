---
layout: post
title: Bloc Chat
thumbnail-path: "img/blocchat.png"
short-description: A responsive, real-time chatroom built with AngularJS and Firebase.

---

{:.center}
![]({{ site.baseurl }}/img/blocchat.png)

## Explanation

This project is a fully-functional chatroom that allows users to log-in, create chatrooms and send messages, while seeing their rooms and messages populate in real time.

## Problem

The task on this project was to utilize AngularJS with Firebase to create the chatroom, with almost no instructions provided or recommendations on how to implement it.

## Solution

AngularJS was the framework on which I built this web application. I then linked it to a Firebase back-end, allowing me to store chatrooms and their associated messages. Users are able to create a username, which is stored for future use via cookies.

## Results

The result was a fully-functional chatroom, which, for the amount of functionality, was built in a very short amount of time because of the ease of both Angular and Firebase.

## Conclusion

This was the first project that I've completed with extremely little outside help. I was told what functionality needed to be included in this application, and was able to build it out through some trial and error programming. 

Below is a look at the home view code that I wrote for Bloc Chat:

```Javascript
<div class="mainContainer">
    <div class="sidebar">
        <button class="createButton" ng-click="home.openModal()">Create Room</button>
        <h1>Bloc Chat</h1>
        <h2 class="rooms" ng-repeat="room in home.rooms"
        ng-click="home.setCurrentRoom(room)">{{room.name}}</h2>
    </div>
    <div class="right">
        <div class="roomTitle">{{ home.currentRoom.name }}</div>
        <div class="messages" ng-repeat="message in home.messages">
            <div class="username">{{ message.username }}</div> 
            <div class="time">{{message.sentAt | date : "short" }}</div>
            <div class="content">{{message.content}}</div>      
        </div>
        <div class="sendBar">
            <input class="messageInput" placeholder="Enter Message" ng-model="home.newMessage.content">
            <button class="send" ng-click="home.sendMessage()">Send</button>
        </div>
    </div>
</div>
```