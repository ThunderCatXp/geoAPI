# Use the Node.js image as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code to the container
COPY . .

# Expose port 3000
EXPOSE 3000

# Run the application
CMD ["npm", "run", "dev"]

#THIS MAY BE NOT WORKING