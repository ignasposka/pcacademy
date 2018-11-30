FROM node:8.12.0-alpine

WORKDIR /home/vagrant/hostSharedFolder

WORKDIR /usr/src/api

COPY . .

RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]