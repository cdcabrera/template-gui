#!/usr/bin/env bash
#
#
# Clean directories
#
version()
{
  UI_VERSION="$(node -p 'require(`./package.json`).version').$(git rev-parse --short HEAD)"
  echo "Version... UI_VERSION=$UI_VERSION"
  echo UI_VERSION="$UI_VERSION" > ./.env.production.local
}
#
#
# Clean directories
#
clean()
{
  echo "Cleaning build directories..."
  rm -rf -- "$(pwd)"/build
}
#
#
# main()
#
{
  clean
  version
}
