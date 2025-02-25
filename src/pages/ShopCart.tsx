


export default function ShopCart() {


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
                        <h1>Shop Cart</h1>
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
                                    Shop Cart
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart-section section-padding">
        <div className="container">
            <div className="main-cart-wrapper">
                <div className="row g-5">
                    <div className="col-xl-9">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className="d-flex gap-5 align-items-center">
                                                <a href="shop-cart.html" className="remove-icon">
                                                    <img src="./src/assets/img/icon/icon-9.svg" alt="img"/>
                                                </a>
                                                <span className="cart">
                                                    <img src="./src/assets/img/shop-cart/01.png" alt="img"/>
                                                </span>
                                                <span className="cart-title">
                                                    simple Things You To Save Book
                                                </span>
                                            </span>
                                        </td>
                                        <td>
                                            <span className="cart-price">$30.00</span>
                                        </td>
                                        <td>
                                            <span className="quantity-basket">
                                                <span className="qty">
                                                    <button className="qtyminus" aria-hidden="true">−</button>
                                                    <input type="number" name="qty" id="qty2" min="1" max="10" step="1"
                                                        value="1"/>
                                                    <button className="qtyplus" aria-hidden="true">+</button>
                                                </span>
                                            </span>
                                        </td>
                                        <td>
                                            <span className="subtotal-price">$120.00</span>
                                        </td>
                                    </tr>
                                    
                                    
                                </tbody>
                            </table>
                        </div>
                        <div className="cart-wrapper-footer">
                            <form action="https://gramentheme.com/html/bookle/shop-cart.html">
                                <div className="input-area">
                                    <input type="text" name="Coupon Code" id="CouponCode" placeholder="Coupon Code"/>
                                    <button type="submit" className="theme-btn">
                                        Apply
                                    </button> 
                                </div>
                            </form>
                            <a href="shop-cart.html" className="theme-btn">
                                Update Cart
                            </a>
                        </div>
                    </div>
                    <div className="col-xl-3">
                        <div className="table-responsive cart-total">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Cart Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <span className="d-flex gap-5 align-items-center justify-content-between">
                                                <span className="sub-title">Subtotal:</span>
                                                <span className="sub-price">$84.00</span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="d-flex gap-5 align-items-center  justify-content-between">
                                                <span className="sub-title">Shipping:</span>
                                                <span className="sub-text">
                                                    Free
                                                </span>
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <span className="d-flex gap-5 align-items-center  justify-content-between">
                                                <span className="sub-title">Total:  </span>
                                                <span className="sub-price sub-price-total">$84.00</span>
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <a href="checkout.html" className="theme-btn">Proceed to checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

            
        </>

    )
}