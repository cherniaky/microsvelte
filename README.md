## MicroSvelte
MicroSvelte is a minimalistic JavaScript project that demonstrates a custom implementation of a Svelte-like reactive UI library. It's a great starting point for understanding how reactive UI libraries work under the hood.

### Features
- Reactive Programming: MicroSvelte uses a reactive programming model, similar to Svelte. It allows you to write reactive statements that automatically update the DOM when the state changes.

- DOM Manipulation: The project includes custom functions for creating, updating, and destroying DOM elements based on the application state.

- Event Handling: MicroSvelte supports event handling. You can attach event listeners to DOM elements and define event handlers in your scripts.

- Svelte-like Syntax: The project uses a syntax similar to Svelte, making it easy for developers familiar with Svelte to understand the code.

- Custom Compiler: MicroSvelte includes a custom compiler implemented in the index.js file. The compiler reads Svelte-like code from the app.svelte file, parses it into an Abstract Syntax Tree (AST), analyzes the AST, and generates JavaScript code that manipulates the DOM based on the AST.

- License: MicroSvelte is licensed under the MIT License, which allows you to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software.

## Getting Started
To get started with MicroSvelte, you need to have Node.js and npm installed on your machine. Once you have these prerequisites, you can clone the repository and install the dependencies:

```shell
git clone https://github.com/your-repo/microsvelte.git
cd microsvelte
npm install
node server.js
```

After installing the dependencies, you can start exploring the code. The main entry point of the application is the [server.js](server.js) file.

Please note that this project is a demonstration of a custom implementation of a Svelte-like library and is not intended for production use.

### Dependencies
MicroSvelte uses the following npm packages:

- acorn: A JavaScript parser that is used to parse the script content of Svelte-like files into an AST.
- escodegen: An ECMAScript code generator that helps to generate JavaScript code from the AST.
- estree-walker: A utility for walking (traversing) the AST.
- periscopic: A utility for static scope analysis, used to analyze the AST.
### Contributing
Contributions to MicroSvelte are welcome. Please feel free to open an issue or submit a pull request if you have any ideas for improving the project.

### License
MicroSvelte is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
