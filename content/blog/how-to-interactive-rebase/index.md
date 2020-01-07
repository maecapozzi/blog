---
path: "/how-to-interactive-rebase"
date: "2020-01-06"
title: "How to Interactive Rebase"
---

_In this post, I'm using vim. But you can use a different editor if you want! You'll need to figure out how to use your editor as your machine's default git commit/diff tool. You can find instructions for configuring this with VS Code [here](https://stackoverflow.com/questions/30024353/how-to-use-visual-studio-code-as-default-editor-for-git)._

Developers have different opinions about whether to rebase or not. Some feel strongly about not modifying commit history, even if the commit log looks something like this:

```bash
commit 795b95f7b824242588db10bef13c59f3b09a762f (HEAD -> master, origin/master, origin/HEAD)
Author: maecapozzi <maecapozzi@gmail.com>
Date:   Fri Jan 3 12:47:15 2020 -0500

    DAMN IT WHY WONT THIS WORK?!?!?!

commit ac61b5f10d90b3ab263ebba922627156b3629028
Author: maecapozzi <maecapozzi@gmail.com>
Date:   Mon Dec 30 16:02:24 2019 -0500

    just kidding, now it works

commit 0e14e048bd0e911ed43df747a06a5b9224120be9
Author: maecapozzi <maecapozzi@gmail.com>
Date:   Mon Dec 30 15:48:45 2019 -0500

    it works!!!

commit 9822a00507c89b94d039c2e4cca2adee53e8dbff
Author: maecapozzi <maecapozzi@gmail.com>
Date:   Sun Dec 29 19:40:06 2019 -0500

  wip
```

I'd prefer it if my teammates didn't see all of my embarrassing commit messages, I want to make sure that my commits are meaningful and will help my teammates later, and I also want to regularly commit without interrupting my flow. For that reason, I like amending my history before I push my branch up to Github.

This allows me to write clear, detailed commits like this one, even though my commit log looks like the one above most of the time:

```bash
commit 57fe4d23d8f685cab9e186c72770f78e1f1d2158
Author: maecapozzi <maecapozzi@gmail.com>
Date:   Tue Dec 3 10:59:51 2019 -0500

    [Shipping Address] Client-side validation for required fields

    This PR adds the ability to display localized errors on the shipping address
    form for required fields.

    The fields that are required are:
    - email
    - name
    - lineOne
    - city
    - postal

    A future PR will address other validation rules, like min/max, and telephone
    validation.

    This PR also refactors the ShippingForm component and tries to break down the
    `/ShippingForm` directory in a way that might be easier to sift through.
```

One way to amend that history while keeping your branch up to date with `master` is to use an interactive `git rebase`.

This is my usual workflow:

1. Checkout the master branch and pull down any new changes

```bash
git checkout master
git pull origin master
```

2. Checkout your branch again. Pro tip: running `git checkout -` will bring you back to the branch you were on previously.

```bash
git checkout -
```

3. Rebase against the `master` branch to pull any of the new changes from master onto your branch. You may run into merge conflicts at this point. You'll need to resolve them before moving on.

```bash
git rebase master
```

4. Run the interactive rebase command

```bash
git rebase -i master
```

If you have two commits on your branch, you'll see something that looks like this:

```bash
pick cca9f22 Add blog post
pick cba7f23 wip

# Rebase 795b95f..cca9f22 onto 795b95f (1 command)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
"~/Desktop/Codes/blog/.git/rebase-merge/git-rebase-todo" 27L, 1162C
```

At the end of the interactive rebase, you want a single commit with a clear message, written in present tense.

5. Because we want to reword the first commit, change the first line from `pick` to `reword`.

6. We want to squash the second commit into the first, so we'll change the second commit to `squash` or `fixup`.

There's a slight difference between `squash` and `fixup`. `squash` merges the previous and current commit, but keeps the message. `fixup` merges the previous and current commit, and discards the message. I tend to use `squash` because I often like to keep track of that message for when I reword my commit.

```bash
reword cca9f22 Add blog post
squash cba7f23 wip

# Rebase 795b95f..cca9f22 onto 795b95f (1 command)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
#
# These lines can be re-ordered; they are executed from top to bottom.
#
# If you remove a line here THAT COMMIT WILL BE LOST.
#
# However, if you remove everything, the rebase will be aborted.
#
# Note that empty commits are commented out
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
"~/Desktop/Codes/blog/.git/rebase-merge/git-rebase-todo" 27L, 1162C
```

When you close this window, a new window will open that looks like this:

```
Add blog post

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Mon Jan 6 16:18:52 2020 -0500
#
# interactive rebase in progress; onto 795b95f
# Last command done (1 command done):
#    reword cca9f22 Add blog post
# Next command to do (1 remaining command):
#    squash 53a5620 Work on blog
# You are currently editing a commit while rebasing branch 'rebase-example' on '795b95f'.
#
# Changes to be committed:
#       new file:   content/blog/how-to-rebase/index.md
#
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
"~/Desktop/Codes/blog/.git/COMMIT_EDITMSG" 17L, 564C
```

7. Delete the commit message and replace it with something more meaningful.

```
Add a blog post on how to interactive rebase

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Mon Jan 6 16:18:52 2020 -0500
#
# interactive rebase in progress; onto 795b95f
# Last command done (1 command done):
#    reword cca9f22 Add blog post
# Next command to do (1 remaining command):
#    squash 53a5620 Work on blog
# You are currently editing a commit while rebasing branch 'rebase-example' on '795b95f'.
#
# Changes to be committed:
#       new file:   content/blog/how-to-rebase/index.md
#
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
"~/Desktop/Codes/blog/.git/COMMIT_EDITMSG" 17L, 564C
```

When you close this window, you'll see another one pop open that looks like this:

```bash
# This is a combination of 3 commits.
# This is the 1st commit message:

Add a blog post on how to interactive rebase

# This is the commit message #2:

wip

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Mon Jan 6 16:18:52 2020 -0500
#
# interactive rebase in progress; onto 795b95f
# Last commands done (3 commands done):
#    squash 53a5620 Work on blog
#    squash 6342a2a Reabse
# No commands remaining.
# You are currently rebasing branch 'rebase-example' on '795b95f'.
#
# Changes to be committed:
#       new file:   content/blog/how-to-rebase/index.md
#
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
"~/Desktop/Codes/blog/.git/COMMIT_EDITMSG" 28L, 672C
```

8. You can delete everything besides the message you want to keep:

```bash
Add a blog post on how to interactive rebase

# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# Date:      Mon Jan 6 16:18:52 2020 -0500
#
# interactive rebase in progress; onto 795b95f
# Last commands done (3 commands done):
#    squash 53a5620 Work on blog
#    squash 6342a2a Reabse
# No commands remaining.
# You are currently rebasing branch 'rebase-example' on '795b95f'.
#
# Changes to be committed:
#       new file:   content/blog/how-to-rebase/index.md
#
~
~
~
~
~
~
~
~
~
~
~
~
~
~
~
"~/Desktop/Codes/blog/.git/COMMIT_EDITMSG" 28L, 672C
```

If it worked, you'll see a message like this: `Successfully rebased and updated refs/heads/rebase-example.`

If you run `git log`, you should only have a single commit with your new message.

Now, if you want to push your code up to Github and haven't pushed any commits up yet, it's as simple as just running `git push`. If you or someone else has already committed, and you want to override that history, you'll need to force push. I'd recommend running `git push --force-with-lease` instead of `git push --force`. `--force-with-lease` will make sure that you don't accidentally overwrite your teammate's code. (You'd better believe I learned that the hard way!)

As always, before you start rebasing with abandon confirm that your teammates are on board. You want to make sure that you're following your team's etiquette and staying consistent.
