import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCircleNotch, faEnvelopeOpenText, faPhoneSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './footer.css'

export const Footer: React.FC = () => {
    return (
        <footer className="container-fluid py-3 bg-light">
  <div className="row" id='footer'>
    <div className="col-12 col-md">
      <FontAwesomeIcon icon={faCircleNotch}/> Recyski
      <small className="d-block mb-3 text-muted">©2021</small>
    </div>
    <div className="col-6 col-md">
      <h5>Features</h5>
      <ul className="list-unstyled text-small">
        <li><a className="link-secondary" href="/">Sign up</a></li>
        <li><a className="link-secondary" href="/">Sell Trash</a></li>
        <li><a className="link-secondary" href="/">Compete</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Partners</h5>
      <ul className="list-unstyled text-small">
        <li><a className="link-secondary" href="/">Partner A</a></li>
        <li><a className="link-secondary" href="/">Partner B</a></li>
        <li><a className="link-secondary" href="/">Partner C</a></li>
        <li><a className="link-secondary" href="/">Partner D</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>About</h5>
      <ul className="list-unstyled text-small">
        <li><a className="link-secondary" href="/">Learn More</a></li>
        <li><a className="link-secondary" href="/">Goals</a></li>
        <li><a className="link-secondary" href="/">Privacy</a></li>
        <li><a className="link-secondary" href="/">Terms</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Contact Us</h5>
      <ul className="list-unstyled" id='contactList'>
        <li><FontAwesomeIcon icon={faEnvelopeOpenText} size='sm'/> osiroskinoelski@gmail.com</li>
        <li><FontAwesomeIcon icon={faPhoneSlash}/> +254729732440</li>
        <li><FontAwesomeIcon icon={faTwitter}/> @Osiroski</li>
      </ul>
    </div>
  </div>
</footer>
    );
};