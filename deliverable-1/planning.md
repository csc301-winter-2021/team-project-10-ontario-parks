# YOUR PRODUCT/TEAM NAME
> _Note:_ This document is meant to evolve throughout the planning phase of your project.   That is, it makes sense for you commit regularly to this file while working on the project (especially edits/additions/deletions to the _Highlights_ section). Most importantly, it is a reflection of all the planning you work you've done in the first iteration. 
 > **This document will serve as a master plan between your team, your partner and your TA.**

## Product Details
 
#### Q1: What are you planning to build?

We are going to build a mobile application that can educate, entertain and interpret using geo-referencing as the trigger for the "Geo-audio" automatic playback.
The purpose of this project is to provide useful information to anyone with an interest in natural or cultural history who enjoys discovering new things that are not readily or easily identifiable in Ontario. Imagine you are traveling in a new city in Ontario, you find a park and want to know the most popular trail but there is no way to get that information. Our app can provide you those rarely seen information.
Also, we won't give the information randomly. This app will include specific categories or subcategories, such as "health" or "history", and providing information based on users' interest. For example, if the user is a history fanatic, then the app will provide audio and text-based information about the surrounding historical sites. In addition, this project will pick up the real time-location from the user, and prevent the user with audio and text-based information about the user’s surroundings. Imagine you are traveling in a new city in Ontario, when you are getting close to a park, this app can tell you the basic information of the park such as location and history.



#### Q2: Who are your target users?

Target users of the app are made up of two groups.
The first group of users could be foreign tourists, anyone who has an interest in exploring the culture and nature scenery in Ontario. A typical persona for that would be Chen, a 30 year-old chinese tourist who traveled  to Ontario with his two friends, has rented a car to explore the nearby park. 
The second group of targeted users would be those who try to seek inner peace from nature. They could be patient or anyone who simply wants to escape from their busy schedule. A persona for that would be Linda, a 45 year-old single mother who lives in Ontario, Linda  has to work in a stressful environment and suffers from stress and a mild depression. She could use the health function of the app while taking a walk in the park.  

#### Q3: Why would your users choose your product? What are they using today to solve their problem/need?

Since there are two main purposes and two different groups of target users, the question would be answered in two parts. 
The first part focuses on the culture discovery functions designed for those who have an interest to explore the culture and nature of the area. The cultural history category of the app is capable of providing text and audio information as users travel. Users can also choose to interact with each other by adding new points of interest so that other users can check them out. In this way, the app is capable of attracting more and more people to learn about the area hand free on their way, which matches the partner organization’s interest. 
The second part focuses on mental health therapy functions of the app, this part was designed for those who seek to have their mind cleared in nature. It was proven that walking in woods or forest therapy can be extremely useful when it comes to treating depression, PTSD and drug addiction. The app can help and guide individuals with therapeutic needs to plan their walking route. This category helps to connect more people to the area, and also helps maximizing the value of the forest, which matches the interest of our partner organization. 


#### Q4: How will you build it?

We will be using Android studio to develops an Android app and iOS app for the frontend of this project, the language is java (Android studio plug-in will allow developers to run, test, and debug code on iOS devices and simulator). The app should be able to provide the service base on the user locations and preference. using java.net for communicating with backend server to get the data from the database, or sending the user information and preference to the server. when the app needs to check the location of the user, we will use android.location.LocationListerner or com.google.android.gms.location.LocationListerner. The user should be able to use only the voice to control the app, and for the voice recognition feature of this app, we will use android.speech.
For the backend, we will use VSCode and the language will be javascrip. We will use mongoose db to store the datas and user information. And for sending the data to the frontend, we will use node.js, express.js.

For the testing of this app, we will have three parts:
* UI test: This will be a frontend only test (without connecting to the backend). We will have some fake data for this test and check the app could work perfectly. Including displaying the information correctly, ability to recognize the human voice.
* Network test: This test is to check the frontend (user mobile) and backend (server and database) are able to communicate as we expected. 
* Backend test: Without connecting to the frontend, base on the user preference, check server is able to get the correct data from the database that user needed. Also check the ability to add, update the database correctly.


#### Q5: What are the user stories that make up the MVP?

* As a new Taxi driver in a coastal city,
I want to get the position of surrounding tourist attractions anytime and anywhere, 
so that I could pick up more tourists.
  * Acceptance Criteria: Given our Ontario Park app, when user input preference and location, the app will lead the user to the nearest tourists attraction that most likely to satisfy the user's preference. 

A map for saturday: https://www.imdb.com/title/tt1024964/

* As a person with bad sight,
I want to be able to use the app in order to discover what I am not able to see before.
  * Given our Ontario Park app, The user interface is friendly to people with bad eyesight. Possible solution could be voice output or special designed button layout.

* As a resident around the park,
I want to be notified when there are some interesting activities happening near my house.
Because I want to have a sense of discovery in places I have walked hundreds of times.
  * Acceptance Criteria:
Given our Ontario Park app,
When user feel bored and want to have some fun,
It can notify the user when they pass some location that might interest the user, or when some changes happen abound the user.

* As a busy tourist travel alone,
I want to see places I am interested only 
when I ask this app to give me directions, 
because I do not have much time to spend in the park.
  * Acceptance Criteria:
Being able to display only the locations that may interest this user.

* As a tourist travel with my family,
I want to have a visit plan that is designed for my family member,
When me and my family arrived at the vacation destination.
Because I don’t want to worry about which place is suitable for my child, which tourist attraction may interest my parents, and where to eat and rest. I want this app to deal with all those stuff for me automatically, and give me a perfect vacation plan when I arrive at the vacation destination place.
  * Acceptance Criteria:
Given a user profile, time, budget and location,
When the user ask for a travel plan,
The app will analyze the user profile, and combine the result with a real time map, to design a real time travel plan(means the plan may change anytime due to traffic or the influence factors).

----
## Intellectual Property Confidentiality Agreement 
> Note this section is **not marked** but must be completed briefly if you have a partner. If you have any questions, please contact David and Adam.
>  
**By default, you own any work that you do as part of your coursework.** However, some partners may want you to keep the project confidential after the course is complete. As part of your first deliverable, you should discuss and agree upon an option with your partner. Examples include:
1. You can share the software and the code freely with anyone with or without a license, regardless of domain, for any use.
2. You can upload the code to GitHub or other similar publicly available domains.
3. You will only share the code under an open-source license with the partner but agree to not distribute it in any way to any other entity or individual. 
4. You will share the code under an open-source license and distribute it as you wish but only the partner can access the system deployed during the course.

**Briefly describe which option you have agreed to. Your partner cannot ask you to sign any legally binding agreements or documents pertaining to non-disclosure, confidentiality, IP ownership, etc.**

----

## Process Details

#### Q6: What are the roles & responsibilities on the team?

 
##### Edward (Pao Hua Lin):

Role: Create backend server to communicate with frontend, communicate with database.

3 Strengths: 
* Strong understanding in java and javascript 
* Have expereience with frontend app development and backend server.
* Have expereience working with database.

3 Weaknesses: 
* No experience with CI/CD
* Not good at frontend UI design.
* Not very well at English communication and presentation

##### Gerald:

Role: Frontend, create voice recognition feature for the app.

3 Strengths: 
* High familiarity with Android Studio and Java, developed a few simple apps in this context
* Python - pygame, matplotlib, unit testing
* Behavior Driven Development

3 Weaknesses: 
* Database implementations
* CI/CD
* Frontend/backend integration

##### Yingsi Chu:

Role: Frontend, map and tracking the location of the user.

3 Strengths: 
* familiar with android and java with 207 experience
* know a bit of CSS, python, javascript
* Open to any new language and is open to self learn anything

3 Weaknesses: 
* Not enough group work experience
* Tends to do stuff in the last minute
* Lack communication skill 

##### Wenxin:

Role: Backend, create a user authentication system.

3 Strengths: 
* Familiar with Java, Html Css and Vanilla Js, Python.
* Know a bit of Android studio, React.
* Learn new things very quick.

3 Weaknesses: 
* Not good at doing English reports.
* Always start an assignment one day before the deadline.
* Has few project experience. 

##### Xiaoyu Zhou:

Role: Frontend, UI design, making sure the app can work perfectly on both Android and Apple.

3 Strengths: 
* Familiar with Java and Android studio, with the experience of csc207.
* Familiar with database.
* Have many experiences on different softwares.

3 Weaknesses: 
* Always start the assignment late.
* Poor at communication.
* Have no experience on CI&CD.

##### Jianhua Hu:

Role: Backend, make a function to pick the right data from the database based on the user preference.

3 Strengths: 
* Familiar with Javascript, nodejs and has experiences on building server using mongodb and mongoose.
* Know a bit of React, html, css, ajax.
* Learn new things quick.

3 Weaknesses: 
* No experience on using Android studio.
* Not familiar with CI/CD.
* Poor at communication.


Based on these team strengths and weaknesses, we will be evenly spreading the team into 3 working on frontend and 3 working on the backend. Though we speculate that the project will be mostly frontend oriented so there may be a need to later redistribute one member from backend to frontend to adjust for this need accordingly. Tasks will be further assigned later to have different members work on different fragments.

#### Q7: What operational events will you have as a team?

We are planning to have a weekly group meeting on Zoom at 11 a.m. every Saturday. The purpose of the meeting is to go over what we did last week and whether we completed our goals, solve problems that we met and discuss what we are going to do for next week.  The duration of the meeting will be one hour or more.
We also plan to have a bi-weekly meeting at 10 a.m. Tuesday to meet with John Leadson, the initiator of the application. During the meeting, we are going to report what we have done in the past week and what we are going to do in the next week. Besides, we will ask Leadson for some advice and confirm his requirements in detail. The duration will be around 30 minutes.
Moreover, we will have code reviews at least once a week. And the code reviews may be separated into small groups and the time will depend on members.
Meetings we had so far:
* We met with Leadson. He told us the style and the function of the application he wanted. Also, he introduced what the previous team did and what we could use to work with. Then, Leadson left and our group kept to discuss the aim of the application and functions we need to implement. Also, we introduced ourselves, including our strengths. Finally, we chose the time for the weekly group meeting and the next meeting. This meeting costs 96 minutes.
* First of all, we set up our Git repository and made a decision on the communication app, which is Discord. Then, we assigned tasks for Deliverable 1 and each member's role for the project. Finally, we discussed and solved problems we met these days. The duration of this meeting is 103 minutes. 
  
#### Q8: What artifacts will you use to self-organize?
* We will mainly rely on discord - we will create a server on discord as it allows voice calling and multiple text channels to keep track of tasks, conversations, document links, as well as documentation of our progress.
* Roles are assigned to team members based on what they’re most experienced and comfortable with. So in our case, we will be assigning 3 members on the front end, and 3 to the back end as a result of everyone’s ability and experience.
* Discord allows us to assign roles to members, as well as organize our conversation in different channels, this will allow us to keep all our tasks and progress well documented.
* We will hold weekly meetings on weekends to go over our tasks and progress in order to keep everyone else on the team well informed.

#### Q9: What are the rules regarding how your team works?

Describe your team's working culture.
##### Communications:
* As in question 8, we have scheduled calls every weekend at Saturday at 11 AM, and bi-weekly calls with our partner on Tuesdays. 
* These calls serve the purpose of keeping everyone on track and informed of the process.

##### Meetings:
* How are people held accountable for attending meetings, completing action items? Is there a moderator or process?

* Conflict resolution:

  * Non-responsive team members can only be motivated via a higher level of authority in my opinion, so in our case it would require a TA or instructor to engage with them in order to make clear the consequences of not being cooperative in a group project course such as this.
  * Time conflicts have already been resolved by early communications to workout what time works for everyone and we also set a scheduled time for voice communication which also works for everyone.
  * Team members not agreeing on the same idea or task need to be resolved by having more members share their opinions and thoughts, having an evaluation from everyone to decide on what is the most beneficial or convenient for everyone will facilitate in resolving conflicting ideas.

----
## Highlights

During the meeting with John (partner), he said we can either continue working on the last team's project code or creating a new project. After reviewing the last team's project, we found that there are many problems on the integration between the frontend and backend. Since we need to add many new features, such as user login and change setting performance,  we decided to rewrite a new backend server. However, we may still use some of their frontend design, since they were making good frontend design before.

In this project, we decided to separate the team members into two parts, part of the members will be working on the frontend, and others will be working on the backend. Based on our knowledge in different programming fields, working in this way will be most efficient for our team.

