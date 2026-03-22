FROM node:18-alpine
WORKDIR /app
COPY main.js .
CMD ["node", "main.js"]
