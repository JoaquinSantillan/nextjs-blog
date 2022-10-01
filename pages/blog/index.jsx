import Layout from "../../components/Layout";
import Link from "next/link"

export default function index({data}) {
return (
    <Layout title='Index | next.js'>
        index

        {
        data.map(({id,title,body})=>(
            <div key={id}>
                <Link href={`/blog/${id}`}>
                    <a>{id} = {title}</a>
                </Link>
                <p>{body}</p>
            </div>    
        ))
        }
    </Layout>
)
}


export async function getStaticProps(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()

        return{
            props:{
                data
            }
        }
    } catch (error) {
        console.log(error)
    }
}