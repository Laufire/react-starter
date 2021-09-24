set -e
cd "$(dirname "$0")"

# Tasks
mergeBranch() {
	git fetch origin fresh
	git checkout fresh
	git checkout master
	git merge fresh || true
}

executeScripts(){
	sh ./adopt.sh
	sh ./setup.sh
}

initializeCommit() {
	git add .
	git commit -m "Initialized."
}

deleteScripts() {
	rm ./fresh.sh
}

# Main
mergeBranch
executeScripts
deleteScripts
initializeCommit
