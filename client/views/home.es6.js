MessageBox = React.createClass({
  render() {
    return <div> Sup Bro </div>
  }
})

Meteor.startup(function() {
  React.render(React.createElement(MessageBox, {}), document.body)
})

console.log("here")