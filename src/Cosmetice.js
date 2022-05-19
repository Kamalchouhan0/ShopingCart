import "./styles.css";

const Cosmetics = ({ data, addCart, removeCart }) => {
  return (
    <div
      style={{
        // border: "1px solid red",
        height: "250px",
        width: "100%"
      }}
    >
      <p style={{ textAlign: "start" }}>Cosmetics</p>
      <div
        style={{
          width: "100%",
          background: "black",
          marginTop: "-1%",
          border: "1px solid black"
        }}
      ></div>
      {data.map((item, index) => {
        return (
          <div className="Div">
            <p style={{ textAlign: "start", marginLeft: "5%" }}>
              Name: {item.name}
            </p>

            <p style={{ textAlign: "start", marginLeft: "5%" }}>
              Price: {item.price}
            </p>

            <button className="b1" onClick={() => addCart(item, "Cosmetics")}>
              Add to the Cart{" "}
            </button>
            <br></br>
            <button
              className="b2"
              onClick={() => removeCart(item, "Cosmetics")}
            >
              Remove from Cart{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Cosmetics;
