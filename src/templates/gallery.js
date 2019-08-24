import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Carousel, { Modal, ModalGateway } from 'react-images'
import Masonry from 'react-masonry-component';
import { BackButton, Layout } from 'src/components'
import { Heading, ImageBlock } from './gallery.styled'


const GalleryTemplate = ({ data: { contentfulImageGallery } }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0)

  const closeModal = () => setModalIsOpen(false)
  const openModal = (imageIndex) => {
    setModalCurrentIndex(imageIndex)
    setModalIsOpen(true)
  }

  const masonryOptions = {
    isFitWidth: true,
  }

  return (
    <Layout>
      <BackButton />
      <Heading>{contentfulImageGallery.title}</Heading>
      <Masonry options={masonryOptions} style={{ margin: '0 auto' }}>
        {contentfulImageGallery.gallery.map((image, index) => (
          <ImageBlock key={image.fixed.src + Math.random()} onClick={() => openModal(index)}>
            <Img key={image.fixed.src} fixed={image.fixed} />
          </ImageBlock>
        ))}
      </Masonry>
      {ModalGateway && (
        <ModalGateway>
          {modalIsOpen && (
            <Modal
              onClose={closeModal}
              styles={{
                blanket: base => ({
                  ...base,
                  backgroundColor: 'rgba(0, 0, 0, 0.95)',
                  zIndex: 900,
                }),
                dialog: base => ({ ...base, width: '100%' }),
                positioner: base => ({ ...base, zIndex: 901 }),
              }}
            >
              <Carousel
                views={contentfulImageGallery.gallery.map(({ fluid }) => ({
                  source: fluid.src,
                }))}
                currentIndex={modalCurrentIndex}
                components={{ FooterCount: () => null }}
                styles={{
                  view: base => ({
                    ...base,
                    overflow: 'hidden',
                    objectFit: 'contain',
                    '& > img': {
                      maxHeight: '75vh',
                      height: 'auto',
                      width: 'auto',
                      margin: '0 auto',
                    },
                  }),
                }}
              />
            </Modal>
          )}
        </ModalGateway>
      )}
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulImageGallery(slug: { eq: $slug }) {
      title
      gallery {
        fixed(width: 300, quality: 95) {
          ...GatsbyContentfulFixed
        }
        fluid {
          ...GatsbyContentfulFluid
          src
        }
      }
    }
}
`
export default GalleryTemplate
