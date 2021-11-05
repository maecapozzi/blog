---
path: "/how-to-recover-after-a-force-push"
date: "2021-11-05"
title: "How to Recover an Overwritten Commit After a --force-push"
excerpt: "Have you ever accidentally overwritten a colleague's work with a force push? Here's an easy way to recover without anyone ever having to know."
tags: [{ name: "git" }]
---

The other day I was working on a git branch, and I wanted some feedback from a colleague. We work in different time zones, so after I logged off for the night, he pushed a commit to my branch to suggest an alternative approach.

Over the course of the next 13 hours I forgot that he had added a commit to my branch. I only realized that I had overwritten his work (and modified the git history in the processs) after the fact.

Normally, I would've just sent him a message asking him to push up his local copy of the branch again, but he happened to be at an appointment. In the course of trying to restore the lost changes, I learned that Github's tree URLs support reflog syntax.

I was able to find my colleague's changes at `https://github.com<org-name>/<repo-name>/tree/<branch-name>@{2}`. This allowed me to look up the hash of his commit so that I could reset it.

It's good to know how to solve this problem if you run into it, but there's an even better way to avoid the problem in the first place. Git offers a `--force-with-lease` flag that checks to see if anyone else has pushed to your branch before overwriting the branch with your changes.

To make this easier so that I don't have to remember to type `--force-with-lease` every time, I usually set up an alias like this one:

```zsh
alias gpf = git push --force-with-lease
```

---

Thanks to Tim Brown [@brimtown](https://twitter.com/_brimtown) for originally encouraging me to set up an alias after I overwrote his work in 2019 or something.
