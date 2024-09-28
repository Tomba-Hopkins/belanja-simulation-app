# Import dasar
FROM node:18-buster


# Jadiin Folder Utama
WORKDIR /app

# Copy json biar bisa di npm install package2 node nya [ke root di container[rootnya di /app jir]]
COPY package*.json ./

# Run npm i biar download package
RUN npm install

# download mongodb tools -> mongodb 
RUN apt-get update && \
    apt-get install -y wget gnupg && \
    wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add - && \
    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/debian buster/mongodb-org/4.4 main" | tee /etc/apt/sources.list.d/mongodb-org-4.4.list && \
    apt-get update && \
    apt-get install -y mongodb-org mongodb-org-tools && \
    apt-get clean

# Copy semua nya ke ./ ke /app
COPY . .

# Copy file bash
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh


# Expose Port node app & mongodb
EXPOSE 5000
EXPOSE 27017

# Run app nya
# CMD [ "npm", "start" ]

# Run bash buat start app
CMD [ "/app/start.sh" ]