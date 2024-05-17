import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import DadJokes from "./components/DadJokes/DadJokes";

const routes = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "dadjokes",
                element: <DadJokes />,
            },
        ],
    },
];
export default routes;
