# ProductsList

Goal of the project is to create a list of products using the latest versions of Angular and NgRx
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.
**Used technologies**: Angular, NgRx, RxJS, TypeScript, HTML, Bootstrap

<img width="800" alt="Снимок экрана 2023-01-04 в 17 20 57" src="https://user-images.githubusercontent.com/91071613/210601862-e352d4be-4753-4b51-8817-ccbac45b4763.png">

### Functionality

- List of product's cards display the image, name, quantity and the price of each product
- Name  displayed in title-case, total price and price of product - in currency-case
- Evere card has buttons:
   - Information about product;
   - Edit Product;
   - Delete Product;
- Quantity can be changed by clicking on the +/- buttons in Edit Mode, only valid values will accepted
- If quantity is changed to 0 in Edit Mode and confirmed - the product will remove from the list
- Price calculated based on the quantity of that product
- Each product can be deleted by clicking on the delete icon button in list page and also in Information page
- Total price of all products over the listing 
- By click on 'Add New Product' button displays a form that you need to fill with data to create new product
- in case all the products are deleted, appears a 'No Products' template

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `npm run build` or `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm run test` or `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
