var React = require('react');
//var paragraphGenerator = require('./Paragrah-Generator');

require('./App.scss');

var App = function () {
    return (
        <div className="App">
            <h1>Dummy Text React</h1>
            <div id = "menu">
                <select id = "quantity" onchange = "changeEventHandler(event);">
                    <option value = "1" selected = "selected">1 paragraph</option>
                    <option value = "2">2 paragraphs</option>
                    <option value = "3">3 paragraphs</option>
                    <option value = "4">4 paragraphs</option>
                    <option value = "5">5 paragraphs</option>
                </select>
            </div>
        </div> 
    );
};

module.exports = App;
