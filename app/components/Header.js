import styles from "../page.module.css";

export default function Header() {
  return (
    <header className={styles.headerWrapper}>
      <nav>
        <ul>
          <li>
            <a href="/city/Shibuya">Shibuya</a>
          </li>
          <li>
            <a href="/city/Neiva">Neiva</a>
          </li>
          <li>
            <a href="/city/Tynset">Tynset</a>
          </li>
          <li>
            <a href="/city/Sydney">Sydney</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
