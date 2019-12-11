FROM node:12.13.1-alpine

LABEL maintainer="Marcin Placzek <marcin1placzek@gmail.com>"

RUN apk add --no-cache git

RUN git clone https://github.com/Kabassu/kabassu-gui.git

COPY next.config.js kabassu-gui

WORKDIR /kabassu-gui

RUN npm install

EXPOSE 3000

CMD npm run dev