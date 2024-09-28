#!/bin/sh

#start mongo + pakai db nya
# mongod --dbpath /app/db --logpath /var/log/mongodb.log --bind_ip_all --fork

# #start node
# npm start


echo "Starting MongoDB..."
mongod --dbpath /app/db --logpath /var/log/mongodb.log --bind_ip_all --fork
echo "MongoDB started."

# Restore the belanja-app database from BSON files
echo "Restoring belanja-app database..."
mongorestore --db belanja-app --drop /app/db/belanja-app
echo "Database restored."

echo "Starting Node.js app..."
npm start
echo "Node.js app started."