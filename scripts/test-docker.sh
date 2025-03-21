#!/bin/bash

# Exit on error
set -e

echo "🚀 Testing Peeper App in Docker..."

# Build the development image
echo "📦 Building development Docker image..."
docker-compose build dev

# Start the container in development mode
echo "🔥 Starting the development container..."
docker-compose up -d dev

# Wait for the application to start
echo "⏳ Waiting for the application to start..."
sleep 10

# Test if the application is running
echo "🧪 Testing if the application is accessible..."
if curl -s http://localhost:3000 > /dev/null; then
  echo "✅ Application is running successfully!"
else
  echo "❌ Failed to access the application!"
  docker-compose logs dev
  docker-compose down
  exit 1
fi

# Show logs
echo "📄 Container logs:"
docker-compose logs dev

# Clean up
echo "🧹 Cleaning up..."
docker-compose down

echo "🎉 Test completed successfully!"