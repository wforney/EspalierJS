# Developing for EspalierJS

We would love to have you help make EspalierJS the best JavaScript library it can be. Please review the backlog and see if there are 
any plans to address whatever it is you would like to work on. If there is an existing work item, assign it to yourself and begin work.
If there is not an existing work item for what you would like to work on, create one and assign it to yourself so we know what is
being developed.

## How To Submit Your Changes

Changes may be submitted via a pull request. Clone EspalierJS, create a branch for the feature or bug being worked on, and 
make changes specific to that work item in the branch. To clone EspalierJS and create a branch for the item being worked on:

```bash
git clone git@github.com:yourUserName/EspalierJS.git                    # Clone your fork
cd EspalierJS                                                           # Change directory
git remote add upstream https://github.com/jeremeevans/EspalierJS.git   # Assign original repository to a remote named 'upstream'
git fetch upstream                                                      # Pull in changes not present in your local repository
git checkout -b my-new-feature                                          # Create your feature branch
git commit -am 'Add some feature'                                       # Commit your changes
git push origin my-new-feature                                          # Push to the branch
```

## Requirements for Submitting a Pull Request

* Please submit pull requests via features branches.
* Every pull request should have a single associated work item, be it a feature request or a bug.
* It is expected that unit tests will be written that cover new code and that all existing unit tests pass.
* JavaScript should conform to [the Airbnb JavaScript Style Guid](https://github.com/airbnb/javascript).

### Browser Compatibility

* IE8+
* Chrome (latest version)
* Firefox (latest version)
* Safari (latest version)

## Install Dependencies and Build

EspalierJS uses NPM to manage dependencies. If you do not already have Node.js installed, [install Node.js](https://nodejs.org/). Once you 
have Node.js installed:

* Open the Node.js command prompt.
* Navigate to the directory you cloned EspalierJS into.
* Run the following npm commands to install dependencies, install gulp globally so you can build, and, finally, build EspalierJS:
  * npm install
  * npm install -g gulp
  * gulp

## Code Editor

EspalierJS has been primarily developed using [Visual Studio Code](https://code.visualstudio.com/). It's free, works pretty well, and supports 
ES6 JavaScript. That's just a suggestion; feel free to use whichever code editor you like.