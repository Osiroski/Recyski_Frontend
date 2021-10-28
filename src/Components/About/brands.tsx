
import visa from '../../assets/1.svg'
import coke from '../../assets/2.svg'
import sony from '../../assets/3.svg'


const Brands = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-light rounded-3" data-aos="flip-left" data-aos-easing="ease-out-cubic">
                <div className="col">
                <div className="row">
                    <h2 className="display-4 text-center">
                        Our Partners
                    </h2>
                </div>
                <div className="row row-cols-1 row-cols-md-2 g-3">
                    <div id='brand1' className="col my-3">
                        <img src={visa} alt="coke" width='100%' height='100%'/>
                    </div>
                    <div id='brand2' className="col my-3">
                        <img src={coke} alt="coke" width='100%' height='100%'/>
                    </div>
                    <div id='brand3' className="col my-3">
                        <img src={sony} alt="coke" width='100%' height='100%'/>
                    </div>
                </div>
                </div>
            </div>

        </div>
    )
}

export default Brands
