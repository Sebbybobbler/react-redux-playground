import SiteNav from "../SiteNav/SiteNav"
import styles from "./SiteHeader.module.css"

export default function SiteHeader(){
    return(
        <div className={styles.wrapper}>
            <h1>React-Redux</h1>
            <div className={styles.navbar}>
            <SiteNav/>
            </div>
        </div>
    )
}