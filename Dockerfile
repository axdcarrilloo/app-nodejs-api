FROM node:20.9.0
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE  2010
CMD ["node", "index.js"]
