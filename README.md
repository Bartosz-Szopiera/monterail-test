# [monterail-test](http://testserver.pl/monterail-test/)

## Description ###

This limited excerpt of an social-media app was created
as a recruitment task for [Monterail](https://www.monterail.com/) company
according to the design they provided me with.
It features 3 views and has very minor functionalities.

## To launch app locally: ##

1. `git clone https://github.com/bart5/monterail-test.git`  
2. `npm install`  
To use webpack dev server (8080 by default):  
2.a `npm run dev`  
To get apache-friendly build:  
2.b `npm run build`  

## Stack: ##
- vanilla HTML
- vanilla CSS
- Vue.js

#### Why Vue? ####
I was never using any framework before, but decided to try
to learn some while working on the assignment.
At the time I was starting this project I was somewhat familiar
with React thanks to short course on a <i>codeacademy</i>.
However after some research I figured Vue is regarded even
simpler than React - yet with very competitive capabilities -
and seems to be gaining traction among developers. Angular was
not an option, as I have seen it as an overkill to learn to build
something with it in just 2 weeks. It looked as a poor choice
for a first framework, since I suspect it would get me lost
with it's own angular-way for everything.
Being torn between React and Vue I finally leaned towards the latter
after reading about Facebook BSD + patents license; not that it
would concern me, and not that it is a valid reason to bail on React
for any developer, but that info just swayed my judgment in
a subjective way.

#### Other ####
Together with Vue I was using couple of tools:
- vue-cli for automatic setup of environment (with webpack
  and babel which I know nothing about except their general
  purpose).
- vue-resources (AJAX).
- vue-router.

I am using vanilla CSS despite I enjoy using SCSS as
I though it could be additional layer of complexity when
learning a framework.

## Roughly what I did ##

- All layouts are ready and all are responsive (however
  I had not tested on mobile devices). Admittedly couple
  of views poorly utilize screen real-estate in mobile views,
  because I treated too literally some of provided designs.
- Modal is displayed but it is fully static, it is not
  synced with user data.
- Everything is component-based - the way I split app into
  components is for sure debatable, as not knowing much about
  how Vue works, made me assume that I will be able to
  efficiently (if at all) send data between them.
- I have prepared JSON file with made-up data and hosted it on
  Firebase. From there the data is requested at each load
  of `allQuestionsPage` and `singleQuestionPage` components
  and appropriate content is created. The file
  is available in repo by the name of `questions.json`.
  <i> Data in the JSON is just simple data package that
  I want to query to make use of AJAX, it is not something I
  regard as a desired way of designing backend.</i>
- I implemented voting so that whoever (there is no login
  so there is no really a user) clicks on voting buttons
  the score is adjusted and updated value is send to the Firebase.
- There is a simple search function to look for question
  within downloaded data with title containing looked-for
  phrase.
- I haven't implemented any kind of sorting nor any logic
  for loading the questions. Everything is just downloaded
  and saved in an array.
- There are no user avatars.*
- Routing works so that you can select any question and go
  to the `singleQuestionPage` and come back.

*I was finishing the project at the last moment before
the deadline, so I just gave up on polishing and really
without much thought I just tried to implement varied
range of features which I felt were helping me to learn
something about Vue.*

## After-thought ##

Having finished the first, rough, unpolished version
I have couple of remarks about my execution:
* Coding layout having finished design at disposal is very neat.
* Adjusting fonts to design fonts while not having the source
  and not knowing where what actual font size and style
  was used is a pain (I knew the type of font used
  but could not google it, probably should just ask for it..).
* Not using Sass was a mistake. There was way more
  CSS than I expected and not being able to store
  values in variables, extend classes and nest from time to time
  was a bad experience.
* `questionSummary` and `allQuestionsHeader` are in part
  coded in a not very elegant way, rather hacky.
* It seams inefficient that I perform XHR each time the two
  of main views are being rendered.

## What next? ##

~~Currently I cannot showcase effect of my work in other
way than with source code. I have trouble with successfully
rendering my build on firebase or my own website, despite
the build working well on my local apache server.
As soon as I will get it in order I will provide link to
working "app". It will also allow me to test RWD on a mobile.~~

I would like to make it look like more finished piece of work
so in the coming days I will try to introduce following
changes:
- [ ] Load only limited number of question from Firebase
  and display all on the all-question view.
- [ ] Load only limited number of questions from JSON to the
  all-question view.
- [ ] Add button to load more questions.
- [ ] Add timestamp to each question for sorting.
- [ ] Add method to read certain data from question and
  display it in the `questionSummary` component
  (the single question "tile" in all-questions vie)
    - peers involved
    - total number of activities (answers + comments)
- [ ] Fix titles of questions to accommodate better to long
  chunks of text (however with some limit).
- [ ] Add 'link' to profile modal to each user avatar and name
  except from avatar in modal itself.
- [ ] Anchor page's header (fixed position).
- [ ] Disable viewport scroll while profile modal is visible.
