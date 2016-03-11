# csstyle-react-mixin

[![Build Status](https://travis-ci.org/Swatto/csstyle-react-mixin.svg)](https://travis-ci.org/Swatto/csstyle-react-mixin)

This is a [React](http://facebook.github.io/react/) mixin to generate className with the syntax of [CSStyle](http://www.csstyle.io).

The `example` folder can show you how to use it.

## Installation

```
npm install csstyle-react-mixin
```

## Usage

```javascript
/** @jsx React.DOM */

var React = require('react');
var CSSStyleMixin = require('csstyle-react-mixin');

var ReactElement = React.createClass({
  mixins: [CSSStyleMixin],

  componentDidMount: function() {
    this.setComponentName('ReactElement');
    this.setComponentOptions(['cool', 'fresh']);
    this.setComponentTweaks(['shiny']);
  },

  render: function() {
    var className = this.getGeneratedClassName();
    return (
      <p className={className}>Foo</p>
    );
  }
});

module.exports = ReactElement;
```

## Public methods

Those methods are accessible in the created class of React.

```javascript
// Getter and setter of the name
// @param name: String
setComponentName(name)
getComponentName()

// Getter and setter of options
// @param options: Array of string
setComponentOptions(options)
getComponentOptions()

// Getter and setter of tweaks
// @param options: Array of string
setComponentTweaks(tweaks)
getComponentTweaks()

// Generate the formated string for the element
getGeneratedClassName()
```

## License

The MIT License (MIT)

Copyright (c) 2014 Gaël Gillard

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.