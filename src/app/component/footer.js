export default function Footer(){
    return (
        <footer className="bg-light text-center text-lg-start">
          <div className="container p-4">
            <div className="text-center">
              <h6 className="text-uppercase">Footer</h6>
              <p>
              This website is a website that introduces Thai tea and thank you for visiting our website.
              </p>
            </div>
          </div>
          <div className="text-center p-3 bg-light" style={{ borderTop: '1px solid #e7e7e7' }}>
            &copy; {new Date().getFullYear()} POOMCHATHAI
          </div>
        </footer>
      );
    }
    

  