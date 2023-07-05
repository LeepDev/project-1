# Astros' Banging Baseball
The 2017 Houston Astros were caught using a tool (banging a garbage can) and someone in the dugout watching the signs on the other team to give 'hints' to the batter (https://en.wikipedia.org/wiki/Houston_Astros_sign_stealing_scandal).

We're here to give you a peek into the batter's box of an Astro.

Batting for the Astros means you will get hints in the form of banging sounds:
- pitch types -- "**BANG** [ _Pause_ ]"
    - fastball (fast) -- "**BANG**"
    - curve (medium) -- "**BANG** **BANG**"
    - eephus (slow) -- "**BANG** **BANG** **BANG**"
    - concluding pause -- "[ _Pause_ ]"
    
- ball location row -- "**BANG** **BANG** [ _Pause_ ]"
    - array row 0, 1 or 2 -- "**BANG** * (row+1)"
    - concluding pause -- "[ _Pause_ ]"
- ball location column -- "**BANG** **BANG** **BANG**"
    - array col 0, 1, or 2 -- "**BANG** * (col+1)"

TLDR: Bat like an Astro, and you'll be sure to be inside the mind of the opposing pitcher. Unless you got bad ears...

## Tech Stacks
Working with:
- HTML
- JS/JQuery
- CSS

## Wireframes
![alt text](https://drive.google.com/uc?export=view&id=1OxWHNFeMNl161FzczME-c7YL8TQHiSfN)

![alt text](https://drive.google.com/uc?export=view&id=1WFvXNWHznK7thq67muDBm8p_FJtIjfjU)

![alt text](https://drive.google.com/uc?export=view&id=1srM7AZ7XiPPxUq-q4wnqlRhjTyhRrmsp)

![alt text](https://drive.google.com/uc?export=view&id=1AioqRV24DC-nl0hK0nsWV-2f3P6fVjA8)

## MVP Goals
- [X] Create a browser game setup
    - HTML boilerplate
    - starter js file
    - starter css file
- [X] Mock out Wireframes
    - Astros' Banging Baseball
    - Pitcher's Dilema
    - Astros' "All Star" Mode
    - Batter's Box
- [X] Render a pitch selection mode
    - includes a selection of pitches
        - fastball
        - curve
        - eephus
    - includes a tic-tac-toe like pitch location selector
- [ ] Render a astros' batter mode
    - includes a random hint button
        - audio clue of banging noises and pauses
    - includes a selection of batting speeds
        - slow
        - medium
        - fast
    - includes a tic-tac-toe like batting location selector
- [ ] Render Play ball button
    - runs logic and display results (see below)
- [ ] Render a pitch count
    - i.e.: PITCH 2
    - pitch count includes
        - Max of 3 pitches
        - If batter can't make contact on any pitch
            - batter loses
        - else
            - batter wins
- [ ] Render a batting session message
    - "Strike!" when batter does not hit the ball
    - "HIT!!!" when batter does hit the ball
    - "YOU GOT TOSSED!" when batter exceeds suspicion meter
- [ ] Render a suspicion meter
    - if suspicion meter reaches the max, the Astro gets thrown from the game
    - Max of 5 hints total
    - Max of 2 hints per batting session
    - New at bat lowers suspicion meter to 0
- [ ] Render Astros batters Hit/Strikeout count
- [ ] Style Wireframes with CSS

## Stretch Goals
- [ ] Make the Maxes variable/random
    - Maxes:
        - pitch count
        - hints
        - suspicion meter
- [ ] Make an option for number of innnings
    - 3 at bats per inning
- [ ] Make a score board
    - Astros vs Angels
        - show both Hit/Strikeout counts
- [ ] Switch Sides
    - Astros pitch
    - Angles bat (with no hints of course)
- [ ] Animation/State Changes
    - Animate face of batter
    - Animate results
        -strike
        -ball
        -hit
        -thrown out
    - Animate ball flight

## Potential Roadblocks
- Lack of knowledge of tech stack
- Game Funkiness/wonky logic

- CSS is fun...