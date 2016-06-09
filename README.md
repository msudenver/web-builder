# PSDEV HTML Starter Kit

- Introduction
- Tools we are going to use
- Installation
- Creating a new project
- CSS coding standards
- JavaScript coding standards

---
## Introduction

This document aims to develop a standardised workflow for developers creating HTML cutups for clients. This is aimed at providing a well-defined and consistent standard of coding across the whole team and should allow for more robust code with fewer bugs.

There are several tools being used to make a developers life a little easier. These include tools such as SASS, Compass and Grunt amongst others. All of these tools are detailed in this document as well as a guide on how to get up and running with your development environment.

---
## Tools we are going to use

This section details the tools involved, what they do and how to install them on your development machine. There are several steps involved, but once up and running development will become far more consistent and you will start to wonder how you ever developed without them...

### SASS and Compass

[SASS](http://sass-lang.com) is a pre-processor for CSS. It essentially allows the use of things like variables and nested rules in CSS, but that is not all it does. More info can be found at [http://sass-lang.com/](http://sass-lang.com/) where you can find documentation to get up and running with SASS. As more and more packages come with SASS versions it is fast becoming a standard language used in web development.

[Compass](http://compass-style.org/) is framework for SASS with lots of commonly used design patterns and CSS definitions. Compass is for SASS, what Bootstrap and Foundation are for HTML and CSS. More info can be found at [http://compass-style.org/](http://compass-style.org/)

### Grunt

[Grunt](http://gruntjs.com/) is a JavaScript task runner. It allows developers to automate the things they do most often in a reliable and consistent manner. There are lots of plugins already available for Grunt to do things like minify your code, check your syntax and much more. Grunt plugins are installed through NPM (Node Package Manager), which requires that you have Node.js installed. (Don’t worry, we’ll cover all the installation required shortly.)

We’ll be using the following Grunt plugins for development:

- [Bower Task](https://github.com/yatskevich/grunt-bower-task) - Allows installation of libraries using Bower
- [JSHint](https://github.com/gruntjs/grunt-contrib-jshint) – Checks JavaScript syntax
- [Uglify](https://github.com/gruntjs/grunt-contrib-uglify) – Minifies JavaScript files
- [CSSLint](https://github.com/gruntjs/grunt-contrib-csslint) - Checks CSS syntax for possible errors and pitfalls
- [SASS](https://github.com/gruntjs/grunt-contrib-sass) - Allows compiling of SASS files to CSS
- [Compass](https://github.com/gruntjs/grunt-contrib-compass) – add additional mixins to SASS
- [HTML Validation](https://www.npmjs.org/package/grunt-html-validation) - Validates HTML files against W3C
- [Text Replace](https://github.com/yoniholmes/grunt-text-replace) - Uses a JSON file to replace text site wide
- [Include Replace](https://github.com/alanshaw/grunt-include-replace) - allows includes to be used to modulise HTML files
- [Watch](https://github.com/gruntjs/grunt-contrib-watch) – Watches for changes in working files
- [Copy](https://github.com/gruntjs/grunt-contrib-copy) - Moves files around and into the correct locations
- [Express](https://github.com/blai/grunt-express) - Creates an onn the fly web server and launches it

Check out the links to each project above for more information and documentation in the case where you need to edit the tasks slightly.

### Bower

[Bower](http://bower.io) is a package manager developed by Twitter and is used to get various projects and additional files that we need in our project. For example, we are using Bower to get us the latest version of foundation and bootstrap when we start a new project.

### Foundation

You have the option to use the [Foundation](http://foundation.zurb.com) framework as the basis for HTML cutups. The reason for this is it gives us common tools that we use across all projects, such as a responsive grid system, as well as several common plugins such as carousels and form validation. However, there is nothing to stop you using different plugins that offer different functionality. Edit and uncomment to appropriate line in `_/components/terminalfour/style.scss` to include the Foundation framework.

### Bootstrap

[Bootstrap](http://getbootstrap.com) is also included in the starter project and can be used in the same way as Foundation. Edit and uncomment to appropriate line in `_/components/terminalfour/style.scss` to include the Bootstrap framework.

### Lemonade

[Lemonade](http://lemonade.im) is a very simple CSS framework that gives you a quick grid that’s responsive. If you don’t need all the bells and whistles of Bootstrap or Foundation, this is a good framework to start with.

---
## Installation

There is some setup involved before we can start coding, but once set up, starting a new project should be quick and simple.

### Node.js

Before we can start using Grunt, we need NPM, which in turn needs Node.js installed. This is as simple as going to [http://nodejs.org/](http://nodejs.org/), download the installer and install it – this will also install NPM.

### Grunt

Now that we have Node.js and NPM installed we can install Grunt. Simply follow the instructions at [http://gruntjs.com/getting-started](http://gruntjs.com/getting-started) to get the Grunt Command Line Interface (CLI) installed.

### Ruby

If you’re using a Mac, you probably already have Ruby installed. If you’re on Windows, go to [http://rubyinstaller.org](http://rubyinstaller.org) and download the correct installer for your platform. There are also videos on Lynda.com that cover the Ruby installation as part of them ([Ruby Essential Training](http://www.lynda.com/Ruby-tutorials/essential-training/47905-2.html))

### SASS and Compass

Once Ruby is installed we can install SASS. From the command prompt run the following commands. You may need to do this as an administrator user or use the `sudo` command if you’re using a UNIX based system.

```rb
gem update --system
gem install compass
```

---
## Creating a new project

All the files you require are located within this GIT project.

Clone the project and you will have a local copy.

```bash
git clone git@git.terminalfour.com:PS/html-cutups-starter-kit.git
```

### Identify and install your project

The first thing you should do once you have your local copy is identify your project. This can be done by simply editing the fields in the `package.json` file at the root of your project to include information about the project, yourself and the client. This information is output as a comment block at the start of JavaScript and CSS files as a way of identifying who wrote the file.

Once you have a local version stored and you've updated the project information, open your command prompt and cd to the root directory of your project

```bash
cd path/to/my/project/folder
```

Doing a quick `ls –la` command should display the following files and folders:

- _
- .gitignore
- bower.json
- config.rb
- .Gruntfile.js
- index.html
- package.json

Once in the correct folder and with the files in place run the following:

```bash
npm install
```

This will read the `package.json` file and attempt to download all the dependencies listed in that file. It will save them in a folder called `node_modules`.

You should now have all the modules you need installed and you’re nearly ready to start coding.

### Getting Bootstrap/Foundation/whatever…

We’re using Bower as a package manager to get the latest versions of the packages we need. The `bower.json` file in the root of your project has a default configuration that will download Foundation, Bootstrap-Sass, jQuery and Lemonade to be used as required. You don’t need to, but you can edit the `bower.json` file to only download what you need, or add additional packages if required. To get started, simply go back to your terminal window, make sure you’re still in the root directory of your project and run the following command

```bash
grunt bower --verbose
```

You can run this task without the `--verbose` command, but this allows you to see the output of what bower is doing so you can check that packages are being downloaded properly etc.

### Use Grunt to do the grunt work

We have our setup ready to go, but we haven’t automated anything yet. You might have noticed a file called `Gruntfile.js` in the project folder. This file controls how Grunt works and what it does. This file has been written for you already and should do everything we need, so it’s not recommended to edit this file unless you need a separate specific task to be run on your project.

### Choose your framework
If you open the `style.scss` file within the `_/components/terminalfour/sass/` folder you will see how the CSS is put together.

This first line imports the `normalize.scss` file which applies normalize CSS to give a consistent starting point to your CSS across all browsers.

```scss
@import "normalize";  
```

Next, you have the option to include the framework you require - just uncomment the framework references you want to use. At this stage there is nothing to stop you adding a different framework if required and adding the appropriate `@import` statement here.

```scss
//@import "../../foundation/foundation.scss";
//@import "../../bootstrap/stylesheets/bootstrap.scss";
//@import "/style-assets/lib/lemonade/lemonade.css";
```

To customise each framework's variables and settings, refer to the framework's own documentation.

There are some starter files to get you up and running with a framework's markup. These can be found in `_/components/terminalfour/html/`. You can copy one of these files into the `src` folder within `_/components/terminalfour/html/` and rename it to `index.html`. **You should maintain your html files from the `src` directory** - Grunt has a separate task to compile HTML from this directory. Once you've moved the file you want into place, we can start up grunt.

**Note - You don't have to use a framework and can instead just create a new index.html file in `_/components/terminalfour/html/src/`**

You can also create a directory structure under the `src` directory to mimic what Site Manager will publish. The structure will be replicated when the files are compiled.

To start Grunt, open your command prompt again and make sure you are looking at the project directory’s root folder (the same folder as `.Gruntfile.js`). Simply type the following command and watch grunt start up:

```bash
grunt
```

Grunt has been set up to do several things. The most important task, and the default one, is for Grunt to spin up a new web server and then start watching your files for changes. You will have noticed that the Grunt CLI says:

```bash
Running "express:all" (express) task

Running "express-server:all" (express-server) task
Web server started on port:9001, hostname: 0.0.0.0 [pid: 2388]

Running "copy:main" (copy) task

Running "watch" task
Waiting...
```

As long as you have your command prompt open, Grunt will monitor your files and 'watch' for changes in them and keep the web server running.

Now if you make any changes to your project files, grunt will detect this and start running additional tasks as it needs to. For example, in the next step, you’ll edit your `style.scss` stylesheet and save it. Grunt will detect this, start compiling it, checking all your SASS, then compile a new CSS file under `www-root/style-assets/css/style.css`

---
## Grunt tasks

So, what’s actually going on here? There are a few tasks that are being run when we use grunt. This is to try and make our code as efficient as possible and to create a standard way that we code using CSS etc.

The first thing to realise is that all your development work should be carried out in the `_` directory and below. With Grunt running, whenever you save something in this directory, the relevant tasks are run and the resultant HTML/CSS/JS files are created in the root of your project folder in a `www-root` directory. This directory is also set as the root of the web server that Grunt spins up for you.

### Express

The Express grunt task is being used to create an on-the-fly web serevr for your project. This ensures that the site you are previewing should behave the same as it would on an actual server.

### Copy
The Copy task is simply used to move files around, in this case, taking all the bootstrap/foundation etc JavaScript files and placing them under the `style-assets` directory.


### Minifying

Whenever you save a CSS or JavaScript file, your SASS files and scripts are analysed and then minified into the style-assets directory.

### Code checking

Your CSS code is run through CSSLint to check for potential errors and to enforce certain coding standards. Any errors are output to the console, but they are also stores in a text file in the report directory in your project.

Your JavaScript files are run through JSLint to ensure they are valid also.

Any HTML files are validated against W3C standards. A report of the validation result is created in the report directory of your project.

### Includes

You can modularise your HTML into separate files if you like. For example you might have a consistent header section within your pages. Instead of having this code at the top of every page, you can separete this out into a seperate file and include it in your cutup files.

All includes should be placed in the `_/components/terminalfour/html/includes/` directory and to reference them to be included use the @@ syntax. For example, let's say you had your header section saved in a file called `header.html` in your includes directory. You can reference this in other files using the following code:

```html
@@include('header.html')
```

You can also use variables inside your include files which can be passed as part of the include statement. Let's say your header file is `<head>` section of your HTML and you want to be able to change the `<title>` tag for each page, within your include file you might have the following code:

```html
<title>University name - @@pageTitle</title>
```

You can pass in a variable in your include statement like so (notice there is no need for a semi-colon at the end):

```html
@@include('header.html', {"pageTitle": "Homepage"})
```

Another usefull example of this could be to have several HTML files in your includes folder, each one representing a content type. Within these files, you could place variables for each of the elements, then call  these from another file, passing in the variables as arguments. This allows a central place where you can manage how a content type is coded up and you can build up various page layout examples by simply referencing these includes.

### Tag replacement in CSS files

If you have already imported your images into Site Manager using the Media Loader, you can use the `replacements.json` file that the media loader provides to replace all the references in your CSS files. Simply place the `replacements.json` file at the root of your project and your style.css will have its image references replaced with t4 tags. You can continue to use the style-local.css file for local development.

---
## CSS coding standards

We want to ensure that your CSS code is as clean as possible. This is why there are certain checks made each time you save your code and warnings or errors may be produced if there is something not right.

The general standards for code are listed here for reference, but there are others also. If you come across an error when your CSS is run through CSSLint then the best place to look for possible reasons will be first of all the stated line number in the console output, but you can also see the reason for the error by using the CSSLint Wiki pages at:

[https://github.com/stubbornella/csslint/wiki/Rules](https://github.com/stubbornella/csslint/wiki/Rules)

The console should say which rule is failing or giving you an error, so use that rule to see why.

In an ideal world, we would love to write perfectly valid and clean code all the time, but sometimes that is not possible, especially when we have to integrate our code with a CMS. There are some properties that will throw or warning but you know that you can ignore. These rules can be altered to suppress these warnings if required (it’s recommended you try and fix the error though, instead of just turning off the warning…)

Edits can be made to the `.csslintrc` file to suppress warnings and errors.

### Older browser support

There are some warnings which have been turned off by default to avoid getting warnings that only apply to older browsers. If you are required to support older browsers, then you should make sure that these warnings are turned back on by editing the `.csslintrc` file to enable them again. While it might seem annoying, these warnings will really help you out in the long run so be sure to enable them.

### IE6 Warnings to enable

- adjoining-classes
- box-sizing

### IE7 Warnings to enable

- box-sizing

### Disabled warnings

Some warnings have been disabled by default, as they are likely to cause warnings when they are perhaps not relevant. However, it is recommended that you take a look at these disabled warnings and see why they are warnings, as they do enforce good principles when it comes to CSS so it is no harm to be aware of them.

- adjoining-classes
- box-model
- floats
- ids
- qualified-headings
- unique-headings

---
## JavaScript coding standards

In order to make debugging as pain free as possible, we try to enforce certain standards when developing JavaScript code. In order to do this we use JSHint to check our JavaScript files each time we save something. This also acts as a check to spot simple errors that might cause issues further down the track.

We use the following options to enforce a coding style and check for certain errors. These can be seen in the .`jslintrc` file at the root of your project. If you want to add or remove options from this file, please refer to the [JSHint documentation](http://www.jshint.com/docs/options/).

### Camel case variable names

Variable names should be defined using camel case. For example any of the following are valid:

- myDate
- image
- imageWidth
- imagewidth (valid but previous example is recommended for clarity)

Variable names such as `my_date` or `image_width` would be considered invalid.

### Non breaking space check

This checks your code for invisible non breaking space characters that can cause bugs. These are notoriously difficult to find or debug so this check specifically identifies them for you.

### Curly brackets

This enforces the use of curly brackets in loops and conditionals. While it is possible to write things like if statements with no curly brackets, it can easily lead to bugs and makes code generally harder to read for other developers. For this reason, curly brakets are required.

### Equal to and not equal to comparisons

This enforces the use of `===` and `!==` in comparison statements as `==` and `!=` can lead to unexpected results.

### Quotation mark usage

In JavaScript files you can use either single or double quotation marks. This rule does not force you to use one or the other; it just checks that you are not mixing the two types in the same file so use one or the other, not both.

### Undefined variables

This rule prevents you using variables that have not yet been defined.

### Unused variables

This will alert you if any variables you have defined are not being used. It’s best to remove any variables that you don’t require.