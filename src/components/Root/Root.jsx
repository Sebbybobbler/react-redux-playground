import SiteHeader from "../SiteHeader/SiteHeader";
import SiteFooter from "../SiteFooter/SiteFooter";
import MainContent from "../MainContent/MainContent";
import styles from "./Root.module.css"

function Root() {
    return (
        <>
            <div className={styles.rootWrapper}>
                <div className={styles.wrapper}>
                <SiteHeader />
                <MainContent />
                <SiteFooter />
                </div> 
            </div>
        </>
    );
}

export default Root;
