# Use the official Nginx image as the base image
FROM node:slim

# Set the working directory to /usr/share/nginx/html
WORKDIR /app

# Copy the current directory contents into the container
ADD . /app

# Expose port 8080 for Google Cloud Run
#EXPOSE 8080

# Run nodejs in the foreground
CMD node server.js






