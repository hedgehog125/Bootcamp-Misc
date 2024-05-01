import styles from "./Root.module.css";
import SiteHeader from "./SiteHeader";
import SiteNav from "./SiteNav";
import MainContent from "./MainContent";
import SiteFooter from "./SiteFooter";

function Root() {
	return (
		<div className={styles.wrapper}>
			<SiteHeader />
			<SiteNav />
			<MainContent />
			<SiteFooter />
		</div>
	);
}

export default Root;
