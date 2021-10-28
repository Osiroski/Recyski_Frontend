import { Image } from 'react-bootstrap'
import bamboo from '../../assets/bamboo.jpg'
import plastic from '../../assets/kenyan.jpg'
import bottles from '../../assets/plasticbottles.jpg'
const Carousel = () => {
    return (
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img alt="" src={bamboo}/>
                    <div className="container">
                        <div className="carousel-caption text-start">
                            <h1 id="carouselHead1">Restore The Environment 🌳</h1>
                            <h6>Recyski is the first Digital Recycling trading Platform in East Africa.</h6>
                            <p><a id='carouselButton1' className="btn btn-lg btn-success" href="/register">Sign up today</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <img alt="" src={plastic}/>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1 id="carouselHead2">Create value out of trash </h1>
                            <h6>♻ Simply put, we pay you to recycle.</h6>
                            <p><a id='carouselButton2' className="btn btn-lg btn-dark" href="#LearnMore">Learn more</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <Image alt="" src={bottles}/>
                    <div className="container">
                        <div className="carousel-caption text-end">
                            <h1 id="carouselHead3">Take part in the UN SDGs ☮</h1>
                            <h6>💦 Some representative placeholder content for the third slide of this carousel.</h6>
                            <p><a id='carouselButton3' className="btn btn-lg btn-info" href="#goals">Our Targets</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel
