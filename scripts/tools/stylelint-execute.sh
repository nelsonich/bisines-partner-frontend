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

FOLDERS=("src/assets/styles" "src/components" "src/layouts" "src/screens")
LINT_EXIT_CODE=0
for FOLDER in ${FOLDERS[@]}; do
  "$APP_NPM_CLI_BIN/stylelint" \
    --config "$ROOT_DIR/.stylelintrc.yaml" \
    --cache false \
    "$FOLDER/**/*.{scss,sass,css}"
  EXIT_CODE=$?

  if [[ $EXIT_CODE != 0 ]]; then
    LINT_EXIT_CODE=$EXIT_CODE
  fi
done

exit_on_error_with_message $LINT_EXIT_CODE "Linting failed."
