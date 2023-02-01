FROM node:19-alpine3.16 AS builder

ENV FRONT_HOME /home/app/front
RUN mkdir -p $FRONT_HOME
WORKDIR $FRONT_HOME

ENV NODE_ENV development

COPY . $FRONT_HOME

# Install dependencies
RUN yarn install --frozen-lockfile

# Build the app
RUN yarn build

############################################

FROM nginx:1.23.3-alpine-slim

ENV BUILT_FRONT_HOME /var/www/front

COPY --from=builder /home/app/front/build $BUILT_FRONT_HOME
COPY --from=builder /home/app/front/nginx.conf /etc/nginx/conf.d/default.conf:ro

EXPOSE 80
