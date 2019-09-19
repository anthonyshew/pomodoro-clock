# Welcome to Shew's Pomodoro Clock
#### The Pomodoro Method allows you to work and rest in intervals. It has been shown to lead to higher individual production. This clock will keep you hitting your goals for your intervals!

If you are a frequenter of Github, feel free to browse this repository to learn more about my skills.

If you aren't a fellow programming junkie, you can visit this project at [www.anthonyshew.github.io/pomodoro-clock/](https://www.anthonyshew.github.io/pomodoro-clock/) and get to work!

## About This Project

This project is built using React for a front-end framework, CSS for styling, and Redux as a state manager. The project is hosted using Github Pages right here on Github.

## Lessons Learned
- **Working with Timing**  - The nature of a Pomodoro Clock is timing, timing, timing. This was something I had never worked with before and it was interesting to see how I could build timers, use setTimeout()'s, and let those timing intervals affect other parts of the app. I found interesting behaviors would occur at the beginnings and ends of my timers that I would have to cover for with my coding. While I haven't gotten to use timing like this as extensively since this project, I know this experience will help me in the future at some point.

- **Naming Conventions** - This was the first project where I ever felt the need for properly naming variables. I knew that the practice was important and had been naively following that wisdom because I had heard it was the right thing to do. But, on this project, I found out exactly why. I started getting lazy with my naming conventions and started ending up with odd errors and unexpected behaviors - all because I started mixing up which variables were meaning what. Since this project, I have been keen to robustly name my variables so that I can always keep track of what I was doing.

- **Sound** - I came to the point in this project that I asked myself "Okay, how do I notify my user that an interval has ended?" and realized I would need more than something visual. My user is supposed to be working, not sitting here watching a clock turn, right? This was my first opportunity to incorporate sound into a project. After finding out about the Web Audio API, I used the Audio() object to implement a simple sound alert and did some extra exploring around the API just to learn more.

## Challenges & Improvements Ahead
- **Some Refactoring** - There are some pretty good opportunities in this app for refactoring. At first glance, there is a lot of repeated code and other poor practices lying around in the codebase. Now that I have learned better practices, there are clear places where I used something that worked but wasn't the best way to do it that I can go back and improve.

- **Better Visual Alerting** - The way that this app visually alerts a user that they are in their "work" or "rest" phase could stand out better. The line that tells my user this information doesn't stand out very well compared to the rest of the page but it is extremely important information. My inital impression as that the line of text itself could be placed on the bottom of the page or even in the progress bar portion to give it better visual cohesion with it's timing counterpart.

- **Animate the Arrows** - As it currently stands, my arrows just appear and disappear on the page when they are supposed to. However, I think the transition could be made less abrupt even with a simple fading out animation. While this is something small and simple, these are the sorts of things that can make an application really pop.
