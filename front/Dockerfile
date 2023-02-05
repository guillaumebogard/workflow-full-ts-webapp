FROM node:19-alpine3.16 AS builder

ENV FRONT_HOME /home/app/front/
RUN mkdir -p $FRONT_HOME
WORKDIR $FRONT_HOME

ENV NODE_ENV development

COPY . $FRONT_HOME

# Install dependencies
RUN yarn install --frozen-lockfile

# Build the app
RUN yarn build

############################################

FROM nginx:1.23.3-alpine-slim AS runner

ENV BUILT_FRONT_HOME /var/www/front/

# Remove the default nginx config
RUN rm -rf /etc/nginx/conf.d/*

# Copy the build from the builder stage
COPY --from=builder /home/app/front/build $BUILT_FRONT_HOME
# Copy the nginx config
COPY ./nginx/nginx-front.conf /etc/nginx/conf.d/nginx-front.conf

EXPOSE 80
