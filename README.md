# Vanilla JavaScript App with Component and Router

This app builds a javascript component that is used to display houses fetch from a REST API. The app also includes a router for routing user request to different url paths (routes) for data presentation.

Change in url is detected using hashchange event listener.

Javascript fetch() is used in consuming REST API data.

## REST API
REST API url is http://127.0.0.1:12345/api/houses/index.php

### Testing
Install live-server and run below command in the root folder:

live-server --port=3333 

you can use any other port that is not in use on your system.