FROM node

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8080

CMD ["/bin/bash", "./entrypoint.sh"]
