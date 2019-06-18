When running the server via `node packages/server` or `node packages/server/lib/index.js` everything works fine.
But running `docker-compose up --build` will result in the following error:

The dependency of my shared package `@root/common` is not found 😞.

```
Building server
Step 1/4 : FROM node:alpine
 ---> d4edda39fb81
Step 2/4 : COPY . /src
 ---> Using cache
 ---> d96b00510d47
Step 3/4 : WORKDIR /src
 ---> Using cache
 ---> f112f411cdfb
Step 4/4 : CMD node lib/index.js
 ---> Using cache
 ---> 87a4cea60811
Successfully built 87a4cea60811
Successfully tagged stackoverflow-monorepo-dependecies_server:latest
Starting stackoverflow-monorepo-dependecies_server_1 ... done
Attaching to stackoverflow-monorepo-dependecies_server_1
server_1  | internal/modules/cjs/loader.js:626
server_1  |     throw err;
server_1  |     ^
server_1  | 
server_1  | Error: Cannot find module '@root/common'
server_1  | Require stack:
server_1  | - /src/lib/index.js
server_1  |     at Function.Module._resolveFilename (internal/modules/cjs/loader.js:623:15)
server_1  |     at Function.Module._load (internal/modules/cjs/loader.js:527:27)
server_1  |     at Module.require (internal/modules/cjs/loader.js:681:19)
server_1  |     at require (internal/modules/cjs/helpers.js:16:16)
server_1  |     at Object.<anonymous> (/src/lib/index.js:7:16)
server_1  |     at Module._compile (internal/modules/cjs/loader.js:774:30)
server_1  |     at Object.Module._extensions..js (internal/modules/cjs/loader.js:785:10)
server_1  |     at Module.load (internal/modules/cjs/loader.js:641:32)
server_1  |     at Function.Module._load (internal/modules/cjs/loader.js:556:12)
server_1  |     at Function.Module.runMain (internal/modules/cjs/loader.js:837:10) {
server_1  |   code: 'MODULE_NOT_FOUND',
server_1  |   requireStack: [ '/src/lib/index.js' ]
server_1  | }
stackoverflow-monorepo-dependecies_server_1 exited with code 1
```
