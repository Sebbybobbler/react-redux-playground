import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../app/store"
import styles from "./MainContent.module.css"

export default function MainContent() {
    return (
        <div className={styles.mainWrapper}>
            <Provider store={store}>
                <Outlet />
            </Provider>
        </div>
    );
}
