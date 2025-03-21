FROM node:20-alpine as builder

ENV NODE_ENV build

USER node
WORKDIR /home/node/backend

COPY backend/*.json ./
RUN yarn install --immutable --immutable-cache --check-cache

WORKDIR /home/node
COPY --chown=node:node . .

WORKDIR /home/node/backend
RUN yarn prisma generate \
  && yarn build

# ---

FROM node:20-alpine

ENV NODE_ENV production

USER node
WORKDIR /home/node

COPY --from=builder --chown=node:node /home/node/backend/package*.json ./
COPY --from=builder --chown=node:node /home/node/backend/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/backend/dist/ ./dist/

CMD ["node", "dist/backend/src/main.js"]