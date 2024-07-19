FROM node:20.12.0-alpine

WORKDIR /user/src/app
ADD . /user/src/app
RUN npm install --global gatsby-cli
RUN npm i
EXPOSE 80
CMD ["npm", "run", "prod"]