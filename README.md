Fantasy Football Tracker README

TODO:

1. Setup Redis Pub/Sub:
    1. Subscribes to NodeJS jobs
    2. Publishes to listening Python Workers.

2. Setup Node RESTful API server that:

    1. hits Yahoo-Fantasy API
    2. establishes socket.io connection between AngularJS and node.
    3. publishes jobs to Redis

3. Setup Python Worker that:

    1. parses JSON and adds to mongoDB or PostgreSQL w/ BSON support
    2. Does Worker process & send data back to node API server where it will push to mongoDB
    or does it communicate directly with mongoDB?

4. Setup mongoDB or PostgreSQL.


dont stay empty too long!
