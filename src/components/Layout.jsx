import {Outlet} from "react-router-dom";
import Header from "./Header";
import {Suspense} from "react";
import Loading from "./UI/loading";

function Layout() {
    return (
        <div>
            <Header />
            <Suspense fallback={<Loading />}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default Layout;