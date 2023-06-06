# Use node version 18 base image for running this app
FROM node:18

# The working directory for any subsequent instructions
WORKDIR /app

COPY package*.json ./

RUN npm install

# Copy all the files
# The node_modules file will be ignored (in the .dockerignore file)
COPY . .

ENV PORT=3000

EXPOSE 3000

CMD [ "npm", "start" ]