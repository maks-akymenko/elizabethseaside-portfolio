import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { InstagramGrid, InstagramLink } from 'src/styles/pages/instagram.styled'
import { Layout } from 'src/components'

const Instagram = ({ data: { instagram: { nodes } } }) => {
  console.log(nodes);
  return (
    <Layout>
      <InstagramGrid>
        {nodes.map(post => (
          <a target="_blank" rel="nooperner noreferrer" href={`https://www.instagram.com/p/${post.id}/`} key={post.id}>
            <Img fluid={post.localFile.childImageSharp.fluid} imgStyle={{
              transition: 'all 0.3s linear',
            }} />
          </a>
        ))}
      </InstagramGrid>
      <InstagramLink>
        Did you like it?
        <a target="_blank" rel="nooperner noreferrer" href="https://www.instagram.com/elizabethseaside_photography/">
          See more on Instagram
        </a>
      </InstagramLink>
    </Layout>
  )
}

export default Instagram

export const query = graphql`
  query Instagram {
    instagram: allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 30) {
      nodes {
        id
        localFile {
          childImageSharp {
            fluid(quality: 100, maxWidth: 600, maxHeight: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
