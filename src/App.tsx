import { Toaster } from "react-hot-toast";
import { useRoutes } from "react-router-dom";
import ClientLayout from "./layouts/ClientLayout";
import HomePage from "./pages/HomePage";

function App() {
    const routes = useRoutes([
        {
            path:"",
            element:<ClientLayout/>,
            children:[
                
                {path:"", element:<HomePage/>},
            ]
            
        },
        
    ]);
    return (
        <>
            

            

            <div >{routes}</div>
            <Toaster />
        </>
    );
}

export default App;
