# Stage 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY ../../package.json ../../package-lock.json ./
RUN npm install

COPY . .

RUN npm run build users-service

# Stage 2: Production
FROM node:20-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist/apps/users-service ./dist/apps/users-service
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

CMD ["node", "dist/apps/users-service/main.js"]
