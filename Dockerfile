# Use the official Node.js image as the base image
FROM node:slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies including jose
RUN npm install jose

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port your application listens on
EXPOSE 8080

# Start the application
CMD ["node", "server.js"]
