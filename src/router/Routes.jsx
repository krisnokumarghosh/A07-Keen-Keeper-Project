import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import Timeline from "../pages/timelinePage/Timeline";
import Stats from "../pages/statsPage/Stats";

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
                path: "/timeline",
                element: <Timeline></Timeline>
            },
            {
                path: "/stats",
                element: <Stats></Stats>
            }
        ]
    }
])