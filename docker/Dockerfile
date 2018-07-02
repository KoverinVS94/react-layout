FROM node:10

WORKDIR /usr/src/app

COPY package.json package-lock.json /usr/src/app/

RUN npm i

COPY ./templates/favicon.svg /usr/src/app/templates/
COPY ./webpack/webpack.favicon.js /usr/src/app/webpack/
COPY ./crutch.js /usr/src/app/

RUN npm run build:favicons

COPY . .

RUN npm run build && npm run build:server

EXPOSE 8080
CMD node ./index.js
