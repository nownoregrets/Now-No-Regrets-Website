import React from "react";
import "../Style/Home.css";
const Card = (props) => {
  // Title Trim after 60 characters
  const title =
    props.title.length > 60
      ? props.title.substring(0, 60) + "..."
      : props.title;
  // Description Trim after 160 chars
  const description =
    props.description.length > 160
      ? props.description.substring(0, 160) + "..."
      : props.description;

  // Styles for the badge
  const badgeStyle = {
    backgroundColor: "#f0f0f0",
    color: "#333",
    padding: "5px 10px",
    borderRadius: "12px",
    fontSize: "0.9rem",
    textTransform: "uppercase",
    border: "1px solid #ddd",
    display: "inline-block",
    marginRight: "10px",
  };

  return (
    <div class="col-sm-4 mt-3">
      <div class="card bg-light" style={{ borderRadius: "1vw" }}>
        <div class="card-body text-center">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{description}</p>

          {/* Badge */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="badge" style={badgeStyle}>
              {props.date}
            </span>
            {/* Button */}
            <a href="/" className="card-btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
