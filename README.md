# PlaceOfAdvice

This project is hosted on https://placeofadvice.com.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1, though the currently used version is greater. 

The Angular CLI version has been upgraded multiple times via running `ng new testapp` and diffing the generated files against the files in this repo. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If you get an error about `environment.ts` file not found, it's because you have to create your own version of `environment.ts`. I hid it from git because I have private keys on there I don't want easily accessible on Github.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

If you get an error about `environment.prod.ts` file not found, it's because you have to create your own version of `environment.prod.ts`. I hid it from git because I have private keys on there I don't want easily accessible on Github.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Production

Run `firebase init` to hook up deployment to a firebase app. Change firebase's deploy path setting to 'dist' instead of the default 'public'. 

Do a production build with `ng buid -prod` to generate the deploy assets.

Deploy the assets using `firebase deploy`. 

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
