import WithCounter from "../hoc/withCount";

const Hovercounter = ({ count, incrementCount }) => {
  return (
    <div>
      <h2 onMouseOver={incrementCount}>hovered {count} times</h2>
    </div>
  );
};

export default WithCounter(Hovercounter, 10);
