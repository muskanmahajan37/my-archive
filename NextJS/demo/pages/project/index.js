import Head from 'next/head';
import Link from 'next/link'
import styles from '../../styles/Project.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    return {
        props: { projects: data }
    }
}

const Ninjas = ({ projects }) => {
    return (
        <>
            <Head>
                <title>Project | Listing</title>
                <meta name="keywords" content="nextjs" />
            </Head>
            <div>
                <h1>Ninja pages</h1>
                {projects.map(project => (
                    <Link href={`/project/${project.id}`} key={project.id}>
                        <a className={styles.single}>
                            <h3>{project.name}</h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Ninjas
