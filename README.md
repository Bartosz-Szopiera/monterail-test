# monterail-test

Stack:
- vanilla HTML
- vanilla CSS
- Vue.js

I was never using any framework before, but decided to try
to learn some while working on the assignment.
At the time I was somewhat familiar with React before starting
this project since I did a short course on <i>codeacademy</i>.
However after short research I figured Vue is regarded even
simpler than React - yet with very competitive capabilities -
and seems to gain traction among developers. Angular was not
an option, as I have seen it as an overkill to learn to build
something with it in just 2 weeks. It also looked as a poor
choice for a first framework, because I suppose it would
make me lost with angular-way for everything.
I finally leaned towards Vue after reading about Facebook
BSD + patents license, not that it would concern me, and not
that it is a valid reason to bail on React, but that info just
swayed my judgment in such way.

Together with Vue I was using couple of tools:
- vue-cli for automatic setup of environment (with webpack
  and babel which I know nothing about except their general
  purpose).
- vue-resources (AJAX).
- vue-router.

I am using vanilla CSS despite I enjoy using SCSS as
I though it could be additional layer of complexity when
learning a framework.

*Assumptions*
- First level comment in single-question view is actually
  an answer (despite user action is described as "commented
  it").

*What I did*
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

\*I was finishing the project at the last moment before
the deadline, so I just gave up on polishing and really
without much thought I just tried to implement varied
range of features which I felt were helping me to learn
something about Vue.

Currently I cannot showcase effect of my work in other
way than with source code. I have trouble with preparing
working build and hosting it. As soon as I will get it
in order I will provide link to working "app".
Because I have no working build I cannot test views on mobile.

I would like to go back to this project and add some
polishing to make it look as more complete. As soon
as I will figure-out the problem with the build, I will
try to change/add the following:
- Load only limited number of question from Firebase
  and display all on the all-question view.
- Load only limited number of questions from JSON to the
  all-question view.
- Add button to load more questions.
- Add timestamp to each question for sorting.
- Add method to read certain data from question and
  display it in the `questionSummary` component
  (the single question "tile" in all-questions vie)
    - peers involved
    - total number of activities (answers + comments)
- Fix titles of questions to accommodate better to long
  chunks of text (however with some limit).
- Add 'link' to profile modal to each user avatar and name
  except from avatar in modal itself.

More probably will come to mind during work. Despite it
was simply recruitment task, I would like to make it look
like a more finished piece of work.
