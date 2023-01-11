FROM node:alpine

RUN mkdir -p /usr/src/expressjs-app && chown -R node:node /usr/src/expressjs-app

WORKDIR /usr/src/expressjs-app

COPY package.json *.lock ./

USER node

# RUN yarn install --pure-lockfile
RUN npm install

COPY --chown=node:node . .

EXPOSE 4000