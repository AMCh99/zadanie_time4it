# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build task-api-gateway

# Stage 2: Production
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist/apps/task-api-gateway ./dist/apps/task-api-gateway
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["node", "dist/apps/task-api-gateway/main.js"]