set -e
cd "$(dirname "$0")"

# Tasks
mergeBranch() {
	git merge fresh
}

deleteScripts() {
	rm ./fresh.sh
}

# Main
mergeBranch
deleteScripts
