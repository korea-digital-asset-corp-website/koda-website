FROM node:10.15.3

WORKDIR /user/src/app
ADD . /user/src/app
RUN npm install --global gatsby-cli
RUN npm i
EXPOSE 80
CMD ["npm", "run", "prod"]