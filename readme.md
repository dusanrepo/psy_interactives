# Norton Widgets Generator

### Local Installation System &amp; Competency Requirements
* [rbenv](https://github.com/rbenv/rbenv)
* [ruby](https://www.ruby-lang.org/en/) v2.5.1
* [bundler](https://rubygems.org/gems/bundler/versions/1.16.1)
* [pry](https://github.com/pry/pry)
* [npm](https://www.npmjs.com/)
* [nodejs](https://nodejs.org/en/)
* [webpack](https://webpack.js.org/) v3
* [middleman](https://middlemanapp.com/) v4
* [slim-lang](http://slim-lang.com/)
* [sass](https://sass-lang.com/)

# Local Machine App Setup
Clone the Repo:
```
https://gitlab.com/wwnorton/product/psych-interactives
```
CD into the project &amp; Install Required Gems:
```
bundle install
```
Install Node packages:
```
npm install
```

# Rake Task Definitions to Assist Engineering

```
rake interactive:stub:new
```
* Creates the full file structure for a new Interactive

```
rake server:develop:livereload
```
* Cleanly rebuilds Webpack for a single selected interactive
* Executes middleman
* Cleanly loads selected interactive for local review via the local webpack server
* This can only be used for a single interactive locally


```
rake server:build:development
```
* Cleanly rebuilds Webpack for a single selected interactive
* Executes middleman
* Cleanly builds selected interactive for local review
* This should only be used for development, never deployment

```
rake server:build:production
```
* Cleanly rebuilds Webpack for all interactives
* Executes middleman
* Cleanly builds all interactives for deployment
* This should only be used for deployment

```
rake utilities:build:purge:middleman_files
```
* Remove: Temporary, Build, and Cache directories

```
rake utilities:build:purge:osx_files
```
* Remove: Temporary, Build, and Cache directories

```
rake utilities:build:purge:all
```
* Invokes the Middleman_Files and OSX_Files tasks

