# AlexisFournier_13_02122021
Utilisez une API pour un compte utilisateur bancaire avec React

--- 

## How to install

- Clone the repo
- Install the dependencies : yarn or yarn install
- Build the app : `yarn build`

## Env

- REACT_APP_BACKURL : The API URL (default: localhost:3001)

## How to start
- Launch the app : `yarn start`
- Go to localhost:3000

--- 

## How datas are stored
All user's data are stored in redux state, it is volatile if you leave or refresh the page.
If the "keep me signed in" box is checked, the user's data are duplicated in the session storage.
Therefore :
- If you are connected and you do not check the "keep connected"
- Then you will be logged out when refreshing

- If you are logged in and you have checked the "keep logged in" box
- Then you will not be disconnected when refreshing

--- 

## Versions
Node: 16.13.1
React: 17.0.2
Redux: 7.2.6

## IDE
VS Code