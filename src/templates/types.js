import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { BackButton, Layout } from 'src/components'
import { Heading, Photoshoot, PhotoshootContainer, PhotoshootTitle } from './types.styled'

const TypesTemplate = ({ data: { contentfulTypes } }) => {
  console.log(contentfulTypes);
  return (
    <Layout>
      <BackButton />
      <Heading>{contentfulTypes.photoshootType}</Heading>
      <PhotoshootContainer>
        {contentfulTypes.listOfPhotoshoots.map(photoshoot => (
          <Photoshoot key={photoshoot.id}>
            <Link to={`/${photoshoot.slug}`}>
              <PhotoshootTitle>{photoshoot.title}</PhotoshootTitle>
              <Img fixed={photoshoot.backgroundPhoto.fixed}
                style={{ boxShadow: '0px 3px 10px 0px rgba(0,0,0,0.45)', }}
                imgStyle={{
                  borderRadius: '2px',
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
        fixed(height: 350, quality: 95) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
}
`
export default TypesTemplate
