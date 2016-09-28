var React = require('react');
//Selector retrieves option value from App.js and sends to paragraph generator
var App = require('./App');
var ParagraphGenerator = require('./ParagraphGenerator');

module.exports = function(props) {
    var numOfParagraphs = props.numOfParagraphs;
    console.log(numOfParagraphs);
    
    return (
        <ParagraphGenerator numOfParagraphs={numOfParagraphs} />
    );
};

        