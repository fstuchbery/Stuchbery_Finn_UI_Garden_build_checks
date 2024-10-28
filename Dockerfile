# Build Stage
FROM node:18 AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code
COPY . .

# Build the application for production
RUN npm run build

# Build Storybook
RUN npm run build-storybook

# Production Stage
FROM nginx:alpine

# Copy the build output to the Nginx html directory
COPY --from=builder /app/build /usr/share/nginx/html
COPY --from=builder /app/storybook-static /usr/share/nginx/storybook

# Expose ports
EXPOSE 80 8018

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]