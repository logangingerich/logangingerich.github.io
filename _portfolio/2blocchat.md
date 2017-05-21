---
layout: post
title: Geek Chat
thumbnail-path: "img/geekchat.png"
short-description: A responsive, real-time chatroom built with AngularJS and Firebase.

---

{:.center}
![]({{ site.baseurl }}/img/geekchat.png)

## Explanation

This project is a fully-functional geek fandom chatroom that allows users to log-in, create chatrooms and send messages, while seeing their rooms and messages populate in real time.

## Implementation

AngularJS was the framework on which I built this web application. I then linked it to a Firebase back-end database, allowing me to store chatrooms and their associated messages. Users are able to create a username, which is stored for future use via cookies.

## Results

The result is a fully-functional chatroom, which, for the amount of functionality, was built in a very short amount of time because of the ease of both the Angular framework and the Firebase database.

## Conclusion

AngularJS can have a bit of a steep learning curve for those starting out with web development, but it is a very powerful framework and a necessary tool for just about any full-stack web developer.

Below is a look at the home view code that I wrote for Geek Chat:

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
