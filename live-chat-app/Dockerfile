# Use an official Node.js runtime as a parent image
FROM node:16-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Use an official Nginx image to serve the application
FROM nginx:alpine

# Copy the built Angular application from the build stage
COPY --from=build /app/dist/live-chat-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]