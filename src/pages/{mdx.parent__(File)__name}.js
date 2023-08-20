import * as React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as css from "../assets/styles/project.module.scss"

const Project = ({ data, children }) => {
  const allMdxNodes = data.allMdx.nodes
  const currentPostIndex = allMdxNodes.findIndex(
    (node) => node.id === data.mdx.id
  )
  const prevPost = allMdxNodes[currentPostIndex - 1]
  const nextPost = allMdxNodes[currentPostIndex + 1]
  return (
    <>
      <main className={css.projectContainer}>
        <GatsbyImage
          image={getImage(data.mdx.frontmatter.image_files[0])}
          className={css.projectImageWrapper}
          imgClassName={css.projectImage}
          alt="A project"
        />
        <div className={css.projectDetails}>
          <h1>{data.mdx.frontmatter.title}</h1>
          <h3>{data.mdx.frontmatter.artist}</h3>
          {children}
        </div>
        <div className={css.homeSign}>
          <Link to={`../#${data.mdx.fields.slug.replace(/\//g, "")}`}>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4497 4.44975L4.55025 15.3492M4.55025 4.44975L15.4497 15.3492" />
            </svg>
          </Link>
        </div>
        <div className={css.navigationArrows}>
          {prevPost && (
            <Link to={prevPost.fields.slug}>
              <svg
                className={css.prevArrow}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 0L6.99558 3.00442L11.8667 7.87555H0V12.1244L11.8667 12.1244L6.99558 16.9956L10 20L20 10L10 0Z" />
              </svg>
            </Link>
          )}

          {nextPost && (
            <Link to={nextPost.fields.slug}>
              <svg
                className={css.nextArrow}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 0L6.99558 3.00442L11.8667 7.87555H0V12.1244L11.8667 12.1244L6.99558 16.9956L10 20L20 10L10 0Z" />
              </svg>
            </Link>
          )}
        </div>
        <Link></Link>
      </main>
    </>
  )
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        artist
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
    allMdx(sort: { frontmatter: { location: ASC } }) {
      nodes {
        id
        fields {
          slug
        }
      }
    }
  }
`

export default Project

export const Head = ({ data }) => (
  <>
    <title>Resonating Selves | {data.mdx.frontmatter.title}</title>
    <meta name="description" content="Hello World" />
  </>
)
