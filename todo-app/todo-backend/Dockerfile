FROM node:hydrogen-bullseye-slim

WORKDIR /usr/src/app

COPY --chown=node:node . .


RUN apt-get update && apt-get install -y --no-install-recommends dumb-init
RUN apt-get update && apt-get upgrade -y
RUN npm ci

ENV DEBUG=docker:*

USER node
CMD ["dumb-init", "node", "./bin/www"]