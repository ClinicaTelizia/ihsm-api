FROM node:20.16.0

WORKDIR /api

COPY package*.json ./
RUN npm install
RUN npm install -g @nestjs/cli

COPY . .