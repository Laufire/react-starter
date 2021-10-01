#!/bin/bash
set -e
cd "$(dirname "$0")"

executeScript(){
	sh ./adopt.sh
}

# Tasks
installPackages() {
	pnpm i
}

deleteScripts(){
	rm reset.sh
}

initializeCommit(){
	git add .
	git commit -m "Initialized."
}

# Main
executeScript
installPackages
deleteScripts
initializeCommit
