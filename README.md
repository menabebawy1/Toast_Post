# Toast Post
A simple social media full-stack app that uses CRUD operations and a REST API.

I wanted to learn how the backend of a website works and how to operate it. I learned 
NodeJS and ExpressJS in order to build this simple social media app. I was already 
familiar with MySQL so PostgreSQL was very similar and easy enough to learn.

I wanted to host this app to Heroku although I realized there would be a major 
issue with that: anyone could post any image they want regardless of its appropriateness.
As a result my next step would be to add a flaging system for posts so that users can 
flag them and if the post has more than a certain number of flags it gets automtically 
deleted. It is not the most accurate system but it is the simplest and most effective to
implement at the moment.

To run the app:
cd server -> nodemon index.js
cd client -> npm start

![alt text](/client/images/one.png)
In order to add an image a user can simply enter the URL and click post.


