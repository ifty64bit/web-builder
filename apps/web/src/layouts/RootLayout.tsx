import { Outlet } from "react-router-dom";
import DefaultProvider from "../providers/DefaultProvider";

function RootLayout() {
    return (
        <DefaultProvider>
            <Outlet />
        </DefaultProvider>
    );
}

export default RootLayout;
