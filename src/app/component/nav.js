import Link from "next/link";
import Image from "next/image";
import Slider10 from "../../../public/Slider10.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            <Image src={Slider10} alt="Logo" width={80} height={80} className="d-inline-block align-text-top" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/service">Service</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">Contact</Link>
              </li>
            </ul>
            <div className="d-flex ms-2">
              <Link href="/signup">
                <button className="btn btn-outline-primary me-2">SignUp</button>
              </Link>
              <Link href="/signin">
                <button className="btn btn-outline-primary">SignIn</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}