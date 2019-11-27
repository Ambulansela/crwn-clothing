import React from "react";
//en slags funktion som ger tillbaka en powered up component
import { withRouter } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="title">SHOP NOW</span>
    </div>
  </div>
);

//gör så att jag får tillgång till history props i menuItem
export default withRouter(MenuItem);
