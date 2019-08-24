import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Layout } from 'src/components'
import { AboutLayout, AboutMe } from 'src/styles/pages/about.styled'

const About = ({ data }) => {
  return (
    <Layout>
      <AboutLayout>
        <Img fixed={data.avatar.childImageSharp.fixed} />
        <AboutMe>
          <h1>Photography as the way of life vision.</h1>
          <p>
            Sometimes we want to stop the time and just feel the moment. The moment when we are proud,
            happy, excited about achievements or in love...so no words needed. But what about pics, huh? :)
          </p>
          <p>Photography can freeze the moment so you can feel it again.</p>
          <p>
            Some of us can't see the beauty not only around ourselves but also inside our own.
            It doesn't matter what words you say to the person - you can't persuade him in that way.
          </p>
          <p>
            But if you just show those people how beautiful they are (through photos) - boom! You gonna open their eyes for the beauty.
          </p>
          <p>You gonna make them happier and more self-confident.</p>
          <p>
            When I realized what huge impact photography has on people I decided to make it my career all along with my passion.
          </p>
        </AboutMe>
      </AboutLayout>
    </Layout>
  )
}

export const query = graphql`
  query {
    avatar: file(absolutePath: { regex: "/elizabethseaside.png/" }){
      childImageSharp {
        fixed(height: 600, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default About

