import Image from 'next/image';
import slider1 from '../../../public/slider1.jpg'
import silder2 from '../../../public/slider2.jpg'
export default function Carousel() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image src={slider1} className="d-block w-100" alt="Slide 1" width={900} height={900} /> 
        </div>
        <div className="carousel-item">
          <Image src={silder2} className="d-block w-100" alt="Slide 2" width={900} height={900} />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
