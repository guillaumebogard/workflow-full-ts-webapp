FROM node:19-alpine3.16

ENV BACK_HOME /home/app/back
RUN mkdir -p $BACK_HOME
WORKDIR $BACK_HOME

ENV NODE_ENV development

COPY . $BACK_HOME

# Install bash
RUN apk add --no-cache bash

# Install dependencies
RUN npm install --frozen-lockfile
RUN npm install -g typescript
