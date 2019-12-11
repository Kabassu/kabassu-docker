FROM openjdk:12-alpine

LABEL maintainer="Marcin Placzek <marcin1placzek@gmail.com>"

ENV KABASSU_VERSION 0.3.0-SNAPSHOT

RUN apk add --no-cache unzip

COPY kabassu.${KABASSU_VERSION}.zip .

RUN unzip kabassu.${KABASSU_VERSION}.zip

COPY configuration/* ./modules/

EXPOSE 8082 8092

CMD /bin/sh start.sh