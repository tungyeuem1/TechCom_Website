import { useEffect, useState } from "react";
import { getAllProduct } from "../services/Product";
import toast from "react-hot-toast";
import { Sidebar } from "../components/sidebarShop";

interface Product {
    _id: string;
    title: string;
    author: string;
    price: number;
    oldPrice?: number;  // Có thể không có
    discount?: number;  // Có thể không có
    image: string;
    rating: number;
    rating1: {
        rate: number;
        count: number;
    };
}

export default function Shop() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getAllProduct()
            .then(({ data }) => {
                setProducts(data);
            })
            .catch((error) => toast.error("Lỗi: " + error.message));
    }, []);

    return (
        <>
            <div className="breadcrumb-wrapper">
                <div className="book1">
                    <img src="./src/assets/img/hero/maytinh1.png" alt="book" style={{width:"402px", height:"305px"}}/>
                </div>
                <div className="book2">
                    <img src="./src/assets/img/hero/maytinh2.png" alt="book" style={{width:"402px", height:"280px"}}/>
                </div>
                <div className="container">
                    <div className="page-heading">
                        <h1>Shop Default</h1>
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
                                    Shop Default
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
                         <Sidebar/>
                            <div className="col-xl-9 col-lg-8 order-1 order-md-2">
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-arts" role="tabpanel"
                                        aria-labelledby="pills-arts-tab" tabIndex={0}>
                                        <div className="row">
                                            {products.map((product, index) => (
                                                <div key={index} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                                    <div className="shop-box-items">
                                                        <div className="book-thumb center">
                                                            <a href={`/shopdetail/${product._id}`}>
                                                                <img src={product.image} alt={product.title} />
                                                            </a>
                                                            <ul className="post-box">
                                                            {product.rating1?.rate >= 4.5 && <li>Hot</li>}
                                                            {product.discount >= 5 && <li>{product.discount}%</li>}
                                                            </ul>
                                                            <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                                <li>
                                                                    <a href="#"><i className="far fa-heart"></i></a>
                                                                </li>
                                                                <li>
                                                                    <a href="#">
                                                                        <img className="icon" src="./src/assets/img/icon/shuffle.svg"
                                                                            alt="svg-icon" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a href={`/shopdetail/${product._id}`}><i className="far fa-eye"></i></a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="shop-content">
                                                            <h3><a href={`/shopdetail/${product._id}`}>{product.title}</a></h3>
                                                            <ul className="price-list">
                                                                <li>${product.price}</li>
                                                                <li>
                                                                    <i className="fa-solid fa-star"></i>
                                                                    {product.rating1?.rate} ({product.rating1?.count})
                                                                </li>
                                                            </ul>
                                                            <div className="shop-button">
                                                                <a href={`/shopdetail/${product._id}`} className="theme-btn">
                                                                    <i className="fa-solid fa-basket-shopping"></i> Add To Cart
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                </div>
                                <div className="page-nav-wrap text-center">
                                    <ul>
                                        <li><a className="previous" href="shop.html">Previous</a></li>
                                        <li><a className="page-numbers" href="shop">1</a></li>
                                        <li><a className="page-numbers" href="shop">2</a></li>
                                        <li><a className="page-numbers" href="shop">3</a></li>
                                        <li><a className="page-numbers" href="shop">...</a></li>
                                        <li><a className="next" href="shop.html">Next</a></li>
                                    </ul>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>

    )
}