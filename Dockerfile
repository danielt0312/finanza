FROM alpine

RUN apk add npm

WORKDIR /app
COPY . .

RUN npm install @mui/material @emotion/react @emotion/styled

CMD ["npm", "run", "dev", "--", "--host=0.0.0.0"]