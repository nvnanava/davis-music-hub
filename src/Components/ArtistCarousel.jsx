import React from "react";
import "./ArtistCarousel.css";
import artistImage from "../assets/genericArtist.jpg"; // Import assets for images and icons
import Slider from "react-slick"; // Import Slider component from react-slick for carousel functionality
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "material-symbols";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "none",
        border: "none",
        color: "#614b3a",
        fontSize: "100px",
        top: "95px",
        right: "-70px",
      }}
      onClick={onClick}
    >
      〉
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "none",
        border: "none",
        color: "#614b3a",
        fontSize: "100px",
        top: "95px",
        left: "-145px",
      }}
      onClick={onClick}
    >
      〈
    </div>
  );
}

export const ArtistCarousel = ({ data }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    pauseonHover: true,
    swipeToSlide: true,
  };
  const filteredData = data.filter((artist) => artist.featured == true); // Filter artists based on the 'featured' property

  if (filteredData.length === 0) {
    return (
      <div className="no-artists">
        <h2>No Featured Artists Available</h2>
      </div>
    ); // Return a message if no featured artists are found
  }
  console.log(filteredData); // Log the filtered data to check if the filtering works

  const carouselItems = filteredData.map((item) => ({
    artistName: item.artistName,
    bio: item.bio,
    image: item.image || artistImage,
    altText: item.altText || "Image of a generic band",
    genres: item.genres || ["unknown genre"],
  })); // Map the filtered data to create carousel items

  console.log(carouselItems); // Log the carousel items to check if they are created correctly

  return (
    <div className="artist-carousel">
      <h2 className="carousel-title">Meet the Artist!</h2>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.image} alt={item.altText} className="artist-image" />
            <div className="artist-info">
              <h3 className="artist-name">{item.artistName}</h3>
              <p className="artist-bio">{item.bio}</p>
              <p className="artist-genres">{item.genres}</p>
              <button className="viewBtn">View More</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  ); // Render the carousel with the items
};
