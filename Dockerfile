# Import dasar
FROM node:18-alpine

# Jadiin Folder Utama
WORKDIR /app

# Copy json biar bisa di npm install package2 node nya [ke root di container[rootnya di /app jir]]
COPY package*.json ./

# Run npm i biar download package
RUN npm install

# Copy semua nya ke ./ ke /app
COPY . .

# Expose Port
EXPOSE 5000

# Run app nya
CMD [ "npm", "start" ]