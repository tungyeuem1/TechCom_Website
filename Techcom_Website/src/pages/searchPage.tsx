import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
interface Product {
  _id: string;
  title: string;
  author: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  featured: boolean;
  rating: number;
  rating1: {
    rate: number;
    count: number;
  };
  image: string;
  category?: { name: string }; // Thêm category
}
const SearchPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const author = searchParams.get("author") || "";

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/products/search?keyword=${keyword}&author=${author}`
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Lỗi khi tìm kiếm sách:", error);
      }
    };

    fetchBooks();
  }, [keyword, author]);

  return (
    <div>
      <h2>Kết quả tìm kiếm</h2>
     

        <section className="shop-section section-padding fix pt-0">
          <div className="container">
            <div className="swiper book-slider">
              <div className="swiper-wrapper">
                {products.map((product) => (
                  <div key={product._id} className="swiper-slide">
                    <div className="shop-box-items style-2">
                      <div className="book-thumb center">
                        <a href={`/shopdetail/${product._id}`}>
                          <img src={product.image} alt={product.title} style={{ width: "152px", height: "211px" }} />
                        </a>
                        <ul className="post-box">
                          {product.rating1?.rate >= 4.5 && <li>Hot</li>}
                          {product.discount > 0 && <li>{product.discount}%</li>}
                        </ul>
                      </div>
                      <div className="shop-content">

                      <h3><a href={`/shopdetail/${product._id}`} className="text-dark text-decoration-none text-multiline-ellipsis">{product.title}</a></h3>
                        <ul className="price-list">
                          <li>${product.price}</li>
                          {product.oldPrice && <li><del>${product.oldPrice}</del></li>}
                        </ul>
                        <h5>{product.author}</h5>
                      </div>
                      <div className="shop-button">
                        <a href={`/shopdetail/${product._id}`} className="theme-btn">
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

      
    </div >
  );
};

export default SearchPage;
