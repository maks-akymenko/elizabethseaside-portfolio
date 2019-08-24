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
              <Img fluid={node.backgroundPhoto.fluid} imgStyle={{
                transition: 'all 0.3s linear',
              }} />
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
          fluid(quality: 100, maxWidth: 600, maxHeight: 600) {
            ...GatsbyContentfulFluid_withWebp
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
