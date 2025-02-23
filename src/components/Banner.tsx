
export function Banner() {
    return (
        <>
            <div className="hero-section hero-1 fix">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-xl-8 col-lg-6">
                            <div className="hero-items">
                                <div className="book-shape">
                                    <img src="./src/assets/img/hero/book.png" alt="shape-img" />
                                </div>
                                <div className="frame-shape1 float-bob-x">
                                    <img src="./src/assets/img/hero/frame.png" alt="shape-img" />
                                </div>
                                <div className="frame-shape2 float-bob-y">
                                    <img src="./src/assets/img/hero/frame-2.png" alt="shape-img" />
                                </div>
                                <div className="frame-shape3">
                                    <img src="./src/assets/img/hero/xstar.png" alt="img" />
                                </div>
                                <div className="frame-shape4 float-bob-x">
                                    <img src="./src/assets/img/hero/frame-shape.png" alt="img" />
                                </div>
                                <div className="bg-shape1">
                                    <img src="./src/assets/img/hero/bg-shape.png" alt="img" />
                                </div>
                                <div className="bg-shape2">

                                </div>
                                <div className="hero-content">
                                    <h6 className="wow fadeInUp" data-wow-delay=".3s">Up to 30% Off</h6>
                                    <h1 className="wow fadeInUp" data-wow-delay=".5s">Get Your New Book <br /> With The Best Price
                                    </h1>
                                    <div className="form-clt wow fadeInUp" data-wow-delay=".9s">
                                        <button type="submit" className="theme-btn">
                                            Shop Now <i className="fa-solid fa-arrow-right-long"></i>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-xl-4 col-lg-6">
                            <div className="girl-image">
                                <img className=" float-bob-x" src="./src/assets/img/hero/hero-girl.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="feature-section fix section-padding">
                <div className="container">
                    <div className="feature-wrapper">
                        <div className="feature-box-items wow fadeInUp" data-wow-delay=".2s">
                            <div className="icon">
                                <i className="icon-icon-1"></i>
                            </div>
                            <div className="content">
                                <h3>Return & refund</h3>
                                <p>Money back guarantee</p>
                            </div>
                        </div>
                        <div className="feature-box-items wow fadeInUp" data-wow-delay=".4s">
                            <div className="icon">
                                <i className="icon-icon-2"></i>
                            </div>
                            <div className="content">
                                <h3>Secure Payment</h3>
                                <p>30% off by subscribing</p>
                            </div>
                        </div>
                        <div className="feature-box-items wow fadeInUp" data-wow-delay=".6s">
                            <div className="icon">
                                <i className="icon-icon-3"></i>
                            </div>
                            <div className="content">
                                <h3>Quality Support</h3>
                                <p>Always online 24/7</p>
                            </div>
                        </div>
                        <div className="feature-box-items wow fadeInUp" data-wow-delay=".8s">
                            <div className="icon">
                                <i className="icon-icon-4"></i>
                            </div>
                            <div className="content">
                                <h3>Daily Offers</h3>
                                <p>20% off by subscribing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}