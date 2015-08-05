var React = require('react');
var DefaultLayout = require('./layouts/default');

var Home = React.createClass({
  render: function() {
    return (
      <DefaultLayout>
        <div>Home</div>
      </DefaultLayout>
    );
  }
});

module.exports = Home;