# FROM node:14.18.3 as node

# WORKDIR /app

# COPY package.json .

# # RUN npm install

# COPY . .
# RUN npm install

# EXPOSE 4200
# # RUN npm run build --prod
# CMD [ "npm","start" ]






FROM node:14.18.3 as node

WORKDIR /app

COPY package.json .

# RUN npm install

COPY . .
RUN npm install --force
# RUN npm run build --prod
RUN node_modules/.bin/ng build --prod



FROM nginx:alpine
COPY --from=node /app/dist/todo-frontend /usr/share/nginx/html

