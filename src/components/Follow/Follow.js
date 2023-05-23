import "./Follow.scss";

function Follow({ refProp }) {
  return (
    <div className="follow" ref={refProp}>
      <div className="follow__block follow__block-left"></div>
      <div className="follow__block follow__block-middle">
        <p className="follow__hashtag">#DirtyDishes</p>
        <p className="follow__text">
          A full sink is a sign of a great night. You wash, we'll dry.
        </p>
        <button className="follow__button">Follow Along</button>
      </div>
      <div className="follow__block follow__block-right"></div>
    </div>
  );
}

export default Follow;
