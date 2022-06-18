import React, { useState, useEffect } from "react";
import Axios from "axios";

const ProductList = () => {
  const [show, setShow] = useState([]);
  const [loader, setLoader] = useState(false);
  const getData = () => {
    let url = "http://staging.abs-crm.com/TestService/listProduct.php";

    setLoader(true);
    Axios.get(url)
      .then((response) => {
        console.log("greger", response);
        console.log("fhh", response.data.data);
        setShow(response.data.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };

  useEffect((e) => {
    getData();
  }, []);
  console.log("show", show);
  return (
    <>
      {loader ?
       (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
          {/* <h1>Loadinggg.....</h1> */}
        </div>
      ) 
      : 
      show.length > 0 ? (
        show.map((elem) => {
          return (
            <div>
              <h2>This is Product List</h2>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={elem.category_id}>
                    <td>{elem.title}</td>
                    <td>{elem.description}</td>
                    <td>{elem.price}</td>
                    <td>{elem.qty}</td>
                    <img src={elem.image_url} />
                    <td>{elem.category_title}</td>
                  </tr>
                  {/* {post.length > 0 &&
            post.map((ele) => {
              console.log(ele, "abdsdfsdf");
              return (
                <tr key={ele.id}>
                  <td>{ele.title}</td>
                  <img src={ele.image_url} height="50px" width="80px" />
                </tr>
              );
            })} */}
                </tbody>
              </table>
            </div>
          );
        })
      ) : (
        <h1>no data found</h1>
      )}
    </>
  );
};

export default ProductList;
