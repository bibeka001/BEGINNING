import React, { useState, useEffect } from "react";
import Axios from "axios";
const CreateProduct = () => {
  const [showData, setShowData] = useState([]);
  const getProductData = () => {
    let url = "http://staging.abs-crm.com/TestService/createProduct.php";
    Axios.get(url)
      .then((res) => {
        console.log("product response", res);
        console.log("create product", res.data.data);
        setShowData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect((e) => {
    getProductData();
  }, []);
  return (
    <div>
      <h2>This is Creation of Product</h2>
      {showData.length >= 0
        ? showData.map((elem) => {
            return (
              <table> 
                <tbody>
                  <tr key={elem.category_id}>
                    <td></td>
                    <td>{elem.title}</td>
                    <td>{elem.qty}</td>
                    <td>{elem.price}</td>
                    <td>{elem.description}</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Price</th>
                      <th>Description</th>
                  </tr>
                </thead>
              </table>
            );
          })
        : null}
    </div>
  );
};

export default CreateProduct;
