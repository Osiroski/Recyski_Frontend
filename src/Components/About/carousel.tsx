import { Image,Carousel } from 'react-bootstrap'
import bamboo from '../../assets/bamboo.jpg'
import plastic from '../../assets/kenyan.jpg'
import bottles from '../../assets/plasticbottles.jpg'
const Carousels = () => {
    return (
        <Carousel id="myCarousel" data-bs-ride="carousel" controls>
            <div className="carousel-inner">
                <Carousel.Item className="active" interval={4000} >
                <img alt="" src={bamboo}/>
                    <div className="container">
                        <Carousel.Caption className=" text-start">
                            <h1 id="carouselHead1">Restore The Environment 🌳</h1>
                            <h6>Recyski is the first Digital Recycling trading Platform in East Africa.</h6>
                            <p><a id='carouselButton1' className="btn btn-lg btn-success" href="/register">Sign up today</a></p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={3000} >
                <img alt="" src={plastic}/>
                    <div className="container">
                        <Carousel.Caption>
                            <h1 id="carouselHead2">Create value out of trash </h1>
                            <h6>♻ Simply put, we pay you to recycle.</h6>
                            <p><a id='carouselButton2' className="btn btn-lg btn-dark" href="#LearnMore">Learn more</a></p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                <Image alt="" src={bottles}/>
                    <div className="container">
                        <Carousel.Caption className=" text-end">
                            <h1 id="carouselHead3">Take part in the UN SDGs ☮</h1>
                            <h6>💦 Some representative placeholder content for the third slide of this carousel.</h6>
                            <p><a id='carouselButton3' className="btn btn-lg btn-info" href="#goals">Our Targets</a></p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item >
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </Carousel>
    )
}

export default Carousels
