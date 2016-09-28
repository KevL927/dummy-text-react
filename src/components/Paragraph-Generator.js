var React = require('react');

//this represents the paragraph generator. we are using module.exports because
//this function is the only one on the page
module.exports = React.createClass({
    getInitialState: function (){
        return {
            //assigning current text to empty value so it can be updated
            //later
            currentText: "",
            paragraphCount: 0
    }
    return (
         <div id = "output"></div>
    );
}
