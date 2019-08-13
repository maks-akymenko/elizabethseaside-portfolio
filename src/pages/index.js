import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image'

import { Layout } from 'src/components'

import { Grid, PhotoshootTitle, PhotoshootType } from 'src/styles/pages/index.styled.js'

const index = ({ data: { allContentfulTypes: { edges } } }) => {
  console.log(edges);
  return (
    <Layout>
      <Grid>
        {edges.map(({ node }) => (
          node.photoshootType && (
            <PhotoshootType key={node.id} to={`/${node.slug}`}>
              <Img fluid={node.backgroundPhoto.fluid} />
              <PhotoshootTitle>{node.photoshootType}</PhotoshootTitle>
            </PhotoshootType>
          )
        ))}
      </Grid>
    </Layout>
  )
}

export const query = graphql`
{
  allContentfulTypes {
    edges {
      node {
        backgroundPhoto {
          fluid(maxWidth: 1600, maxHeight: 1600) {
            ...GatsbyContentfulFluid
          }
        }
        photoshootType
        id
        slug
      }
    }
  }
}
`

export default index;
