FROM node:18.16.0-alpine

ARG WORK_DIR=/var/www/node
RUN mkdir -p ${WORK_DIR}
COPY . ${WORK_DIR}/
WORKDIR ${WORK_DIR}

# install ALL modules
RUN npm ci
# build
RUN npm run build

# ENTRYPOINT  ["npm", "run", "start:prod"]

# Set NODE_ENV environment variable
ENV NODE_ENV production

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
