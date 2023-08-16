import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import * as css from "../assets/styles/index.module.scss"

const IndexPage = () => {
  return (
    <>
      <Header></Header>
      <main>
        <div className={css.exhibitionText}>
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
          </p>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
