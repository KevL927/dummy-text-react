var React = require('react');

//this represents the paragraph generator. we are using module.exports because
//this function is the only one on the page
module.exports = React.createClass({

    render: function() {
        return (
         <div id="output">
            <Output />
         </div>
        );
    }
});

for(var i = 0; i < quantity; i++) {
    var paragraph = '<p>'
    while (paragraph.length <= maxLength()) {
      var index = Math.floor(Math.random() * pootieTalk.length);
      paragraph += (' ' + pootieTalk[index]);
    };

    paragraph += '</p>';
    output += paragraph;
  }

  $('#output').html(output);
}
