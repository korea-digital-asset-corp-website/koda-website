FROM node:20.12.0-alpine

WORKDIR /user/src/app
ADD . /user/src/app
RUN npm install --legacy-peer-deps --global gatsby-cli
RUN npm i --legacy-peer-deps
EXPOSE 80
CMD ["npm", "run", "prod"]