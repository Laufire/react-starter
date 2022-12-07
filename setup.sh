#!/bin/bash
set -e
cd "$(dirname "$0")"

# Tasks
installPackages() {
	pnpm i
}

setupHooks(){
	hooksPath="./.githooks"
	git config core.hooksPath "$hooksPath"
	chmod 775 "$hooksPath"/*
}

# Main
installPackages
setupHooks
