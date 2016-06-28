# Docker Compose Example

A minimal docker compose environment consisting of:

* Interface (www)
* Server (api)
* Reverse Proxy (to route calls via _relative_ paths to www or api)

## Uses
* Proxy (Nginx - Reverse Proxy)
* Server (Node)
* Interface (Nginx Static Content)

## How To

* cd Docker
* docker-compose up
* Navigate to localhost:8180/index.html in your browser
