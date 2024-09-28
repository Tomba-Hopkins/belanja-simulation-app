#!/bin/sh

#start mongo + pakai db nya
mongod --dbpath /app/db --logpath /var/log/mongodb.log --bind_ip_all --fork

#start node
npm start