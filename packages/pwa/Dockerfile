FROM node:alpine
ENV NODE_OPTIONS --openssl-legacy-provider

WORKDIR /home/portfolio

COPY ./package.json .
RUN yarn --silent

COPY . .
CMD [ "yarn", "start" ]

EXPOSE 3000