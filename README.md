# componentpath-react-mixin

[![NPM](https://nodei.co/npm/componentpath-react-mixin.png?downloads=true&stars=true)](https://nodei.co/npm/componentpath-react-mixin/)

React mixin to add data attribute to component element containing path to source file. Very useful for QA and debugging
code at runtime, particularly UI issues.

## Installation

```shell
npm install componentpath-react-mixin
```

## Usage

Require the mixin into your component and pass in the file path using the node '__dirname' variable:
```js
var ComponentPathMixin = require('componentpath-react-mixin')(__dirname);
```
Then include the mixin as normal:
```js
mixins: [ComponentPathMixin]
```
You can also pass context into your component path to differentiate between different insatnces of the same component.
Just pass a 'componentContext' property into your component:
```js
<ReactElement componentContext="context" />
```

## Release History
0.0.1 Initial release
0.0.2 Created tests
0.0.3 Completed readme
1.0.0 Released to NPM
1.0.1 Added NPM badge to readme