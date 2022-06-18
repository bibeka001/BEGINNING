import React, { useState, useEffect } from "react";
import Axios from "axios";
const ComponentA = () => {
  const [post, setPost] = useState([]);
  const [list, setList] = useState([]);
  const init = () => {
    let url = "http://staging.abs-crm.com/TestService/categoryList.php";
    Axios.get(url)
      .then((response) => {
        console.log("api-response", response.data.data);
        setPost(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log("abcd", post);
  // const featchData = () => {
  //   fetch("http://staging.abs-crm.com/TestService/categoryList.php")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => setPost(data.data));
  // };

  useEffect((e) => {
    // featchData();
    init();
  }, []);
  return (
    <div>
      <h1>Hello This is Component A</h1>
      <br />
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Image</th>
          </tr>
        </thead>
        {/* <pre>{JSON.stringify(list)}</pre> */}
        <tbody>
          {post.length > 0 &&
            post.map((ele) => {
              console.log(ele, "abdsdfsdf");
              return (
                <tr key={ele.id}>
                  <td>{ele.title}</td>
                  <img src={ele.image_url} height="50px" width="80px" />
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ComponentA;
