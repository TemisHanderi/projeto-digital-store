import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            {/* <Footer/>               descomenta isso aq qnd o footer tiver feito*/}
        </>
    );
}
 
export default Layout;