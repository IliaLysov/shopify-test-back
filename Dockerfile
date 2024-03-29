FROM node:20.10-alpine3.18
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
COPY .env .
CMD ["npm", "start"]