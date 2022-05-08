// hoc
// 1. hoc => function
// input :  Component  .... => output : NewComponent
// why ? to share logic  (functionality) between commponent

// const Wrapper = (props) => {
//   return <div className={props.class}>{props.children}</div>;
// };

const Wrapper = (WrappedComponent, className) => {
  return (props) => {
    // console.log(props);
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Wrapper;
