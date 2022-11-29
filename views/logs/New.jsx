const React = require("react")
const DefaultLayout = require("../layout/Default")

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="New Log Page">
        <nav>
          <a href="/logs">Home Page</a>
        </nav>
        <form action="/logs" method="POST">
          Title: <input type="text" name="title" /><br />
          Entry: <input type="text" name="entry" /><br />
          Ship is Broken: <input type="checkbox" name="shipIsBroken"/><br />
          <input type="submit" value="Create Log" />
        </form>
      </DefaultLayout>
    )
  }
}

module.exports = New