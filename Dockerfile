FROM node:11
 
WORKDIR /app

COPY package.json /app

RUN rm -rf node_modules
RUN npm install
RUN cat /app/package.json
run npm install -g nodemon
COPY . /app
