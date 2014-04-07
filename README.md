Fantasy Football Tracker README

TODO:

1. Setup Redis Pub/Sub:
    1. Subscribes to NodeJS jobs
    2. Publishes to listening Python Workers.

2. Setup ExpressJS Node RESTful API server that:

    1. hits Yahoo-Fantasy API
    2. establishes socket.io connection between AngularJS and node.
    3. publishes jobs to Redis

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


dont stay empty too long!
