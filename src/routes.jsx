import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import DadJokes from "./components/DadJokes/DadJokes";
import TicTacToe from "./components/TicTacToe/TicTacToe"

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
            {
                path:"tictactoe",
                element: <TicTacToe />
            }
        ],
    },
];
export default routes;
