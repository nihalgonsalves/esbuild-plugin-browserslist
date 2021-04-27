FROM node:14-slim as builder

WORKDIR /usr/src/app

ADD package.json .
ADD yarn.lock .

# All the steps until here can be re-used in the second stage,
# so the devDependencies are installed separately
RUN yarn install --frozen-lockfile --production
RUN yarn install --frozen-lockfile

ADD tsconfig.json .
ADD src/ ./src/

RUN yarn build

FROM node:14-slim

WORKDIR /usr/src/app

ADD package.json .
ADD yarn.lock .

RUN yarn install --frozen-lockfile --production

COPY --from=builder /usr/src/app/build/ ./build/

ENV NODE_ENV=production

EXPOSE 4000

CMD ["yarn", "start"]
