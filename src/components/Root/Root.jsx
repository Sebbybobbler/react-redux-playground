import SiteHeader from "../SiteHeader/SiteHeader";
import SiteFooter from "../SiteFooter/SiteFooter";
import MainContent from "../MainContent/MainContent";

function Root() {
    return (
        <>
            <div>
                <SiteHeader />
                <MainContent />
                <SiteFooter />
            </div>
        </>
    );
}

export default Root;
