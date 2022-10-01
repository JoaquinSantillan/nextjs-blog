import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Image from 'next/image'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'

const name = 'blueweb'

export default function Layout({children,title,home,description}) {
return (
    <div className={styles.container}>
        <Head>
        <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
            <meta name='description' content={description}/>
        </Head>

        <header className={styles.header}>
        {home ? (
        <>
            <Image
            priority
            src="/images/paisaje.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt={name}
            ></Image>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
        ) : (
    <>
            <Link href="/">
            <a>
                <Image
                priority
                src="/images/paisaje.jpg"                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt={name}
                ></Image>
            </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
            <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
            </Link>
            </h2>
        </>
        )}
        <nav>
        <Link href="/">
            <a>Inicio | </a>
        </Link>
        <Link href="/blog">
            <a>Blog | </a>
        </Link>
        <Link href="/contacto">
            <a>Contacto</a>
        </Link>
        </nav>
    </header>
        <nav>navbar</nav>
        <main>
            {children}
        </main>
        
        {/* {!home && (
            <div className={styles.backToHome}>
                <Link href='/'>
                    <a>&lt;- back to home</a>
                </Link>
            </div>
        )} */}
    </div>
)
}
