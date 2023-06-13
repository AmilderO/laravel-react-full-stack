import {Navigate, Outlet} from "react-router-dom";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function GuestLayout() {

    /**
     * If user is logged in, redirect to home page
     */
    const {user, token} = useStateContext();
    if(token){
        return <Navigate to="/" />
    }

    return (
        <div>
            GUEST LAYOUT PAGE
            <Outlet />
        </div>
    )
}
