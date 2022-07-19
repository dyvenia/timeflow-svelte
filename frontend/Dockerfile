# stage build
FROM node:16-alpine

WORKDIR /frontend

# copy everything to the container
COPY . .

# clean install all dependencies
RUN npm ci

# remove potential security issues
# RUN npm audit fix

# build SvelteKit frontend
RUN npm run build


# stage run
FROM node:16-alpine

WORKDIR /frontend

# copy dependency list
COPY --from=0 /frontend/package*.json ./

# clean install dependencies, no devDependencies, no prepare script
RUN npm ci --production --ignore-scripts

# remove potential security issues
# RUN npm audit fix

# copy built SvelteKit frontend to /frontend
COPY --from=0 /frontend/build ./

EXPOSE 3000
CMD ["node", "./index.js"]