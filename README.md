Fantasy Football Tracker README

## todo.
expand & reiterate required

1. Setup Redis Pub/Sub:
    1. Subscribes to NodeJS jobs
    2. Publishes to listening Python Workers.

2. Setup ExpressJS Node RESTful API server that will:

    1. hits Yahoo-Fantasy API 
        1. use passport.js to obtain access tokens for oauth
        2. use request library to API call to yahoo fantasy.
        3. send JSON data with job parameters over redis andor zeromq

    2. establishes socket.io connection between AngularJS and node.

    3. publishes jobs to Redis

    4. SocketIO events:
        1. to start off, create a series of socketio channel subscriptions e.g. yahoo rss, rotoworld rss, injury updates, etc.

    5. define restful resources. figure out what kind of API calls angularJS will need to make.
    try to keep it front end agnostic. state between client and server tracked via socketIO.
    SocketIO will inform the angularJS client what series of API calls to make. socketIO will
    only be used to track state and for volatile messaging. API calls to express server for critical data.

3. Setup Python Worker that:

    1. parses JSON and adds to mongoDB or PostgreSQL w/ BSON support

    2. Does Worker process & send data back to node API server where it will push to mongoDB
    or does it communicate directly with mongoDB?

    3. After receiving job via redis andor zeromq subscribe, spawn gevent threads to 
    asynchronously parse + store in db

        1. recieve all jobs and store in queue
        2. dynamically generate functions for all jobs and push onto event queue
        3. gevent.spawn(all threads) and store all results in a final list, pretty much map & reduce
        4. initiate connection with database and send all parsed data at once. 
        remember that nodeAPI server will push many jobs per event but should probably group up state change to one db call.

4. Setup mongoDB or PostgreSQL.

    1. store user information in psql or mongo? most likely in mongo since easier
    using passport-yahoo, google, facebook login... or store as json in postgres.

    2. 

5. AngularJS with the following:
    1. write a socketIO service that can be injected into different modules.
    2. use angular-bootstrap and create a simple UI that displays data from socketIO service.
    3. stream real-time events via socketio service & 2 way data binding.


## workflow
workflow descriptions for each particular component of application.

1. expressAPI server:

    1. user logs in via facebook, google, etc or local login. start off only using passport login for ease.

    2. checks user credentials:
    
        1. if new -> ask for yahoo oauth authentication and do a big batch process for pulling data
        2. if returning -> figure out what data needs to be pulled if any
        
    3. 

2. postgreSQL

3. mongoDB

4. Redis and or zeromq

5. individual python worker processes

use pipeline workflow? 


dont stay empty too long!
