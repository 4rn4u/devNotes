
// Initialise repository in current directory
git init


// Add files to commit
git add .
git add name.md


// Commit with a comment
git commit -m "name"


// Current status, non commited changes
git status


// Past commits
git log


// Return to previous version
git checkout 
git checkout 5195f53d0e62effd336aa9e81c5e03706e7c7531
git reset


// Get what changed on the file
git diff


// Create Alias
git config --global alias.tree "log --graph --decorate --all --oneline"

// Add gitignore
--> create file .gitignore
Add --> **/.DS_Store 
