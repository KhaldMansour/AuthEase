# Step 1: Use an official Node.js image as the base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the container
COPY Backend/package.json ./
COPY Backend/package-lock.json ./


# Step 6: Install dependencies
RUN npm install

# Step 7: Install NestJS CLI globally
RUN npm install -g @nestjs/cli

# Step 8: Copy the rest of the application files into the container
COPY Backend/ .

# Step 9: Expose the port the app will run on
EXPOSE 3000

# Step 10: Run the app in development mode (watch mode)
CMD ["npm", "run", "start"]
