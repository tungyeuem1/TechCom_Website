


export default function ShopList() {


    return (
        <>
            <div className="breadcrumb-wrapper">
                <div className="book1">
                    <img src="./src/assets/img/hero/book1.png" alt="book" />
                </div>
                <div className="book2">
                    <img src="./src/assets/img/hero/book2.png" alt="book" />
                </div>
                <div className="container">
                    <div className="page-heading">
                        <h1>Shop List</h1>
                        <div className="page-header">
                            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".3s">
                                <li>
                                    <a href="index.html">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <li>
                                    Shop List
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className="shop-section fix section-padding">
                <div className="container">
                    <div className="shop-default-wrapper">
                        <div className="row">
                            <div className="col-12">
                                <div className="woocommerce-notices-wrapper wow fadeInUp" data-wow-delay=".3s">
                                    <p>Showing 1-3 Of 34 Results </p>
                                    <div className="form-clt">
                                        <div className="nice-select" tabIndex={0}>
                                            <span className="current">
                                                Default Sorting
                                            </span>
                                            <ul className="list">
                                                <li data-value="1" className="option selected focus">
                                                    Default sorting
                                                </li>
                                                <li data-value="1" className="option">
                                                    Sort by popularity
                                                </li>
                                                <li data-value="1" className="option">
                                                    Sort by average rating
                                                </li>
                                                <li data-value="1" className="option">
                                                    Sort by latest
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="icon">
                                            <a href="shop-list.html"><i className="fas fa-list"></i></a>
                                        </div>
                                        <div className="icon-2 active">
                                            <a href="shop.html"><i className="fa-sharp fa-regular fa-grid-2"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </section>
        </>

    )
}