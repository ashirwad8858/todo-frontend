FROM node:14.18.3 as node

WORKDIR /app

COPY package.json .

# RUN npm install

COPY . .
RUN npm install
RUN npm run build
# RUN node_modules/.bin/ng build --prod

FROM nginx:alpine
COPY --from=node /app/dist/todo-frontend /usr/share/nginx/html


# FROM node:14.18.3 as node

# WORKDIR /app

# COPY package.json .

# # RUN npm install

# COPY . .
# RUN npm install

# EXPOSE 4200
# # RUN npm run build --prod
# CMD [ "npm","start" ]
