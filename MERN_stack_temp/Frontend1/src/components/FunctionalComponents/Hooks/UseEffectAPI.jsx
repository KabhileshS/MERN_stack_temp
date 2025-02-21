import { useState, useEffect } from "react";
import axios from "axios";

const UseEffectAPI = () => {
  var [posts, setPost] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPost(res.data)
      })
      .catch((err) => console.log("Couldn't read the API", err));
  }, []);

  return (
    <div>
      <h1>This is UseEffect example with API call</h1>
      <h2>
        We are going to fetch data from JSONPlaceholder and display the data.
      </h2>
      <ol>
        {posts.map((post) => (                  //we need to use paranthesis for map instead of curly braces in arrow function 
          <li key={post.id}>{post.title}</li>   // if want curly braces need to return , see the commented example
        ))}
        {/* {posts.map((post)=>{
            return(
                <li key={post.id}>{post.title}</li>
            )
        })} */}
      </ol>
      <button onClick={()=>{console.log("Button Clicked!!!")}} >Hello</button>
    </div>
  );
};
export default UseEffectAPI;
