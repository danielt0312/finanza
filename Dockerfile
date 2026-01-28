FROM alpine

RUN apk add npm

WORKDIR /app
COPY . .

RUN npm install

CMD ["npm", "run", "dev", "--", "--host=0.0.0.0"]