#!/usr/bin/env bash

# -----------------------------------------------------
# init script
cd "$(dirname "$0")/../../" || exit 1

if [[ "$(command -v realpath)" != "" ]]; then
  ROOT_DIR="$(realpath "$PWD")"
else
  ROOT_DIR="$PWD"
fi

source "$(dirname "$0")/../includes.sh"

# -----------------------------------------------------
# check node modules installed
if [[ ! -d "node_modules" ]]; then
  npm install
  exit_on_error_with_message $? "Failed to install required dependencies."
fi

# -----------------------------------------------------
# execute lint
ESLINT_FILE=""
if [[ "prod" == "$1" ]]; then
  ESLINT_FILE=".eslintrc.production.json"
else
  ESLINT_FILE=".eslintrc.development.json"
fi

"$APP_NPM_CLI_BIN/eslint" \
  --ext js,jsx,ts,tsx \
  --config "$ESLINT_FILE" \
  src

exit_on_error_with_message $? "Linting failed."
