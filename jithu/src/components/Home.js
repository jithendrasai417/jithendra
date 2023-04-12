import React, { useEffect, useState } from "react";
import "../style/Home.css"

const Home = ({ handleClick }) => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState([]);
  const getusers =  () => {
    const response = fetch("https://fakestoreapi.com/products");
    setUsers(response.json());
  };

  useEffect(() => {
    getusers();
  }, []);
  return (
    <div style={{ backgroundColor: "orange" }}>
      <center>
        <h2> Search Here</h2>
      </center>
      <div>
        <form>
          <input
            type="text"
            className="input"
            style={{
              width: "500px",
              height: "40px",
              marginLeft: "400px",
              marginBottom: "30px",
              borderRadius: "20px",
              fontSize: "25px",
              fontWeight: "bold",
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        {users
          .filter((curElem) => curElem.title.toLowerCase().includes(search))
          .map((curElem) => {
            return (
              <div className="container">
              <div
                style={{
                  border: "solid 3px blue",
                  width: "250px",
                  marginLeft: "450px",
                  marginBottom: "30px",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",
                  backgroundColor: "white",
                }}
              >
                <div key={curElem.id} style={{ marginLeft: "20px" }} className="grid">
                  <div>
                    <img
                      src={curElem.image}
                      style={{
                        width: "60px",
                        height: "40px",
                        marginLeft: "80px",
                        marginTop: "20px",
                      }}
                    />
                  </div>
                  <div>
                    <h1 style={{ marginLeft: "60px" }}>Shoping</h1>
                    <span
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: "20px",
                      }}
                    >
                      {curElem.title}
                    </span>
                    <br />
                    <br />
                    <span style={{ marginLeft: "90px" }}>
                      price-{curElem.price}
                    </span>
                    <br />
                    <br />
                    <button
                      onClick={() => handleClick(curElem)}
                      style={{
                        marginLeft: "80px",
                        marginBottom: "20px",
                        backgroundColor: "blue",
                        color: "white",
                        fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Add to Cart
                    </button>
                    <br />
                  </div>
                </div>
              </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Home;
