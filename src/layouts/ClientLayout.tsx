import { Outlet } from "react-router-dom";

import {Header} from "../components/Header";
import { Banner } from "../components/Banner";
import { Footer } from "../components/Footer";


export default function ClientLayout() {

 
    return (
        <>
            <Header />
            <Banner/>
            
            <div className="container">
                <Outlet/>
            </div>
            <Footer/>
        </>

    )
}