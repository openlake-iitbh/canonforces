import NavigationMenu from "../NavigationMenu/NavigationMenu";
import styles from './Layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
   
    <div className={styles.layout}>
      <NavigationMenu />
    <main className={styles.main}>{children}</main>
    </div>
     
  );
}
