import { useState, useEffect } from 'react'

function Gallery() {
  const [galleryImages, setGalleryImages] = useState([])

  useEffect(() => {
    // Dynamically import all images from the gallery folder
    const importImages = async () => {
      const imageModules = import.meta.glob('/src/assets/images/pages/gallery/*', { eager: true })
      
      const images = Object.entries(imageModules).map(([path, module]) => {
        // Extract filename without extension for alt text
        const filename = path.split('/').pop().split('.')[0]
        const altText = filename.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
        
        return {
          src: module.default || path,
          alt: altText,
          category: 'gallery' // You can enhance this to detect category from filename if needed
        }
      })
      
      setGalleryImages(images)
    }

    importImages()
  }, [])

  return (
    <div>
      {/* Section Title */}
      <section style={{
        backgroundColor: 'white',
        padding: '60px 20px 0px 20px'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#000',
            marginBottom: '16px',
            lineHeight: '1.2',
            borderBottom: '3px solid #085c97',
            paddingBottom: '12px',
            display: 'inline-block'
          }}>
            Three Decades of Impact
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            marginTop: '20px',
            maxWidth: '600px',
            margin: '20px auto 0 auto'
          }}>
            Explore our journey through images showcasing 30 years of humanitarian work, education initiatives, health programs, and community development across Nepal and South Asia.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{
        backgroundColor: 'white',
        padding: '60px 20px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          
          {/* Image Count */}
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <p style={{
              fontSize: '18px',
              color: '#085c97',
              fontWeight: '500'
            }}>
              {galleryImages.length} Images
            </p>
          </div>
          
          {/* Image Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            padding: '0'
          }}>
            {galleryImages.map((image, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(8, 92, 151, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)';
                }}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                
                {/* Image Overlay */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
                  color: 'white',
                  padding: '20px 15px 15px 15px',
                  transform: 'translateY(100%)',
                  transition: 'transform 0.3s ease'
                }}
                className="image-overlay"
                >
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    margin: 0,
                    marginBottom: '5px'
                  }}>
                    {image.alt}
                  </h3>
                  <span style={{
                    fontSize: '14px',
                    opacity: 0.9,
                    textTransform: 'capitalize'
                  }}>
                    Medal Foundation Gallery
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {galleryImages.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              color: '#6b7280'
            }}>
              <p style={{ fontSize: '18px', marginBottom: '10px' }}>No images found in gallery</p>
              <p style={{ fontSize: '14px' }}>Add images to /src/assets/images/pages/gallery/ folder</p>
            </div>
          )}
          
        </div>
      </section>

      {/* CSS for hover effects */}
      <style jsx>{`
        .image-overlay {
          transform: translateY(100%);
        }
        
        div:hover .image-overlay {
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}

export default Gallery
