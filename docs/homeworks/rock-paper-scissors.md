---
title: 2. Rock Paper Scissors
sidebar_position: 2
---

# Rock Paper Scissors

Using the programming concepts we've learned so far, implement a rock, paper, scissors game. The output of the game should look like this:

```
ROCK, PAPER, SCISSORS
0 Wins, 0 Losses, 0 Ties
Enter your move: (r)ock (p)aper (s)cissors or (q)uit
p
PAPER versus...
PAPER
It is a tie!
0 Wins, 1 Losses, 1 Ties
Enter your move: (r)ock (p)aper (s)cissors or (q)uit
s
SCISSORS versus...
PAPER
You win!
1 Wins, 1 Losses, 1 Ties
Enter your move: (r)ock (p)aper (s)cissors or (q)uit
q
```

To implement this game, you will have to:
- Keep track of the player's wins, losses, and ties
- Implement a loop that keeps the game running until the player quits
- Generate the computer's move (rock, paper, or scissors) randomly
- Compare the player's move with the computer's move to determine the winner