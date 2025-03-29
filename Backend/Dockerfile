# Stage 1: Build
FROM node:20 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY Backend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY Backend/ .

# Stage 2: Production (lighter image)
FROM node:20-alpine

WORKDIR /app

# Copy built files and dependencies from the previous stage
COPY --from=build /app /app

# Expose port (default NestJS port)
EXPOSE 3000

# Health check (optional)
HEALTHCHECK CMD curl --fail http://localhost:3000/health || exit 1

# Start the backend application
CMD ["npm", "run", "start:dev"]
