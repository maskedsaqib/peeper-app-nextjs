# Peeper App

A modern web application built with Next.js and TailwindCSS.

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker Usage

The application can be run using Docker, which ensures consistent environments across development and production.

### Development Mode

For development with hot-reloading:

```bash
npm run docker:dev
# or
docker-compose up dev
```

### Production Mode

For production builds:

```bash
npm run docker:prod
# or
docker-compose up app
```

### Testing Docker Setup

To test if Docker is correctly set up:

```bash
npm run docker:test
```

This will build the development image, start the container, check if the application is accessible, and finally clean up.

## Features

- Modern UI built with TailwindCSS
- Fully responsive design
- Next.js for server-side rendering
- TypeScript for type safety
- Docker containerization for consistent environments

## Deployment

The app can be deployed using the included Dockerfile or through platforms like Vercel.

### VPS Deployment

For detailed instructions on deploying to a VPS, see the [deployment-guide.md](deployment-guide.md) file.