#!/usr/bin/env bash

# -----------------------------------------------------
# init script
cd "$(dirname "$0")/../../../" || exit 1

if [[ "$(command -v realpath)" != "" ]]; then
  ROOT_DIR="$(realpath "$PWD")"
else
  ROOT_DIR="$PWD"
fi

source "$(dirname "$0")/../../includes.sh"

# -----------------------------------------------------
# format code
npm run format
exit_on_error_with_message $? "Failed to format code."

# -----------------------------------------------------
# clear old lint cache
npm run tool:lint:uncache
exit_on_error_with_message $? "Failed to clear eslint cache."

# -----------------------------------------------------
# execute lint
#npm run tool:lint:execute:prod
#exit_on_error_with_message $? "Linting failed for production mode."

# -----------------------------------------------------
# add re-formatted files to git
git add .
