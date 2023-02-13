FROM node:16-alpine3.12

RUN apk add --no-cache bash

RUN npm install -g @nest/cli

USER node

WORKDIR /home/node/app