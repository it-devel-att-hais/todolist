FROM ruby:2.6.3

RUN apt-get update -qq

RUN mkdir -p /app
WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN bundle update --bundler
RUN bundle install

COPY . /app

EXPOSE 3000
