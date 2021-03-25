import React from "react";

const PortfolioItem = ({
  className,
  number,
  title,
  thumb,
  category,
  character,
  buttonTitle,
  link,
}) => {
  return (
    <div className={`h-100 ${className ? className : ""}`}>
      <div className="fullscreen-slider-wrapper">
        <div className="feature-wrapper">
          <div className="fullscreen-inner feature-info">
            <div className={`post-character style-${number}`}>{character}</div>
            <div className="inner">
              <p className="bk_pra heading-font">{category}</p>
              <h2 className="heading heading-h2 heading-font">
                <span className="post-number">{number}</span>
                <a href={"/"}>{title}</a>
              </h2>
              <div className="fullpage-btn mt--130">
                <a href={link}>
                  {buttonTitle} <i className="btn-icon" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="fullscreen-inner feature-thumbnail featureThumb"
            style={{ backgroundImage: `url(${thumb})` }}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
