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
 * Log-in and registration screens.
   * Upon opening the application, users have the option to login to an account they already have, register for a new account, or use the application as a guest user, e.g. no account needed.
   * Benefits of having an account includes using the application on multiple devices and keeping your settings across devices.
 * Settings and prefereces screen.
   * Here, users have the ability to change the following settings:
     * Their points of interest - cultural, agricultural, natural, historical, indigenous, etc.
     * Play full audio or audio of just short hooks.
   * Users can logout if they are currently logged in, bringing them back to the login screen.


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

### In order to see chances to the code on your mobile device, you also need to install Expo.
**ios device:**

- Download _Expo Go_ from the appstore.

**android device:**

- Download _Expo_ from the Google Play store.

### Backend Development Installing:

- Install Node.js on your local machine.
- Change directory to the backend project directory and run `npm install` in terminal
- Run `npm start` in terminal

 ## Deployment and Github Workflow

Describe your Git / GitHub workflow. Essentially, we want to understand how your team members shares a codebase, avoid conflicts and deploys the application.

 * Be concise, yet precise. For example, "we use pull-requests" is not a precise statement since it leaves too many open questions - Pull-requests from where to where? Who reviews the pull-requests? Who is responsible for merging them? etc.
 * If applicable, specify any naming conventions or standards you decide to adopt.
 * Describe your overall deployment process from writing code to viewing a live applicatioon
 * What deployment tool(s) are you using and how
 * Don't forget to **briefly explain why** you chose this workflow or particular aspects of it!

 ## Licenses 

 Keep this section as brief as possible. You may read this [Github article](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/licensing-a-repository) for a start.

 * What type of license will you apply to your codebase?
 * What affect does it have on the development and use of your codebase?
 * Why did you or your partner make this choice?
