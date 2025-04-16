FROM node:20

WORKDIR /app

COPY ../ ./

RUN npm i

EXPOSE 4242

CMD ["node", "index.js"]
