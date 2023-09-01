FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

FROM nginx:1.21 AS runner

COPY nginx.conf /etc/nginx/conf.d/default.conf


RUN rm -rf /usr/share/nginx/html/*


COPY --from=build /app/build/ /usr/share/nginx/html

EXPOSE 3000

ENTRYPOINT ["nginx", "-g", "daemon off;"]