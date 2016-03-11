jest.autoMockOff();

var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactElement = require('../example/subdir/ReactElement.jsx'),
    TestUtils = require('react-addons-test-utils');

var reactElement = TestUtils.renderIntoDocument(
  <ReactElement />
);

describe('componentpath-react-mixin', function() {
    var el,
        dir = __dirname.replace('__tests__', '');

    beforeEach(function () {
        el = TestUtils.scryRenderedDOMComponentsWithTag(
            reactElement,
            'div'
        );
    });

    it('should render a div', function () {
        expect(el.length).toBe(1);
    });

    it('should add a data-component-path attribute to the component element', function () {
        expect(ReactDOM.findDOMNode(reactElement).getAttribute('data-component-path')).toNotBe(null);
    });

    describe('the data-component-path attribute', function() {
        it('should contain the file path to the component source file', function () {
            expect(ReactDOM.findDOMNode(reactElement).getAttribute('data-component-path')).toBe(dir + 'example/subdir/ReactComponent');
        });

        it('should contain the suffixed file path to the component source file if the suffix prop is present', function () {
            reactElement = TestUtils.renderIntoDocument(
                <ReactElement componentContext="suffix" />
            );
            expect(ReactDOM.findDOMNode(reactElement).getAttribute('data-component-path')).toBe(dir + 'example/subdir/ReactComponent-suffix');
        });
    });
});