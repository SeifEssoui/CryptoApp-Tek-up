# Stage 1: Build the React app
#chni5dmou bimage node
FROM node:14-alpine as build 
WORKDIR /app
#chni5dmou fi/app
COPY package*.json ./
#copier dipendincie
RUN npm install
#install node modules
COPY . .
RUN npm run build

#notre application is in build

# Stage 2: Create a minimal image with only the built app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
#nginix distribute the trafic 