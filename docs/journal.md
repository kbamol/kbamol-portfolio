## Git Push Common errors

## 1. Fix Identity issue
## Run these two commands in your terminal to set your global identity:
git config --global user.name "Amol Bhavar"
git config --global user.email "your-email@example.com"


## Now, to fix that "Initial Commit" so it has your correct name, run:
git commit --amend --reset-author --no-edit


## Git Branching
## Create and Switch to dev Branch
git checkout -b dev

# Link local to GitHub (replace with your actual URL)
git remote add origin https://github.com/YOUR_USERNAME/amolbhavar-portfolio.git

# Push the master branch
git push -u origin master

# Switch to dev and push that too
git push -u origin dev


## The Git Lifecycle (The 3 Stages)

- Untracked (U): File exists on your Mac but not in Git's memory.

- Staged (A): You've told Git, "I want to include this file in my next snapshot."

- Committed: The file is officially saved in your local branch history.

- Pushed: The file is sent to GitHub.

# 1. Stage the file (The 'U' will change to 'A' for Added)
git add docs/networking.md

# 2. Commit it to your local 'dev' branch
git commit -m "docs: add networking setup guide for Route 53"

# 3. Push it to GitHub
git push origin dev