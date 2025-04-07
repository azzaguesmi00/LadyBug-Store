import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img2.jpeg";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.jpg";
import pol from "../assets/pol.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import imgg from "../assets/imgg.png";
import sk from "../assets/sk.jpeg"
import ww from "../assets/ww.png"
const images = [img1, img2, img3,ww, img4, sk, img5, img6, img8, pol,img9, imgg];


const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  position: relative; /* Important for positioning the dots */
`;

const ImageContainer = styled.div`
  display: grid; /* Use grid layout */
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Grid with auto-fill */
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  cursor: pointer;
  opacity: 0;
  animation: fadeIn 1s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const PopupImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 10px;
`;

const DotsOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1; /* Dots will be in the background */

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle, rgba(255, 0, 0, 0.5) 10%, transparent 10%), radial-gradient(circle, rgba(0, 0, 0, 0.5) 10%, transparent 10%);
    background-size: 50px 50px; /* Size of the dots */
    background-position: 0 0, 25px 25px;
    animation: moveDots 10s infinite linear;
  }

`;

const Home = () => {
  const [visibleImages, setVisibleImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  // Display all images immediately
  useEffect(() => {
    setVisibleImages(images);
  }, []);

  return (
    <HomeContainer>
      <h1>Welcome to Ladybug Store!</h1>
      <p>Discover stylish fashion with Ladybug Store.</p>

      {/* Dots overlay */}
      <DotsOverlay />

      {/* Image Container */}
      <ImageContainer>
        {visibleImages.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Ladybug fashion ${index + 1}`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </ImageContainer>

      {/* Popup Image */}
      {selectedImage && (
        <PopupOverlay onClick={() => setSelectedImage(null)}>
          <PopupImage src={selectedImage} alt="Popup" />
        </PopupOverlay>
      )}
    </HomeContainer>
  );
};

export default Home;