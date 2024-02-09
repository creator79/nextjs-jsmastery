import Image from 'next/image';
import Link from 'next/link'
import styles from './project.module.css'

export default function Home() {
    return (
        <main>

            <h1> My Projects List</h1>
            <ul className={styles.ul}>
                <li>
                    <Link href='/projects/jobit'>
                        Jobit

                    </Link>
                </li>
                <li>
                    <Link href='/projects/carrent'>
                        CarRental

                    </Link>
                </li>
                <li>
                    <Link href='/projects/hipnode'>
                        Hipnode

                    </Link>
                </li>

            </ul>

        </main>
    );
}
