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
# format code - src
prettier \
  --config .prettierrc \
  --loglevel error \
  --write \
  'src/**/*.(ts|tsx|js|jsx|json|scss|sass|css)'
exit_on_error_with_message $? "Failed to format code."

# -----------------------------------------------------
# format code - root
prettier \
  --config .prettierrc \
  --loglevel error \
  --write \
  '*.(ts|tsx|js|jsx|json|scss|sass|css)'
exit_on_error_with_message $? "Failed to format code."
