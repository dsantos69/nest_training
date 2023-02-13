#!/bin/bash

npm install
npm build
npx typeorm migration:run -d dist/database/database.providers.js
npm run start:dev