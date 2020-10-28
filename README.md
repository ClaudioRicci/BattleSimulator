# BattleSimulator

## Approach Taken:

I wanted to ensure that State was left untouched as best as possible, to make UI States more predictable when rendering and easier to write Unit tests against. As such, the entire Application is built with Functional Components, with only a handful of React Hooks used to manage isolaoted Component State.

Styled Components were used to quickly put together the basic building blocks of the UI, with some Unit tests written to test for rendering, colours, fonts etc. I deleiberately took this approach as, although I wanted to focus on the game logic mainly, I did want to highlight that I am aware of how to quickly create Javascript Rendered Components utilising a "themeVariables.ts" file to control Global settings of "CSS in Javascript" parameters that are referenced with a dollar \${} placeholder and then switched out at run time.

I also took the approach of seperating my 'ScoreReducer' method into a 'helperMethods.tsx' file, which is then imported into the 'board' Component as it is needed. This is a deliberate 'sepertion of concerns', as I want to show that a best practice for sturdy Application Architecture is to place common methods into external file(s) and only call each individually as and when needed, maximising reuse and also meaning that it is easy to maintain the functionality and write Unit Test against it in the knowledge that you only have to yest one underlying method used through an application.

Furthermore, I utilised Typescript to ensure that Props and State property types are explicitly declared, eliminating any unintended side effects and making Unit Tests easier write and functionality far less likely to be flawed.

Essentially, I have tried to illustrate, where possilble, SOLID and DRY programming principles.

## Game Design

Essentially, I tried to use the provide design as a guide, opting to utilise Stled Components for the majority of the UI.

For the 'Dice Rolling' mechanism, I decided to just write a 'while' loop that randomly generated 4 rolls between the values of 1 and 6 upon clicking the 'Attack!' button.

These 4 rolls are then sliced into 2 arrays of 2 numbers each; the first 2 numbers were assigned to the player, the second 2 numbers to the monster.

I then wrote some simple comparision logic to ascetain which of the 2 totals was larger. Which ever number was larger, the lower number would be subtracted from, and that value is then subtracted from the owner of the lower numbers (e.g. the losing combatant) total life score.

I wrote some presentation logic to display either a 'You Win' or 'Game Over' message depending on if the Players score remained above zero for longer than the Monsters or not.

A further piece of wrapping presentational logic around the 'Attack!' button simply checks to see if either the player or the monster's life in state has reached zero, and, if it has, display a 'New Gane' button which then simply resets both users lifes to 100, and the 'Attack!' button is then reshown, as the life value for both is no longer 0.

For the Dice, I simply imported 6 connsts, each of which was a returned template for a DIe, 1 to 6, which each were styled to look like a real die. I then simply wrote presentational logic to render one of a possible 6 twice for each Combatant depending on each the values of each of their 2 numbers in their Array e.g. if a Combatant had a 5 in their Array, the corresponding 'DiceFive' Component is rendered.

For the Loading Bars, I simply passed in the life from state (playerLifeTotal, monsterLifeTotal) of the Combatant as a prop, and in the ProgressBar itself, passed in this value to represent the width of the inner bar. Therefore, everytime the 'Attack!' button as clicked, and the scores known, the newley updated life value set in a 'useState' hook at the top-level 'Board' Component would immediately propogate this value into the bar, adjusting the bar width to be smaller if that combatant's roll number was lower on that button press.

Finally, I added some presentational logic to inform either the player or the monster on how many points off their life hade been deducted on that turn, should their 2 rolls have been lower than their opponents,

## What I would have expanded on with more time

I would have:

- Added more Unit tests, especially to test the actions, reducers and mathematical ooperations
- Created a Mobile version
- Cleaned up the CSS
- Remove superfulous code
- Look to refactor code

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
