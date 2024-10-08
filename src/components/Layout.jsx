import {Outlet} from "react-router-dom";
import Header from "./Header";
import {Suspense} from "react";
import Loading from "./UI/loading";
import Social from "./Social";

function Layout() {
    return (
        <div className='mx-auto pt-[80px] overflow-hidden'>
            <Social />
            <Header />
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default Layout;