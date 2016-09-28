var React = require('react');
 
var Selector = require('./Selector');
require('./App.scss');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            //assigning current text to empty value so it can be updated
            //later
            currentText: "",
            paragraphCount: 0
        }
    },
    
    onSelection: function(event) {
        {/*onSelection function updates the state of paragraphCount to the selected value from the drop-down menu*/}
        this.setState({
            paragraphCount: event.target.value
        })
    },
   
    render: function() {
        return (
            <div className="App">
                <header>
                    <h4>Dummy Text React</h4>
                </header>
                <section>
                    <p>Please select the number of paragraphs you'd like to generate from the dropdown menu</p>
                </section>
                <div id="menu">
                {/*Value inside the select views the current state of the paragraphCount.
                When an option is selected from the drop-down menu, it will trigger the onSelection function*/}
                    <select value={this.state.paragraphCount}
                            onChange={this.onSelection}
                    >
                        <option>Select Paragraph</option>
                        <option value="1">1 paragraph</option>
                        <option value="2">2 paragraphs</option>
                        <option value="3">3 paragraphs</option>
                        <option value="4">4 paragraphs</option>
                        <option value="5">5 paragraphs</option>
                    </select>
                </div>
                <div className="paragraph-view">
                    <Selector numOfParagraphs={this.state.paragraphCount} />
                </div>
            </div>
        );
    }
    
});

