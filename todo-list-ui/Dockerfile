FROM node:10-alpine3.11 as build

ARG BUILD_ENV

WORKDIR /frontend/source

COPY . /frontend/source

RUN npm install -g @angular/cli --unsafe-perm

RUN npm install

RUN ng build --configuration=$BUILD_ENV

FROM nginx:1.16.1-alpine

COPY --from=build /frontend/source/dist/todo-list-ui /frontend

RUN rm -rf /frontend/source/todo-list-ui
