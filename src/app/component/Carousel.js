import Image from "next/image"
import Slider1 from '/slider1.jpg'
import Slider2 from '/slider2.jpg'
export default function Carousel() {
return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
            <Image src={Slider1} className="d-block w-100" alt="..."width={900} height={900}/>
            </div>
            <div className="carousel-item">
            <Image src={Slider2} className="d-block w-100" alt="..."width={900} height={900}/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
        </button>
        </div>
);
}