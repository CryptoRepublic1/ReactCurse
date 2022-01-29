import "./itemConteiner.css";

export const ItemConteiner = function ({ greating }) {
  return (
    <>
      <div className="headerItem">
        <h1> {greating} </h1>
      </div>
      <hr />
    </>
  );
};
