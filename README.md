# Angular Boilerplate

Boilerplate of how to implement clean architecture, atomic Design and Domanin-Driven Design with Angular

## Table of Contents

- Requirements
- Installation
- Usage
- Build
- Running unit tests
- Running e2e tests
- Folder Structure
- Environment Variables
- Architecture

## Requirements

Node.js (v20.13.0 or higher)
npm (v10.7.0 or higher)

## Installation

Clone the repository to your local machine and then install the dependencies.

```bash
git clone ''
cd repository-name
npm install
```

## Usage

To start the application in development mode, run the following command:

```bash
npm start or ng serve
```

Open http://localhost:4200 to view it in the browser.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Folder Structure

The project is structured according to Clean Architecture principles and uses Atomic Design methodology for UI components:

```bash
/project
├── /e2e
├── /node_modules
├── /src
│   ├── /app
│   │   ├── /core                  # Contains application-wide singleton services (e.g., HttpClient)
│   │   ├── /shared                # Contains shared methods accross the app
│   │   ├── /domain                # Contains business logic, entities and use-cases
│   │   ├── /infra                 # Contains all the code that communicates with the outside world (e.g., API calls)
│   │   ├── /presentation          # Contains all the code related to UI and state management of UI
│   │   ├── /main                  # Initializes the application and connects the other layers
│   │   ├── /design                # Contains all UI components, structured according to Atomic Design
│   │   ├── /store                 # Contains all state methods (e.g., Reducers, Actions, State, etc.)
│   ├── /assets
│   ├── /environments
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   └── test.ts
├── .editorconfig
├── .gitignore
├── angular.json
├── browserslist
├── karma.conf.js
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
```

`/core`:
This layer is meant to be a provider of tools and functionality for the other layers. It contains application-wide singleton services like HttpClient, Storage, etc.

`/domain`:
This is where all the business rules for the application are implemented. It contains entities, use-cases and repositories interfaces.

`/infrastructure`: Here lives all the code that communicates with the outside world (API calls, database access, etc.). This layer implements the interfaces defined in the domain layer.

`/presentation`: This layer contains all the code related to the user interface and state management of the user interface. This includes Angular components, routing, or services with BehaviorSubjects.

`/main`: The purpose of the main layer is to initialize the application. It is the entry point of our app, and it's responsible for connecting the other layers in a meaningful way.

`/design`: The design folder is where all the UI components live, which are structured according to Atomic Design methodology. You will find atoms, molecules, organisms, templates, and pages here.

`/store`: The store folder where is located everything associated to state management using tools like NgRx

`/shared`: The shared folder where is located everything that can be reused accross the app


## Environment Variables

The following environment variables are required for the application to run correctly:

- `API_URL`: The base URL for your API.
- `API_KEY`: Your API key, if applicable.
- `OTHER_ENV_VAR`: Other environment variables your app might need.

You can set these variables in the /environments/environment.dev.ts file for development, and /environments/environment.prod.ts for production. Make sure to never commit sensitive data like API keys into your version control system.

