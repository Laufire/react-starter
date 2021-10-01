set -e
cd "$(dirname "$0")"

# Tasks
mergeBranch() {
	git fetch origin fresh
	git checkout fresh
	git merge master --strategy=ours --no-edit
	git checkout master
	git merge fresh
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
mergeBranch
executeScripts
initializeCommit
