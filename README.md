# Astros' Banging Baseball
The 2017 Houston Astros were caught using a tool (banging a garbage can) and someone in the dugout watching the signs on the other team to give 'hints' to the batter (https://en.wikipedia.org/wiki/Houston_Astros_sign_stealing_scandal).

We're here to give you a peek in to the batter's box of an Astro.

Batting for the Astros means you will get hints in the form of banging sounds:
- pitch types -- "**BANG** [ _Pause_ ]"
    - fastball (fast) -- "**BANG**"
    - curve (medium) -- "**BANG** **BANG**"
    - eephus (slow) -- "**BANG** **BANG** **BANG**"
    
- ball location row -- "**BANG** **BANG** [ _Pause_ ]"
    - array row 0, 1 or 2 -- "**BANG** * (row+1)"
- ball location column -- "**BANG** **BANG** **BANG**"
    - array col 0, 1, or 2 -- "**BANG** * (col+1)"

TLDR: Bat like and Astro, and you'll be sure to be inside the mind of the opposing pitcher. Unless you got bad ears...

## Tech Stacks
Working with:
- HTML
- JS
- CSS

## Wireframes
- TBD

## MVP Goals
- Create a browser game
- Render a pitch selection mode
    - includes a selection of pitches
        - fastball
        - curve
        - eephus
    - includes a tic-tac-toe like pitch location selector
- Render a astros' batter mode
    - includes a hint button
        - audio clue of banging noises and pauses
    - includes a selection of batting speeds
        - slow
        - medium
        - fast
    - includes a tic-tac-toe like batting location selector
- Render a pitch count
    - i.e.: PITCH 2
    - pitch count includes
        - Max of 3 pitches
        - If batter can't make contact on any pitch
            - batter loses
        - else
            - batter wins
- Render a batting session message
    - "Strike" when batter does not hit the ball
    - "HIT!!!" when batter does hit the ball
    - "YOU GOT TOSSED!" when batter exceeds suspicion meter
- Render a suspicion meter
    - if suspicion meter reaches the max, the Astro gets thrown from the game
    - Max of 5 hints total
    - Max of 2 hints per batting session
    - New at bat lowers suspicion meter to 0
- Render Astros batters Hit/Strikeout count

## Stretch Goals
- Make the Maxes variable/random
    - Maxes:
        - pitch count
        - hints
        - suspicion meter
- Make an option for number of innnings
    - 3 at bats per inning
- Make a score board
    - Astros vs Angels
        - show both Hit/Strikeout counts
- Switch Sides
    - Astros pitch
    - Angles bat (with no hints of course)

## Potential Roadblocks
- Time
- Lack of knowledge of tech stack
- Game Funkiness/wonky logic