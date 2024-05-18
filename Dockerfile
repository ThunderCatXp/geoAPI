# Use a base image with Node.js and npm installed
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Generate Prisma Client with the correct runtime
RUN npx prisma generate --schema=./prisma/schema.prisma

# Expose the necessary ports
EXPOSE 3000

# Run the application
CMD ["npm", "run", "dev"]

# Actually working,hosts on port 3000
# docker run -p 3000:3000 geoapi