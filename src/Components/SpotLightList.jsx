import React from 'react';
import '../Styles/SpotLight.css';
import { useSpotLight } from './SpotLightImages';
import { Link } from 'react-router-dom';

function SpotLightList() {
  const { images } = useSpotLight();

  return (
    <>
      <h3  className='spotlight-heading'>SPOTLIGHT PICKS</h3>
      <div className='spot-image-list'>
        {images.map((image) => (
          <div className="card spotLight-cards" key={image.id}>
            <div className="spot-card-img-wrapper">
              <Link to={`/spotlight/${image.id}`}>
                <img src={image.image} className="spot-card-img-top" alt={image.title} width={400} height={350} />
              </Link>
            </div>
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default SpotLightList;

