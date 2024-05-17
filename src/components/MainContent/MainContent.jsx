import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../app/store"

export default function MainContent() {
    return (
        <div>
            <Provider store={store}>
                <Outlet />
            </Provider>
        </div>
    );
}
