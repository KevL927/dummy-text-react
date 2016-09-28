var React = require('react');

var Selector = require('./Selector');



// this represents the paragraph generator. we are using module.exports because
// this function is the only one on the page
module.exports = function(props) {
    console.log(props.numOfParagraphs);
}; 
