# Ontario Parks

> _Note:_ This document is intended to be relatively short. Be concise and precise. Assume the reader has no prior knowledge of your application and is non-technical. 
## Description 
 * Our group is currently working with the Assistant Park Superintendent of Arrowhead Provincial Park in order to extend on an app previously built by another team. Our application 
 aims to improve the experience and potentially induce interest of travelers travling through certain areas of Ontario by providing an audio tour. Depending on the location of 
 the traveler and their indicated interests, the application plays short audio introductions on what their area has to offer. Ultimately, users will be introduced to locations, cultures,
 histories, and products that they were previously unaware of through the application while traveling.
* The previously developed program already implemented interactions with a map involving locations of potential interests. Upon interactiong with those locations via tapping, users
can see a short introduction on that location and click on a play button to play an audio reading of that same paragraph. By the request of the our park assistant superintendent, John Leadston,
we are adding new features like registration, log-in, user profiles, settings & preferences. And if time allows, we will also add in features like different displays based on the current speed
the user is traveling at.

## Key Features
- Menu Screen.
  - Upon opening the application, users are presented with the main menu screen, where they have the option to login, view the map, or change their preferences. Clicking each button leads to a new screen. <br />
  - <img src="demo/main.jpg" height= 600>
- Log-in and registration screens. 
  - The login screen allows users to login to an account they already have or register for a new account. Though users are not required to make an account as they can directly use the app via the "Map" button. 
  - Benefits of having an account includes using the application on multiple devices and keeping your settings across devices.<br />
    <img src="demo/login.jpg" height= 600>
- Signup screen. 
  - Users can signup for a new account here, and have their settings stored for device switching. <br />
    <img src="demo/signup.jpg" height = 600>
- Settings and prefereces screen. 
  - Here, users have the ability to change the following settings:
  - Their points of interest - cultural, agricultural, natural, historical, indigenous, etc.
  - Play full audio or audio of just short hooks. <br />
    <img src="demo/settings.jpg" height = 600>
- Map screen.
  - Where the user is able to see points of interest and tap on them to read more about them. (This feature is currently not complete as there are bridging issues between our code and the previous group's code, to which we are extending. A temporary map screen is used in its stead.)<br />
    <img src="demo/map.jpg" height = 600>

## Instructions
 * Clear instructions for how to use the application from the end-user's perspective
 * How do you access it? Are accounts pre-created or does a user register? Where do you start? etc. 
 * Provide clear steps for using each feature described above
 * This section is critical to testing your application and must be done carefully and thoughtfully

## Development requirements
### Front End Development Installing

**Developers have the option to view their development changes on the web browser, or on their iOS or Android devices through the Expo app.**

#### Installation on PC

Install Node js on your local machine via the following link.

```
https://nodejs.org/en/download/
```

Install Expo command line interface on your Windows local machine using the command:

```
npm install expo-cli --global
```

Install Expo command line interface on your Linux/MacOS local machine using the command:

```
sudo npm install expo-cli --global
```

Clone the following repository to the same machine.

```
https://github.com/csc301-winter-2021/team-project-10-ontario-parks.git
```

Change directory on terminal to the project's location and run ```npm i``` to install dependencies.

```
cd <project_location>
cd ./deliverable-2/frontend
npm i
```

### In order to see changes to the code on your mobile device, you also need to install Expo.
**ios device:**

- Download _Expo Go_ from the appstore.

**android device:**

- Download _Expo_ from the Google Play store.

### Backend Development Installing:

- Install Node.js on your local machine.
- Run `npm install` in the project folder.
- Run `npm start` in terminal. If this does not bring up a new page in your browser, or you do not see a QR code in your terminal, instead run `expo start`.
- In the new page brought up by the previous step, you should have the option of scanning the QR code in order to see live changes to your code via Expo, or you can see the application in action in your browser by clicking on "Run in web browser".

 ## Deployment and Github Workflow

Describe your Git / GitHub workflow. Essentially, we want to understand how your team members shares a codebase, avoid conflicts and deploys the application.
 * Our initial development phase up until our first working version was all completed on our "main" branch on the team-project-10-ontario-parks repository. There was no point in creating a separate development branch as we had no deployable product and no user sharing the branches with us. Thus in this closed environment we shared our code and development process on one single branch.
 * When our initial deployable version rolled around, we then diverged into two branches by creating a new branch named "dev". The plan is then to have the dev branch act as our developing environment while the main branch served as a deployment branch. We could therefore deploy a minimum viable product while we continuously pulled from this branch for development, and pushed back when new features have been completed. 
 * In terms of collaboration, it mostly took place on the main branch until dev was created. Members would pull code from the branch to work on their individual pages and screens. Prior to any pulls or pushes, however, members needed to communicate their intentions first in our group chat, which we used discord for. This was so we could avoid conflicts when cooperating. Additionally, it facilitated clarification between members in that everyone was aware what features were currently being worked on by whom. Consequently, should we encounter merge conflicts, it was clear which portions of code served what purpose, which helped determine how a merge conflict can be resolved.

 * Describe your overall deployment process from writing code to viewing a live applicatioon
 * What deployment tool(s) are you using and how

 ## Licenses 

 * We will resort to not having an open source license due to the fact that we are working with Ontario Parks, which operates under the government's supervision. While this application tries to meet the visions of the Arrowhead Assistant Superintendent, John Leadston, we are not sure which directions he intends to go with the application, so we will keep it private for now.
