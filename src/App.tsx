import { useState } from "react";
import "./App.css";

function App() {
  const [posts] = useState([]);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Naa</h1>
      <h3>FlashingFuture</h3>
      <p>나아가고, 나아지는 블로그입니다.</p>
      <hr />
      {posts.map((post, index) => (
        <div
          key={index}
          style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}
        >
          {/* <h2>{post?.title}</h2>
          <p>{post?.content}</p> */}
        </div>
      ))}
    </div>
  );
}

export default App;
