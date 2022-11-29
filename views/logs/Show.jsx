const React = require("react");
const DefaultLayout = require("../layout/Default")

class Show extends React.Component {
  render() {
    const {title, entry, shipIsBroken} = this.props.log
    return (
      <DefaultLayout title={`${title} Show Page`}>
        <div>
          <p>The {title} is {entry}.</p>
          {shipIsBroken? "Ship is Broken!" : "Ship is not Broken"}
        </div> 
      </DefaultLayout>
    )
  }
}
// We can write javascript code within the curly brackets

module.exports = Show