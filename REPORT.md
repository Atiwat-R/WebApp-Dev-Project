# REPORT

This is a Discussion Forum, which allow users to create a Post
and comment on each post.

Dependency used:
- axios
- nprogress
- vue-router
- vuex
- firebase

## What features are completely available.

- Authentication system for each user
    - Login and Register
    - Email and Password authentication
    - Unable to access other pages before login
    - Once logged in, cannot access Login & Register page until Logout
- Users can create posts
    - Each post have title and text, and username of the poster
    - Poster and other users can leave comments under each post
    - Clicking a post redirects them to comments under each post
    - Timestamp on each post
- Users can comment on any posts
    - Each comment contains username and text
    - Timestamp on each comment
- Routing to different pages for each functionality
    - Home page, aka Post Panel that display all Posts
    - Create Post, allows user to create post
    - Comments, clicking on Posts brings them here where they can Comment
    - Profile, shows user info. Can edit display name here

## What features are partially available (or still contain bugs).

- Display name and page loading might be buggy at page reloads. Just login again and all problems should be fixed. 

## What features that you cannot complete (explain why so)

## What features shall be added (if you would have more time)

- Like & Dislike counter
- Better site decoration
- Ability to post photos and perhaps videos
- Search for posts
- View other user's profiles
- Sort post/comments by timestamp
