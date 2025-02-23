import { Toaster } from "react-hot-toast";
import { useRoutes } from "react-router-dom";
import ClientLayout from "./layouts/ClientLayout";
import Register from "./pages/Register";

function App() {
    const routes = useRoutes([
        {
            path:"",
            element:<ClientLayout/>,
            children:[
                {path:"register", element:<Register/>}
            ]
            
        },
        
    ]);
    return (
        <>
            

            

            <div>{routes}</div>
            <Toaster />
        </>
    );
}

export default App;
