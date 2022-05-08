import React, { Component, createRef } from "react";

class ClassRef extends Component {
  state = {};
  //   createRef()
  constructor(props) {
    super(props);
    this.inputRef = createRef();
  }

  componentDidMount() {
    // console.log(this.inputRef.current);
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default ClassRef;
