# componentpath-react-mixin

React mixin to add data attribute to component element containing path to source file.

## Installation

```
npm install componentpath-react-mixin
```

## Usage

Require the mixin into your component and pass in the file path:
```
var ComponentPathMixin = require('componentpath-react-mixin')(__dirname);
```
Then include the mixin as normal:
```
mixins: [ComponentPathMixin]
```