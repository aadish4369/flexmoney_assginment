# Dockerfile for Vite frontend

# Use an official Node.js image with a specified version as the base image
FROM node

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the working directory
COPY . .

# Expose the port that the Vite development server will run on
EXPOSE 3000

# Define the default command to run the Vite development server
CMD ["npm", "run", "start"]
