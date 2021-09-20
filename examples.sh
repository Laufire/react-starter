set -e
cd "$(dirname "$0")"

# Tasks
mergeBranch() {
	git merge examples
}

deleteScripts() {
	rm ./examples.sh
}

# Main
mergeBranch
deleteScripts
