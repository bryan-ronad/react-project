FROM node:17-alpine as builder
WORKDIR /app
COPY ./package.json /app
RUN npm install
COPY . .
RUN npm start

FROM nginx:1.19.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]