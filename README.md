# TEST - DockerCompose

A minimal docker compose environment consisting of:

* Interface (www)
* Server (api)
* Reverse Proxy (to route calls via _relative_ paths to www or api)


## How To

* cd Docker
* docker-compose up
* Navigate to localhost:8180/index.html in your browser
