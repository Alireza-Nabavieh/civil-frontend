
import Link from 'next/link'
import styles from '@/styles/Footer.module.css'
 

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p> Copyright &copy;  Omarn App</p>
            <p>
                 <Link href="/about"> درباره ما  </Link>
            </p>
        </footer>
    )
}


 