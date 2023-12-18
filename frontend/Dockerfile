FROM node:alpine3.19

WORKDIR /usr/src/app

COPY package.json .
RUN npm install --silent

COPY . .

CMD ["npm", "run", "dev",  "--host"]
