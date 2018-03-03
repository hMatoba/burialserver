FROM node:alpine

WORKDIR /app
RUN apk update &&\
    npm install --save mongodb &&\
    npm install --save express
EXPOSE 8080
COPY ./app.js .
ADD util /app/util

ENTRYPOINT ["node", "app.js"]