import SiteNav from "../SiteNav/SiteNav"
import styles from "./SiteHeader.module.css"

export default function SiteHeader(){
    return(
        <div className={styles.wrapper}>
            <h1>This is the header</h1>
            <SiteNav/>
        </div>
    )
}