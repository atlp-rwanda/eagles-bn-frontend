/* eslint-disable linebreak-style */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-const-assign */
/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import '../../layout/components/accommodations/SingleAccommodation.scss';

export class AccommodationImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imUrl: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ imUrl: value });
  }

  render() {
    const { imageUrl } = this.props;
    const { imUrl } = this.state;
    let largeUrl, gallery;
    if (imageUrl) {
      const firstUrl = imUrl === '' ? imageUrl[0] : imUrl;
      largeUrl = firstUrl.replace('load/', 'load/w_auto,h_400,c_scale/');
      gallery = imageUrl.map((image, index) => {
        const smallUrl = image.replace('load/', 'load/w_90,h_80,c_scale/');
        return (
          <div
            key={`${image[0]}-${index}`}
            className="small-img imagecard"
            style={{ backgroundImage: `url(${smallUrl})` }}
            onClick={() => this.handleChange(image)}
            role="presentation"
          />
        );
      });
    }
    return (
      <>
        <div className="single-accommodation small-container">
          <div className="col">
            {/* <img src={imageSrc} alt={name} className="big-image" /> */}
            <div
              className="big-image im"
              style={{
                backgroundImage: `url(${largeUrl})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                objectFit: 'contain',
                backgroundPosition: 'center center',
              }}
            />
            <div className="small-img-row">
              <div className="small-img-col other-images"> {gallery} </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

// AccommodationImages.propTypes = {
//   imageUrl: PropTypes.array.isRequired,
// };
export default AccommodationImages;
