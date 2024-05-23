FROM node:latest

WORKDIR /web

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "run", "dev"]

# docker build -t web .
# docker run -p 4000:4000 web