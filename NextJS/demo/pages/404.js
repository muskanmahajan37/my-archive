import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Notfound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            // router.go(1)
            router.push('/');
        }, 3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Oppps... Page cannot be found</h1>
            <p>Go back to <Link href="/"><a>Homepage</a></Link></p>
        </div>
    )
}

export default Notfound
