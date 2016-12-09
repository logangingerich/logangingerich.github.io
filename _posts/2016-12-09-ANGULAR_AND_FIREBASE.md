---
layout: post
title: Angular + Firebase
---

The curriculum of Bloc's Software Development Track is always pushing you out of your comfort zone. Most of the time, I find this to be a fun and exciting challenge. My first solo project, Bloc Chat, however, provided me with some of my most frustrating moments of the program thus far. 

The task was this: create a fully-functional chatroom, using Angular on the front-end and Firebase on the back-end. I dove in head first, fully comfident in my ability to create such a web app with relative ease. It wasn't long, however, before I hit a wall. Then another. And then another. At this point in the program, I was relatively new to the back-end part of creating such an app. Getting Firebase and Angular to play well together proved to be more challenging than I had anticipated. 

I always found the answer, usually after a considerable amount of time on Google. Whenever I thought that I'd hit an unbreakable barrier, the answer presented itself (and was usually much simpler than I'd anticipated). It's hard to admit when your in the middle of it, but frustration usually leads to the best learning. When your forced to solve a problem that keeps you up at night, your probably not going to forget the answer that eventually came to you.

The end product was something I could be proud of. Users could log in with unique credentials, create chat rooms, and send messages, which populate in real time. Looking back, Firebase now seems like a very user-friendly back-end option for a simple web app, despite what I may have thought of it at the time.

I am going to begin sharing code snippets of the various projects on which I work, to give a little look behind the curtain. Below is just a peak into the code of my main controller for this app:

```Javascript
(function() {
    function MainCtrl($cookies, Room, Message, $uibModal) {
        this.rooms = Room.all;
        this.getRoomByID = Message.getRoomByID;
        
        this.openModal = function() {
            console.log("open");
            $uibModal.open({
                controller: "modalCtrl",
                controllerAs: "modal",
                templateUrl: "/templates/modal.html",
                size: 'sm'
                })
            }
        
        this.setCurrentRoom = function(room) {
            this.currentRoom = room;
            this.messages = this.getRoomByID(room.$id);
        }
        
        this.sendMessage = function() {
            this.newMessage.roomID = this.currentRoom.$id;
            this.newMessage.username = $cookies.get('blocChatCurrentUser');
            Message.send(this.newMessage);
            this.newMessage = "";
        }
    }
    angular
    .module("blocChat")
    .controller('MainCtrl', ['$cookies', 'Room', 'Message', '$uibModal', MainCtrl]);
})();
```