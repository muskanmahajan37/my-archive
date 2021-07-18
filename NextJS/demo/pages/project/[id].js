export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    const paths = data.map(user => {
        return {
            params: { id: user.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json();

    return {
        props: { project: data }
    }
}

const Details = ({ project }) => {
    return (
        <div>
            <h1>{project.name}</h1>
            <p>{project.email}</p>
            <p>{project.website}</p>
            <p>{project.address.city}</p>
        </div>
    )
}

export default Details
