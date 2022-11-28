FROM ruby:3.1.3-alpine3.15

ARG APP_ROOT=/app

ARG PACKAGES="vim openssl-dev postgresql-dev build-base curl nodejs yarn less tzdata git postgresql-client bash screen"

RUN apk update \
    && apk upgrade \
    && apk add --update --no-cache $PACKAGES

RUN mkdir $APP_ROOT
WORKDIR $APP_ROOT

COPY Gemfile Gemfile.lock  ./
RUN bundle install --jobs 5

ADD . $APP_ROOT
ENV PATH=$APP_ROOT/bin:${PATH}

EXPOSE 3000

CMD ["bundle", "exec", "rails", "s", "-b", "0.0.0.0"]
