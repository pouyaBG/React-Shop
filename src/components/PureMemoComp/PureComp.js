import React, { PureComponent } from "react";

class Purecmp extends PureComponent {
    // prevState + prevProps => 
  render() {
      console.log('Pure Comp ')
    return <div>pure comp - {this.props.name}</div>;
  }
}

export default Purecmp;
