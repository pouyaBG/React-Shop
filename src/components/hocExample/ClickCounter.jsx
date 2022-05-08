import WithCounter from "../hoc/withCount";

const Clickcounter = ({ count, incrementCount, name }) => {
  console.log(name);
  return (
    <div>
      <h2 onClick={incrementCount}>clicked {count} times</h2>
    </div>
  );
};

export default WithCounter(Clickcounter, 5);
