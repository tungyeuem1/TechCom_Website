import { useEffect, useState } from "react";
import { getAllProduct } from "../services/Product";
import toast from "react-hot-toast";

interface Product {
    id: string;
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

export default function HomePage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getAllProduct()
            .then(({ data }) => {
                toast.success("Dữ liệu tải thành công!");
                setProducts(data);
            })
            .catch((error) => toast.error("Lỗi: " + error.message));
    }, []);

    return (
        <section className="shop-section section-padding fix pt-0">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">Featured Books</h2>
                    </div>
                    <a href="shop" className="theme-btn transparent-btn wow fadeInUp" data-wow-delay=".5s">
                        Explore More <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                </div>

                <div className="swiper book-slider">
                    <div className="swiper-wrapper">
                        {products.map((product, index) => (
                            <div key={index} className="swiper-slide">
                                <div className="shop-box-items style-2">
                                    <div className="book-thumb center">
                                        <a href={`/shopdetail/${product.id}`}>
                                            <img src={product.image} alt={product.title} />
                                        </a>
                                        <ul className="post-box">
                                        {product.rating1?.rate >= 4.5 && <li>Hot</li>}
                                        {product.discount >= 5 && <li>{product.discount}%</li>}
                                        </ul>
                                        <ul className="shop-icon d-grid justify-content-center align-items-center">
                                            <li>
                                                <a href="shop-cart.html"><i className="far fa-heart"></i></a>
                                            </li>
                                            <li>
                                                <a href="shop-cart.html">
                                                    <img className="icon" src="./src/assets/img/icon/shuffle.svg" alt="svg-icon" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href={`/shopdetail/${product.id}`}><i className="far fa-eye"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="shop-content">
                                        <h5>{product.author}</h5>
                                        <h3><a href={`/shopdetail/${product.id}`}>{product.title}</a></h3>
                                        <ul className="price-list">
                                            <li>${product.price}</li>
                                            {product.oldPrice && <li><del>${product.oldPrice}</del></li>}
                                        </ul>
                                        <ul className="author-post">
                                            <li className="authot-list">
                                                <span className="thumb">
                                                    <img src="./src/assets/img/testimonial/client-1.png" alt="img" />
                                                </span>
                                                <span className="content">{product.author}</span>
                                            </li>
                                            <li className="star">
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className={`fa-solid fa-star${i < product.rating ? "" : "-o"}`}></i>
                                                ))}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="shop-button">
                                        <a href={`/shopdetail/${product.id}`} className="theme-btn">
                                            <i className="fa-solid fa-basket-shopping"></i> Add To Cart
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
