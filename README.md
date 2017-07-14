# Framed!

#### A Choose Your Own Adventure Role-Playing Game, 07/13/17

#### By **Andrew Dalton**

## Description

Framed is a Choose Your Own Adventure Game

## Planning

1. Configuration/dependencies
  * This should include ALL dependencies.

  * Install the following packages:

    * Node Packages
      * The following were implemented for use in our Development Environment
        * gulp - allows us to run gulp commands on our project to ease the development process.
        * browser-sync - allows us to see our changes to our project as we save them.
        * browserify - makes our project browser compatible.
        * vinyl-source-stream - puts our browserified source code into a new file.
        * gulp-concat - concatenates our JS files into one.
        * gulp-uglify - consolidates our code into a form that is more easily digestible by the browser.
        * gulp-util - allows us to manage environment variables.
        * del - deletes all the files that are passed as arguments into the command.
        * jshint - analyzes code and warns about parts that don't follow stylistic conventions, or could cause bugs in the future.
        * sass - translates our files into normal CSS .
        * sourcemaps - adds some code which allows us to see which Sass files are responsible for each CSS rule that we see in the browser.
        * bower-files - installs the necessary files on which our front-end package manager depends.

    * Bower Packages
      * The following were implemented in our Production Environment
        * jquery - simplifies HTML document traversing, event handling, animating, and Ajax interactions.
        * bootstrap - provides us with some rudimentary page styling tools.
        * moment.js - allows us to implement time and date related data.


  2. Specifications
  | Behavior | Input | Output |
  | :--------| :---- | :------|

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for ...
  * Template/html page for ...
  * Template/html page for ... (one for each route/integrated user story)
  * Display...
  * Integrate feature that...

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Refactor minor portion of...
  * Delete unused...
  * Make README awesome

## Setup/Installation Requirements

* This is a great place
* to list setup instructions
* in a simple
* easy-to-understand
* format

Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?

## Known Bugs

Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place.

## Support and contact details

Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.

## Technologies Used

Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.

### License

*This software is licensed under the MIT license.*

Copyright (c) 2016 **Andrew Dalton, Epicodus**
