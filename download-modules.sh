#!/bin/sh

set -o nounset
set -o errexit
set -o xtrace

# Look into esm.sh
rm ./vendor/*
curl -o "vendor/htm.js" "https://unpkg.com/htm@3.1.1/dist/htm.js"
curl -o "vendor/preact.mjs" "https://unpkg.com/preact@10.13.2/dist/preact.mjs"
curl -o "vendor/preact-hooks.mjs" "https://unpkg.com/preact@10.13.2/hooks/dist/hooks.mjs"
curl -o "vendor/preact-router.js" "https://www.unpkg.com/preact-router@4.1.0/dist/preact-router.module.js"
