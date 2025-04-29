FROM node:20

WORKDIR /usr/src/app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build
CMD ["pnpm", "run", "start"]
EXPOSE 3050
