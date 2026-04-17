import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import Timeline from "../pages/timelinePage/Timeline";
import Stats from "../pages/statsPage/Stats";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import ErrorPage from "../pages/errorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        children:[
            {
                index: true,
                element: <Homepage></Homepage>
            },
            {
                path: "/friendDetails/:id",
                element: <FriendDetails></FriendDetails>
            },
            {
                path: "/timeline",
                element: <Timeline></Timeline>
            },
            {
                path: "/stats",
                element: <Stats></Stats>
            }
        ],

        errorElement : <ErrorPage></ErrorPage>
    }
])