import styles from "@/app/style/pageLayout.module.css";
import Dashboard from "@/app/components/DashboardLandlord";
import MobileNav from "@/app/components/MobileNav";
import Filter from "@/app/components/Filter";
export default function PageLayout({ children }) {
  return (
    <div className={styles.pageLayout}>
      <div className={styles.layoutContent}>
        <div className={styles.dashboardLayout}>
          <Dashboard />
        </div>
        <div className={styles.filterLayout}>
          <Filter />
        </div>
      </div>
      <MobileNav />
      <div className={styles.pageContentLayout}>{children}</div>
    </div>
  );
}
