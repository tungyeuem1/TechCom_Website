import { Toaster } from "react-hot-toast";
import { useRoutes } from "react-router-dom";
import { ClientLayout, ClientShop } from "./layouts/ClientLayout";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import ShopList from "./pages/ShopList";
import ShopDetail from "./pages/ShopDetail";
import ShopCart from "./pages/ShopCart";
import { UserProvider } from "./contexts/user";
import { CartProvider } from "./contexts/cart";
import Wishlist from "./pages/wishlist";

function App() {
    const routes = useRoutes([
        {
            path: "",
            element: <ClientLayout />,
            children: [
                { path: "", element: <HomePage /> },
            ]
        },
        {
            path: "",
            element: <ClientShop />,
            children: [
                { path: "/shop", element: <Shop /> },
                { path: "/shoplist", element: <ShopList /> },
                { path: "/shopdetail/:id", element: <ShopDetail /> },
                { path: "/shopcart", element: <ShopCart /> },
                { path: "/wishlist", element: <Wishlist /> },
            ]
        },
    ]);

    return (
        <UserProvider>  {/* ✅ Bọc toàn bộ ứng dụng trong UserProvider */}
            <CartProvider>
                <main>
                    {routes}
                    <Toaster />
                </main>
            </CartProvider>
        </UserProvider>
    );
}

export default App;
