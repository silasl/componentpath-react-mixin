var React = require('react'),
    ComponentPathMixin = require('../.')(__dirname);

var ReactComponent = React.createClass({
  mixins: [ComponentPathMixin],

  render: function () {
    return (
        <div />
    );
  }

});

module.exports = ReactComponent;