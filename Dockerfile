# Import dasar
FROM node:18-alpine

# # install node mongodb dll dll
# RUN apt-get update && \
#     apt-get install -y nodejs npm mongodb && mongodb-tools && \
#     apt-get clean

# Jadiin Folder Utama
WORKDIR /app

# Copy json biar bisa di npm install package2 node nya [ke root di container[rootnya di /app jir]]
COPY package*.json ./

# Run npm i biar download package
RUN npm install

# download mongodb tools -> mongodb 
RUN apk --no-cache add mongodb-tools

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