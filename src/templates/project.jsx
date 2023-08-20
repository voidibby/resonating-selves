import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import * as css from "../assets/styles/project.module.scss"


const Project = ({ data }) => {
  /*
  const project = data.mdx
  console.log(data)
  return (
    <div>
      <h1>{project.frontmatter.title}</h1>
      <h3>{project.frontmatter.artist}</h3>
        <p>{children}</p>
    </div>
  )
  */
 

}
/*
export const query = graphql`
  query MyQuery($id: String!) {
    mdx(id: { eq: $id }) {
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
      body
    }
  }
`
*/
export default Project
