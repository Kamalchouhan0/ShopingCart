import "./styles.css";
import { data } from "./data";
import { useEffect, useState } from "react";
import Cosmetics from "./Cosmetice";
import Household from "./Household";
export default function App() {
  const [apiData, setApiData] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setApiData(data.data);
  }, []);

  const addCart = (item, category) => {
    if (category == "Cosmetics") {
      let cartData = [...cart];
      cartData.push(item);
      setCart(cartData);
    } else if (category == "Household") {
      let cartData = [...cart];
      cartData.push(item);
      setCart(cartData);
    }
    console.log("ADDED ITEM:-", item);
  };

  const removeCart = (item, category) => {
    let cartData = [...cart];
    const indexOfObject = cartData.findIndex((object) => {
      console.log(object.id, item.id);
      if (object.id === item.id) {
        return object.id === item.id;
      } else return null;
    });
    if (indexOfObject !== -1) {
      cartData.splice(indexOfObject, 1);
      setCart(cartData);
    } else {
      setCart(cartData);
    }
    console.log("REMOVED ITEM:-", item);
  };

  console.log(JSON.stringify(cart));
  return (
    <div className="App">
      {apiData.map((item, index) => {
        if (item.name == "Cosmetics") {
          return (
            <Cosmetics
              data={item.productList}
              addCart={addCart}
              removeCart={removeCart}
            />
          );
        } else {
          return (
            <Household
              data={item.productList}
              addCart={addCart}
              removeCart={removeCart}
            />
          );
        }
      })}
    </div>
  );
}
