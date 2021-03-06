
## Problem Statement
For this exercise, we'd like you to create two things:
* A server-side service that returns estimated arrival times for a requested bus stop.
* A web-based, client-side app to consume the above service.

You are free to choose the languages and platforms as you see fit. For example, you might choose to build the the server-side service in a RESTful pattern, or with Websockets. There is no need to integrate with a database for this exercise. You may create mock data as needed, so long as it satisfies the requirements below.

## Server-side service

* There are 10 bus stops (Stops 1 - 10)
* Each stop is serviced by three routes: Routes 1, 2, and 3.
* Each stop is serviced every 15 minutes per route, 24 hours per day, and each route starts running 2 minutes after the previous one.
* Each stop is 2 minutes away from the previous one.

Example schedule for Stop 1: Route 1 12:00, 12:15, 12:30, 12:45 ... Route 2 12:02, 12:17, 12:32, 12:47 ... Route 3 12:04, 12:19, 12:34, 12:49 ... etc..

Stop 2 schedule: Route 1 12:02, 12:17, 12:32, 12:47 ... Route 2 12:04, 12:19, 12:34, 12:49 ... Route 3 12:06 12:21 12:36 12:51 ... etc..


The API should return to the consumer the next 2 arrival times per route for the requested stop.
Example
Get/Retrieve for Stop ID 1
Would return 2 arrival times each for route 1, 2, and 3

## Web-based, client-side app
Create a web-based app in the modern framework of your choice to interact with the API for stops 1 and 2. It should output the updated prediction times every minute until stopped.
Example output when running the app at 3:01PM:

* Stop 1: Route 1 in 14 mins and 29 mins Route 2 in 1 mins and 16 mins Route 3 in 3 mins and 18 mins
* Stop 2: Route 1 in 1 mins and 16 mins Route 2 in 3 mins and 18 mins Route 3 in 5 mins and 20 mins

## General
Please feel free to spruce up the display to your liking. Imagine a user on their iPhone viewing this output.

Include any tests you think are necessary and any instructions or scripts for running the application. We will need to be able to run your code and interact with your work on our computers. Be disciplined in all aspects of your development.

Please provide your solution as a git repo via Bitbucket or GitHub. We'd kindly ask that you don't name anything with ***, including your repo or in your code.
