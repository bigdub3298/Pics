import React, { Component } from "react";

export class ImageCard extends Component {
  render() {
    const { description, url } = this.props.image;
    return (
      <div>
        <img src={url.regular} alt={description} />
      </div>
    );
  }
}

export default ImageCard;
