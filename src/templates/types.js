import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Layout } from 'src/components'
import { Heading, Photoshoot, PhotoshootContainer, PhotoshootTitle } from './types.styled'

const TypesTemplate = ({ data: { contentfulTypes } }) => {
  console.log(contentfulTypes);
  return (
    <Layout>
      <Heading>{contentfulTypes.photoshootType}</Heading>
      <PhotoshootContainer>
        {contentfulTypes.listOfPhotoshoots.map(photoshoot => (
          <Photoshoot key={photoshoot.id}>
            <Link to={`/${photoshoot.slug}`}>
              <PhotoshootTitle>{photoshoot.title}</PhotoshootTitle>
              <Img fixed={photoshoot.backgroundPhoto.fixed} imgStyle={{
                borderRadius: '10px',
              }} />
            </Link>
          </Photoshoot>
        ))}
      </PhotoshootContainer>
    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
  contentfulTypes(slug: { eq: $slug }) {
    photoshootType
    listOfPhotoshoots {
      id
      title
      slug
      backgroundPhoto {
        fixed(height: 500, quality: 95) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
}
`
export default TypesTemplate
