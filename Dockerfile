FROM node:16.13.0-slim

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN npm i -g npm@8.1.2 & yarn && yarn add react-scripts@3.0.1 -g --silent

CMD ["yarn", "start"]