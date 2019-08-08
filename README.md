|<img src="https://github.com/identicons/jaredh123.png" width=100 alt="GitHub identicon for author jaredh123">|
|:-----:|
| [**jaredh123**](https://github.com/jaredh123 ) |

##  **Fridge Website**

#### Epicodus independent project for Weeks 3 and 4 of JavaScript, created April 5th, 2019
#### By Jared Hanson

----------

## Description
A refrigerator list making website built with TypeScript using an Angular framework and Firebase 2 database.

## Known Bugs
* No known bugs.

## Hosting URL
https://fridge-44469.firebaseapp.com

## Specifications
Current Functions:

| Behavior | Input | Output |
|----------|:-----:|:------:|
| User adds new list item | Types "item1" and clicks add button | List displays "item1" |
| User deletes a list item | Clicks delete button next to "item1" and verifies with prompt | List does not contain "item1" |


Future Functions:

| Behavior | Input | Output |
|----------|:-----:|:------:|
| User adds to item information | Clicks item and types information for it | item now has details |
| User changes item information | Clicks item and chooses to edit information for it | item now has new details |

## Setup and Use
Software Requirements:

* Clone this repository [repo](https://github.com/jaredh123/site-rebuild-angular): "$ git clone https://github.com/jaredh123/site-rebuild-angular".
* To edit the project, open the project in your preferred text editor.
* To run application, use terminal to go to the root level in the project directory.
* Run the commands "$ npm install" to install all dependencies in the package.JSON file.
* Run the command "$ ng build" to build application.
* Run the command "$ ng serve" to start application.

## Setup/Installation Requirements
* Download Angular and Node Package Manger and install them.
* In the src/app folder create a file called api-keys
* Go to "https://console.firebase.google.com".
* Click "Add project".
* Enter a project name.
* Click the checkbox once you accept the terms.
* Click "Create Project".
* "Your new project is ready" will appear in the popup when your project has been created. Click "continue".
* Select "</>" in the blue panel. Copy your configuration details to the information below. This should appear with your own configuration (your own contents replacing the X's). :
```javascript
export const masterFirebaseConfig = {
  apiKey: XXX,
  authDomain: XXX,
  databaseURL: XXX,
  storageBucket: XXX,
  messagingSenderId: XXX
};
```
* It is important that the object is exported and named "masterFirebaseConfig."
* Navigate to the root directory in Terminal.
* Type "npm i" in the command line.
* When the packages have all been installed enter commands "ng build" and "ng serve" in the command line. The project should then build and open automatically in your browser.

## Built With
* HTML
* TypeScript
* Angular
* CSS
* Firebase
* Jasmine
* Karma

## Contributors

| Author | GitHub | Email |
|--------|:------:|:-----:|
| Jared Hanson | [jaredh123](https://github.com/jaredh123) | [jared.hanson12345@gmail.com](mailto:jared.hanson12345@gmail.com) |

## Support and contact details

If you have any feedback or concerns, please contact me at [jared.hanson12345@gmail.com](mailto:jared.hanson12345@gmail.com).

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Copyright (C) 2019 Jared Hanson. All Rights Reserved. MIT License

Copyright (c) 2019 [Jared Hanson](https://github.com/jaredh123)



# Fridge Website

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
