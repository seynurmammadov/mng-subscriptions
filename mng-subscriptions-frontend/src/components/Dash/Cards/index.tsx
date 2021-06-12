import React from "react";
import "./style.scss";

function Cards() {
  return (
    <div className="cards">
      <div className="card mb-5">
        <div
          className="card-content"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586020435958-8298e2cb5f64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=300')",
          }}
        >
          <h1>CARD</h1>
          <p>By Nathaniel Redmon</p>
          <div className="card-cover"></div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
