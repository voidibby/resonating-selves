import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import * as css from "../assets/styles/index.module.scss"

const IndexPage = ({ data }) => {
  //console.log(data.allMdx.edges[0].node.frontmatter.image_files[0])

  return (
    <>
      <Header></Header>
      <main>
        <section className={css.exhibitionText}>
          <h1>RESONATING{"\n"}SELVES—</h1>
          <p>
            In an era where truth is increasingly elusive and subjective, the
            latest Interface Cultures student exhibition “Resonating Selves”
            presents a captivating exploration of how our identities resonate
            and interact with the world around us. The fusion of technology and
            artistic expression enables a deeper understanding of the interplay
            between the digital and physical realms. Through the lens of media
            art, these artists probe the complexities of truth ownership and its
            influence on our sense of self.
            {"\n\n"}
            The convergence of technology, particularly Artificial Intelligence,
            plays a pivotal role in this context. AI, with its capacity to
            analyse and generate information, becomes a powerful tool for
            questioning truth and exposing the multifaceted layers of our
            identities. "Resonating Selves" within the context of the Ars
            Electronica Festival 2023 amplifies the festival's overarching theme
            of "Who Owns the Truth?"
            {"\n\n"}
            The exhibition acts as a catalyst for introspection, fostering
            dialogue on the intricacies of truth in our increasingly mediated
            and interconnected world. Each of the projects presented in this
            exhibition push the boundaries of our perception, inviting viewers
            to critically examine the dynamic relationship between human
            subjectivity and the objective reality we seek to comprehend. From
            interactive installations to immersive experiences, each artwork
            engages visitors in a profound exploration of personal truths and
            collective narratives.
            {"\n\n"}
            As visitors engage with the artworks, they become active
            participants in an ongoing dialogue about truth ownership and the
            construction of selfhood. By navigating these immersive experiences,
            audiences are encouraged to question their own preconceptions,
            biases, and societal influences.
            {"\n\n"}
            Join us on this captivating journey as we navigate the enigmatic
            territory of truth, technology, and the resonance of our
            multifaceted selves. Explore the boundless possibilities of media
            art and experience the profound impact of AI as it shapes our
            perceptions of truth, identity, and the complex narratives that
            intertwine them.
            {"\n\n"}
            <strong>Faculty:</strong>
            {"\n\n"}
            Manuela Naveau (AT){"\n"}
            Laurent Mignonneau (FR){"\n"}
            Fabricio Lamoncha (ES){"\n"}
            Michaela Ortner (AT){"\n"}
            Gertrude Hörlesberger (AT){"\n"}
          </p>
        </section>
        <section className={css.projectsListWrapper}>
          <h1>EXHIBITED WORKS</h1>
          <div className={css.projectsList}>
            {data.allMdx.nodes.map((node) => {
              if (node.frontmatter.location === "00-postcity") {
                return (
                  <Link to={node.fields.slug}>
                    <GatsbyImage
                      image={getImage(node.frontmatter.image_files[0])}
                      alt="A project"
                    />
                    <div
                      className={css.imageOverlay}
                      id={`${node.fields.slug.replace(/\//g, "")}`}
                    ></div>
                    <h4>{node.frontmatter.title}</h4>
                  </Link>
                )
              }
              return null
            })}
          </div>

          <h1>WORKS IN DEEP SPACE</h1>
          <div className={css.projectsList}>
            {data.allMdx.nodes.map((node) => {
              if (node.frontmatter.location === "01-deepspace") {
                return (
                  <Link to={node.fields.slug}>
                    <GatsbyImage
                      image={getImage(node.frontmatter.image_files[0])}
                      alt="A project"
                    />
                    <div
                      className={css.imageOverlay}
                      id={`${node.fields.slug.replace(/\//g, "")}`}
                    ></div>
                    <h4>{node.frontmatter.title}</h4>
                  </Link>
                )
              }
              return null
            })}
          </div>

          <h1>ADITIONAL PROJECTS</h1>
          <div className={css.projectsList}>
            {data.allMdx.nodes.map((node) => {
              if (node.frontmatter.location === "02-other") {
                return (
                  <Link to={node.fields.slug}>
                    <GatsbyImage
                      image={getImage(node.frontmatter.image_files[0])}
                      alt="A project"
                    />
                    <div
                      className={css.imageOverlay}
                      id={`${node.fields.slug.replace(/\//g, "")}`}
                    ></div>
                    <h4>{node.frontmatter.title}</h4>
                  </Link>
                )
              }
              return null
            })}
          </div>
        </section>
        <section className={css.exhibitionText}>
          <p>
            <h2>Exhibiting Artists:</h2>
            Ahmed Jamal (EGY){"\n"}
            Aizhan Saganayeva (KZ){"\n"}
            Alex Fallica (IT){"\n"}
            Behiye Erdemir (TR){"\n"}
            Bálint Budai (HU){"\n"}
            Danielius Marius Šermukšnis (LT){"\n"}
            Emma Silvana Tripaldi (IT){"\n"}
            Ghazal Hosseini (IR){"\n"}
            Hanif Haghtalab (IR){"\n"}
            Ingrid Graz (AT){"\n"}
            Jelena Mönch (DE){"\n"}
            Joann Lee (KR){"\n"}
            Katherine Romero Martinez (CO){"\n"}
            Katsuki Nogami (JP){"\n"}
            Kevin Blackistone (USA){"\n"}
            Linaá Pulido Barragán (CO){"\n"}
            Maria Konstantinova (RU){"\n"}
            Maria Orciuoli (IT){"\n"}
            Martina Pizzigoni (IT){"\n"}
            Mathias Gartner (AT){"\n"}
            Miguel Rangil (ES){"\n"}
            Razieh Kooshki (IR){"\n"}
            Rene Preuer (AT){"\n"}
            Salma Aly (EGY){"\n"}
            Simon Weckert (DE){"\n"}
            Smirna Kulenovic (BA){"\n"}
            Sofia Talanti (IT){"\n"}
            Till Schönwetter (DE){"\n"}
            Tomomi Watanabe (JP){"\n"}
            Viktória Angyal (HU){"\n"}
            Volkan Dinçer (TR){"\n"}
            Younggon Kim (KR){"\n"}
            Yuma Yanagisawa (JP){"\n"}
            {"\n\n"}
            <h2>Faculty:</h2>
            Manuela Naveau (AT){"\n"}
            Laurent Mignonneau (FR){"\n"}
            Fabricio Lamoncha (ES){"\n"}
            Michaela Ortner (AT){"\n"}
            Gertrude Hörlesberger (AT){"\n"}
            {"\n\n"}
            <h2>Production Team:</h2>
            <strong>Production Coordinator:</strong> Behiye Erdemir (TR){"\n"}
            <strong>Setup Assistant:</strong> Hanif Haghtalab (IR){"\n"}
            <strong>Graphics:</strong> Sofia Talanti (IT){"\n"}
            <strong>Folder Design:</strong> Viktória Angyal (HU){"\n"}
            <strong>Video Documentation:</strong> Linaá Pulido Barragán (CO)
            {"\n"}
            <strong>Photo Documentation:</strong> Emma Silvana Tripaldi (IT)
            {"\n"}
            <strong>Assistant Photo & PR:</strong> Martina Pizzigoni (IT), Alex
            Fallica (IT){"\n"}
            <strong>Web:</strong> Juan Pablo Linares Ceballos (CO){"\n"}
            <strong>PR (Social Media Strategy):</strong> Maria Orciuoli (IT)
            {"\n"}
          </p>
        </section>
      </main>
      <Footer></Footer>
    </>
  )
}

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          location
          image_files {
            childImageSharp {
              gatsbyImageData(
                width: 600
                aspectRatio: 0.75
                placeholder: BLURRED
                layout: CONSTRAINED
                formats: [AUTO, WEBP]
              )
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`
export default IndexPage

export const Head = () => <title>Resonating Selves</title>
