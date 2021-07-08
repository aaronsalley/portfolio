FROM node
WORKDIR /home

ADD package.json ./
RUN yarn

COPY . ./