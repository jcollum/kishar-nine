#!/usr/bin/env bash

npm run test
npm version patch --force -m "$1"
git push origin
