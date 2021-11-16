FROM node:alpine

WORKDIR /home/portfolio

COPY ./package.json .
RUN yarn

COPY . .
CMD [ "yarn", "start" ]

EXPOSE 3000