import { faCoins, faExchangeAlt, faRecycle, faStore } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { Image } from 'react-bootstrap'
import AOS from 'aos';
import bamboo from '../../assets/bamboo.jpg'
import depots from '../../assets/Recycling.gif'
import looks from '../../assets/looks.jpg'
import Sdgaccordion from './sdgaccordion';
import Brands from './brands';
import Rates from '../Dashboard/Sales/Rates';
const LearnMore = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-in-out-sine"
    });
  }, []);
  return (
    <div id="LearnMore">
      <div className="bd-example">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="carde rounded-5">
              <Image id="card1" alt="" src={bamboo} className="rounded-5" />
              <div className="card-body" >
                <h4 className="card-title" data-aos="slide-right"><FontAwesomeIcon icon={faRecycle} size="lg" /> Recycle your plastic</h4>
                <p className="card-text lead" data-aos="zoom-out">
                  Recyski intends to create value to promote recycling culture.
                  The waste materials are exchanged based on rates and paid instantly.
                  Anybody is welcomed 🧕👴👦👶,
                  No limits. </p>
                <a href="/pricing" className="btn btn-outline-info" data-aos="zoom-in" data-bs-toggle="modal" data-bs-target="#exampleModalDefault"><FontAwesomeIcon icon={faExchangeAlt} size="1x" /> Exchange Rates</a>
                <p className="card-text" data-aos="slide-right"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="carde">
              <div className="card-header display-6" data-aos="slide-left">
                <FontAwesomeIcon icon={faStore} size="1x" /> Recycling Depots
              </div>
              <Image alt="" src={depots} className="rounded-5" height="65%" width="65%" />
              <div className="card-body">
                <h5 className="card-title" data-aos="slide-left">Visit the nearest depot</h5>
                <p className="card-text" data-aos="zoom-in">Convert your recycled materials into cash</p>
              </div>
              <div className="card-footer text-muted">
                Over 200 Recycle Depots
              </div>
            </div>
          </div>
          <div className="col" data-aos="zoom-out-right">
            <div className="carde card-cover h-100 overflow-hidden text-white card-2 rounded-5 shadow-lg" >
              <div className="d-flex flex-column h-100 p-2 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">You can earn income while conserving nature <FontAwesomeIcon icon={faCoins} size="1x" /></h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="d-flex align-items-center me-3">
                    <FontAwesomeIcon icon={faStore} size="lg" />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    Nairobi
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col" data-aos="slide-left">
            <div className="carde">
              <div className="row g-0">
                <div className="col-md-4">
                  <Image id="card2" alt="" src={looks} width="70%" className="rounded-2" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">NEEMA</h5>
                    <p className="card-text">NEEMA guidelines go here</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModalDefault" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: 'none' }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Rates/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <Sdgaccordion />
      <Brands />
    </div>

  )
}

export default LearnMore
