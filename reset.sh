set -e
cd "$(dirname "$0")"

# Tasks
mergeOverrides() {
	cp -r ./overrides/* .
	rm -rf overrides
}

executeScripts(){
	sh ./adopt.sh
	sh ./setup.sh
}

initializeCommit() {
	git add .
	git commit -m "Initialized."
}

# Main
mergeOverrides
executeScripts
initializeCommit
