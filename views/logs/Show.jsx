const React = require("react");
const DefaultLayout = require("../layout/Default")

class Show extends React.Component {
  render() {
    const {title, entry, shipIsBroken} = this.props.log
    return (
      <DefaultLayout title={`${title} Show Page`}>
        <div>
          <p>The {title} {entry}.</p>
          {shipIsBroken? "is Broken!" : "is not Broken"}
        </div> 
      </DefaultLayout>
    )
  }
}


module.exports = Show