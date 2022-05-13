import React, { useState } from "react";
import "./Popchat.css";

function Popchat(props) {
  let hide = {
    display: "none",
  };
  let show = {
    display: "block",
  };

  const { messages } = props;

  const [chatopen, setChatopen] = useState(false);
  const toggle = (e) => {
    setChatopen(!chatopen);
  };

  return (
    <div id="chatCon">
      <div className="chat-box" style={chatopen ? show : hide}>
        <div className="header">Chat with me</div>
        <div className="msg-area">
          {/* {messages.map((msg, i) =>
            i % 2 ? (
              <p className="right">
                <span>{msg}</span>
              </p>
            ) : (
              <p className="left">
                <span>{msg}</span>
              </p>
            )
          )} */}
        </div>
        <div className="footer">
          <input type="text" />
          <button>
            <i className="fa fa-paper-plane">SEND</i>
          </button>
        </div>
      </div>
      <div className="pop">
        <p>
          <img
            onClick={toggle}
            // src="https://cdn-icons-png.flaticon.com/512/1674/1674561.png"
            // src="https://w7.pngwing.com/pngs/659/504/png-transparent-dinosaur-computer-icons-dinosaur-thumbnail.png"
            src="https://cdn4.iconfinder.com/data/icons/the-lost-world-filled-outline/340/dinosaur_jurassic_animal_ancient_dino_wild_egg-512.png"
            alt=""
          />
        </p>
      </div>
    </div>
  );
}

export default Popchat;
