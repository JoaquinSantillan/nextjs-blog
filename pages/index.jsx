import Layout from "../components/Layout"
import utilStyles from '../styles/utils.module.css'


export default function Home() {
  return (
    <Layout title='Home | next.js' 
    home
    description='description del home'>
      <section className={utilStyles.headingMd}>
        <p>[your self introduction]</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, adipisci?
          <a href="https://next.js">our next js tutorials</a>
        </p>
      </section>
    </Layout>
  )
}
