import Link from "next/link";
import  styles from './Header.module.css';

export default function Cabecalho() {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.cabecalho}>
          <div className={styles.info}>
          Turma: 1tdspx
          </div>
          <div className={styles.info}>
            <p>RM:98249</p>
          </div>
          <div className={styles.info}>
            <p>Felipe Sieiro Paim dos Santos</p>
          </div>
        </div>
      </nav>
    </header>
  )
}