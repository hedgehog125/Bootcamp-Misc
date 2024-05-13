import MainContent from "./MainContent";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import SiteNav from "./SiteNav";

import styles from "./Root.module.css";

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
