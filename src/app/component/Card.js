import Image from "next/image";
// import Slider5 from "/Slider5.jpg";
// import Slider6 from "/Slider6.png";
// import Slider7 from "/Slider7.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Carousel() {
  return (
    <div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <Image src="./slider5.jpg" className="card-img-top" alt="Card 1" width={640} height={480} />
              <div className="card-body">
                <h5 className="card-title">Chathai</h5>
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <Image src="./slider6.jpg" className="card-img-top" alt="Card 2" width={640} height={480} />
              <div className="card-body">
                <h5 className="card-title">Chathai</h5>
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <Image src="./slider7.jpg" className="card-img-top" alt="Card 3" width={640} height={480} />
              <div className="card-body">
                <h5 className="card-title">Chathai</h5>
                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}