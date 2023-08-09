import { Component } from "react";
import Provider from "../context/Provider.js";
import { Consumer } from "react";
import InistialState from "../context/InistialState.js";
import reducers from "../context/reducers.js";
class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent - constructor");
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        {/* <Provider.Consumer>
          {({ state: userInfo }) => <h1>{userInfo.name}</h1>}
        </Provider.Consumer> */}
        <Provider.Consumer iniState="" reducers="">

        </Provider.Consumer>
      </div>
    );
  }
}
export default About;
