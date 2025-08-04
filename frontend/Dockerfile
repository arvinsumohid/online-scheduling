# ===============================================
# Development Stage
# ===============================================
FROM node:20-alpine AS development

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Expose port 3002
EXPOSE 3002

# Start development server
CMD ["npm", "run", "dev"]