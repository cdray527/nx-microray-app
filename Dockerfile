FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g nx && npm install

COPY . .

EXPOSE 4000
EXPOSE 4100
EXPOSE 4200
EXPOSE 4300
