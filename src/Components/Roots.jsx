import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Roots = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Roots;