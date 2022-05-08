import React, { Component, PureComponent } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentCom extends Component {
  state = {
    name: "saheb",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "saheb" });
    }, 1000);
  }

  render() {
    console.log("Prent Comp --------------------------------------");
    return (
      <div>
        parent compoentn
        <RegComp name={this.state.name} />
        {/* <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentCom;
