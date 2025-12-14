import { useState, useEffect } from 'react'

function Gallery() {
  const [galleryImages, setGalleryImages] = useState([])
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isSmallMobile, setIsSmallMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1050)
      setIsTablet(window.innerWidth < 1200 && window.innerWidth >= 1050)
      setIsSmallMobile(window.innerWidth < 700)
    }
    
    let timeoutId
    const debouncedResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(checkScreenSize, 100)
    }
    
    checkScreenSize()
    window.addEventListener('resize', debouncedResize)
    
    return () => {
      window.removeEventListener('resize', debouncedResize)
      clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    // Static list of gallery images (since they're now in public folder)
    const images = [
      { src: '/assets/images/pages/gallery/1.jpg', alt: 'Gallery Image 1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/1-1.jpg', alt: 'Gallery Image 1-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/2.jpg', alt: 'Gallery Image 2', category: 'gallery' },
      { src: '/assets/images/pages/gallery/2-1.jpg', alt: 'Gallery Image 2-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/3-1.jpg', alt: 'Gallery Image 3-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/4.jpg', alt: 'Gallery Image 4', category: 'gallery' },
      { src: '/assets/images/pages/gallery/5.jpg', alt: 'Gallery Image 5', category: 'gallery' },
      { src: '/assets/images/pages/gallery/5-1.jpg', alt: 'Gallery Image 5-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/6.jpg', alt: 'Gallery Image 6', category: 'gallery' },
      { src: '/assets/images/pages/gallery/6-1.jpg', alt: 'Gallery Image 6-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/7.jpg', alt: 'Gallery Image 7', category: 'gallery' },
      { src: '/assets/images/pages/gallery/7-1.jpg', alt: 'Gallery Image 7-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/8.jpg', alt: 'Gallery Image 8', category: 'gallery' },
      { src: '/assets/images/pages/gallery/8-1.jpg', alt: 'Gallery Image 8-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/9.jpg', alt: 'Gallery Image 9', category: 'gallery' },
      { src: '/assets/images/pages/gallery/10.jpg', alt: 'Gallery Image 10', category: 'gallery' },
      { src: '/assets/images/pages/gallery/11-2.jpg', alt: 'Gallery Image 11-2', category: 'gallery' },
      { src: '/assets/images/pages/gallery/12.jpg', alt: 'Gallery Image 12', category: 'gallery' },
      { src: '/assets/images/pages/gallery/13.jpg', alt: 'Gallery Image 13', category: 'gallery' },
      { src: '/assets/images/pages/gallery/14.jpg', alt: 'Gallery Image 14', category: 'gallery' },
      { src: '/assets/images/pages/gallery/14-1.jpg', alt: 'Gallery Image 14-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/15.jpg', alt: 'Gallery Image 15', category: 'gallery' },
      { src: '/assets/images/pages/gallery/15-1.jpg', alt: 'Gallery Image 15-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/16.jpg', alt: 'Gallery Image 16', category: 'gallery' },
      { src: '/assets/images/pages/gallery/16-1.jpg', alt: 'Gallery Image 16-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/17-2.jpg', alt: 'Gallery Image 17-2', category: 'gallery' },
      { src: '/assets/images/pages/gallery/18-2.jpg', alt: 'Gallery Image 18-2', category: 'gallery' },
      { src: '/assets/images/pages/gallery/19-1.jpg', alt: 'Gallery Image 19-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/19-2.jpg', alt: 'Gallery Image 19-2', category: 'gallery' },
      { src: '/assets/images/pages/gallery/20.jpg', alt: 'Gallery Image 20', category: 'gallery' },
      { src: '/assets/images/pages/gallery/21.jpg', alt: 'Gallery Image 21', category: 'gallery' },
      { src: '/assets/images/pages/gallery/21-1.jpg', alt: 'Gallery Image 21-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/22-1.jpg', alt: 'Gallery Image 22-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/22-2.jpg', alt: 'Gallery Image 22-2', category: 'gallery' },
      { src: '/assets/images/pages/gallery/23-1.jpg', alt: 'Gallery Image 23-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/24-1.jpg', alt: 'Gallery Image 24-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/25-1.jpg', alt: 'Gallery Image 25-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/26-1.jpg', alt: 'Gallery Image 26-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/27.jpg', alt: 'Gallery Image 27', category: 'gallery' },
      { src: '/assets/images/pages/gallery/28-2.jpg', alt: 'Gallery Image 28-2', category: 'gallery' },
      { src: '/assets/images/pages/gallery/29.jpg', alt: 'Gallery Image 29', category: 'gallery' },
      { src: '/assets/images/pages/gallery/29-1.jpg', alt: 'Gallery Image 29-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/30-1.jpg', alt: 'Gallery Image 30-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/31-1.jpg', alt: 'Gallery Image 31-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/31-2.jpg', alt: 'Gallery Image 31-2', category: 'gallery' },
      { src: '/assets/images/pages/gallery/32.jpg', alt: 'Gallery Image 32', category: 'gallery' },
      { src: '/assets/images/pages/gallery/32-1.jpg', alt: 'Gallery Image 32-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/33.jpg', alt: 'Gallery Image 33', category: 'gallery' },
      { src: '/assets/images/pages/gallery/34-1.jpg', alt: 'Gallery Image 34-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/35-1.jpg', alt: 'Gallery Image 35-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/35-2.jpg', alt: 'Gallery Image 35-2', category: 'gallery' },
      { src: '/assets/images/pages/gallery/36.jpg', alt: 'Gallery Image 36', category: 'gallery' },
      { src: '/assets/images/pages/gallery/36-1.jpg', alt: 'Gallery Image 36-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/37.jpg', alt: 'Gallery Image 37', category: 'gallery' },
      { src: '/assets/images/pages/gallery/37-1.jpg', alt: 'Gallery Image 37-1', category: 'gallery' },
      { src: '/assets/images/pages/gallery/38-2.jpg', alt: 'Gallery Image 38-2', category: 'gallery' },
      { src: '/assets/images/pages/gallery/39.jpg', alt: 'Gallery Image 39', category: 'gallery' },
      { src: '/assets/images/pages/gallery/40.jpg', alt: 'Gallery Image 40', category: 'gallery' },
      { src: '/assets/images/pages/gallery/41.jpg', alt: 'Gallery Image 41', category: 'gallery' },
      { src: '/assets/images/pages/gallery/42.jpg', alt: 'Gallery Image 42', category: 'gallery' },
      { src: '/assets/images/pages/gallery/43.jpg', alt: 'Gallery Image 43', category: 'gallery' },
      { src: '/assets/images/pages/gallery/44.jpg', alt: 'Gallery Image 44', category: 'gallery' },
      { src: '/assets/images/pages/gallery/45.jpg', alt: 'Gallery Image 45', category: 'gallery' },
      { src: '/assets/images/pages/gallery/46.jpg', alt: 'Gallery Image 46', category: 'gallery' },
      { src: '/assets/images/pages/gallery/47.jpg', alt: 'Gallery Image 47', category: 'gallery' },
      { src: '/assets/images/pages/gallery/48.jpg', alt: 'Gallery Image 48', category: 'gallery' },
      { src: '/assets/images/pages/gallery/50.jpg', alt: 'Gallery Image 50', category: 'gallery' },
      { src: '/assets/images/pages/gallery/51.jpg', alt: 'Gallery Image 51', category: 'gallery' },
      { src: '/assets/images/pages/gallery/52.jpg', alt: 'Gallery Image 52', category: 'gallery' },
      { src: '/assets/images/pages/gallery/53.jpg', alt: 'Gallery Image 53', category: 'gallery' },
      { src: '/assets/images/pages/gallery/54.jpg', alt: 'Gallery Image 54', category: 'gallery' },
      { src: '/assets/images/pages/gallery/55.jpg', alt: 'Gallery Image 55', category: 'gallery' },
      { src: '/assets/images/pages/gallery/56.jpg', alt: 'Gallery Image 56', category: 'gallery' },
      { src: '/assets/images/pages/gallery/57.jpg', alt: 'Gallery Image 57', category: 'gallery' },
      { src: '/assets/images/pages/gallery/58.jpg', alt: 'Gallery Image 58', category: 'gallery' },
      { src: '/assets/images/pages/gallery/59.jpg', alt: 'Gallery Image 59', category: 'gallery' },
      { src: '/assets/images/pages/gallery/60.jpg', alt: 'Gallery Image 60', category: 'gallery' },
      { src: '/assets/images/pages/gallery/61.jpg', alt: 'Gallery Image 61', category: 'gallery' },
      { src: '/assets/images/pages/gallery/62.jpg', alt: 'Gallery Image 62', category: 'gallery' },
      { src: '/assets/images/pages/gallery/63.jpg', alt: 'Gallery Image 63', category: 'gallery' },
      { src: '/assets/images/pages/gallery/64.jpg', alt: 'Gallery Image 64', category: 'gallery' },
      { src: '/assets/images/pages/gallery/65.jpg', alt: 'Gallery Image 65', category: 'gallery' },
      { src: '/assets/images/pages/gallery/68.jpg', alt: 'Gallery Image 68', category: 'gallery' },
      { src: '/assets/images/pages/gallery/71.jpg', alt: 'Gallery Image 71', category: 'gallery' },
      { src: '/assets/images/pages/gallery/72.jpg', alt: 'Gallery Image 72', category: 'gallery' },
      { src: '/assets/images/pages/gallery/74.jpg', alt: 'Gallery Image 74', category: 'gallery' },
      { src: '/assets/images/pages/gallery/75.jpg', alt: 'Gallery Image 75', category: 'gallery' },
      { src: '/assets/images/pages/gallery/76.jpg', alt: 'Gallery Image 76', category: 'gallery' },
      { src: '/assets/images/pages/gallery/77.jpg', alt: 'Gallery Image 77', category: 'gallery' },
      { src: '/assets/images/pages/gallery/78.jpg', alt: 'Gallery Image 78', category: 'gallery' },
      { src: '/assets/images/pages/gallery/79.jpg', alt: 'Gallery Image 79', category: 'gallery' },
      { src: '/assets/images/pages/gallery/80.jpg', alt: 'Gallery Image 80', category: 'gallery' },
      { src: '/assets/images/pages/gallery/81.jpg', alt: 'Gallery Image 81', category: 'gallery' },
      { src: '/assets/images/pages/gallery/82.jpg', alt: 'Gallery Image 82', category: 'gallery' },
      { src: '/assets/images/pages/gallery/83.jpg', alt: 'Gallery Image 83', category: 'gallery' },
      { src: '/assets/images/pages/gallery/84.jpg', alt: 'Gallery Image 84', category: 'gallery' },
      { src: '/assets/images/pages/gallery/85.jpg', alt: 'Gallery Image 85', category: 'gallery' },
      { src: '/assets/images/pages/gallery/86.jpg', alt: 'Gallery Image 86', category: 'gallery' },
      { src: '/assets/images/pages/gallery/88.jpg', alt: 'Gallery Image 88', category: 'gallery' },
      { src: '/assets/images/pages/gallery/89.jpg', alt: 'Gallery Image 89', category: 'gallery' },
      { src: '/assets/images/pages/gallery/91.jpg', alt: 'Gallery Image 91', category: 'gallery' },
      { src: '/assets/images/pages/gallery/92.jpg', alt: 'Gallery Image 92', category: 'gallery' },
      { src: '/assets/images/pages/gallery/93.jpg', alt: 'Gallery Image 93', category: 'gallery' },
      { src: '/assets/images/pages/gallery/94.jpg', alt: 'Gallery Image 94', category: 'gallery' },
      { src: '/assets/images/pages/gallery/95.jpg', alt: 'Gallery Image 95', category: 'gallery' },
      { src: '/assets/images/pages/gallery/96.jpg', alt: 'Gallery Image 96', category: 'gallery' },
      { src: '/assets/images/pages/gallery/98.jpg', alt: 'Gallery Image 98', category: 'gallery' },
      { src: '/assets/images/pages/gallery/99.jpg', alt: 'Gallery Image 99', category: 'gallery' },
      { src: '/assets/images/pages/gallery/101.jpg', alt: 'Gallery Image 101', category: 'gallery' },
      { src: '/assets/images/pages/gallery/102.jpg', alt: 'Gallery Image 102', category: 'gallery' },
      { src: '/assets/images/pages/gallery/103.jpg', alt: 'Gallery Image 103', category: 'gallery' },
      { src: '/assets/images/pages/gallery/104.jpg', alt: 'Gallery Image 104', category: 'gallery' },
      { src: '/assets/images/pages/gallery/105.jpg', alt: 'Gallery Image 105', category: 'gallery' },
      { src: '/assets/images/pages/gallery/106.jpg', alt: 'Gallery Image 106', category: 'gallery' },
      { src: '/assets/images/pages/gallery/107.jpg', alt: 'Gallery Image 107', category: 'gallery' },
      { src: '/assets/images/pages/gallery/108.jpg', alt: 'Gallery Image 108', category: 'gallery' },
      { src: '/assets/images/pages/gallery/109.jpg', alt: 'Gallery Image 109', category: 'gallery' },
      { src: '/assets/images/pages/gallery/110.jpg', alt: 'Gallery Image 110', category: 'gallery' }
    ]
    
    setGalleryImages(images)
  }, [])

  return (
    <div>
      {/* Section Title */}
      <section style={{
        backgroundColor: 'white',
        padding: isMobile ? '40px 20px 0px 20px' : '60px 20px 0px 20px'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{
            fontSize: isSmallMobile ? '24px' : isTablet ? '32px' : isMobile ? '30px' : '36px',
            fontWeight: '700',
            color: '#000',
            marginBottom: '16px',
            lineHeight: '1.2',
            borderBottom: '3px solid #085c97',
            paddingBottom: '12px',
            display: 'inline-block',
            transition: 'font-size 0.3s ease'
          }}>
            Three Decades of Impact
          </h1>
          <p style={{
            fontSize: isSmallMobile ? '14px' : isTablet ? '15px' : isMobile ? '15px' : '16px',
            color: '#6b7280',
            marginTop: '20px',
            maxWidth: '600px',
            margin: '20px auto 0 auto',
            transition: 'font-size 0.3s ease'
          }}>
            Explore our journey through images showcasing 30 years of humanitarian work, education initiatives, health programs, and community development across Nepal and South Asia.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{
        backgroundColor: 'white',
        padding: isMobile ? '40px 20px' : '60px 20px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          
          {/* Image Count */}
          <div style={{
            textAlign: 'center',
            marginBottom: isMobile ? '30px' : '40px'
          }}>
            <p style={{
              fontSize: isSmallMobile ? '16px' : isTablet ? '17px' : isMobile ? '17px' : '18px',
              color: '#085c97',
              fontWeight: '500',
              transition: 'font-size 0.3s ease'
            }}>
              {galleryImages.length} Images
            </p>
          </div>
          
          {/* Image Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isSmallMobile ? '1fr' : isMobile ? 'repeat(auto-fit, minmax(250px, 1fr))' : 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: isMobile ? '15px' : '20px',
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
                    height: isSmallMobile ? '200px' : isMobile ? '220px' : '250px',
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
                  padding: isMobile ? '15px 12px 12px 12px' : '20px 15px 15px 15px',
                  transform: 'translateY(100%)',
                  transition: 'transform 0.3s ease'
                }}
                className="image-overlay"
                >
                  <h3 style={{
                    fontSize: isSmallMobile ? '14px' : isMobile ? '15px' : '16px',
                    fontWeight: '600',
                    margin: 0,
                    marginBottom: '5px',
                    transition: 'font-size 0.3s ease'
                  }}>
                    {image.alt}
                  </h3>
                  <span style={{
                    fontSize: isSmallMobile ? '12px' : isMobile ? '13px' : '14px',
                    opacity: 0.9,
                    textTransform: 'capitalize',
                    transition: 'font-size 0.3s ease'
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
              <p style={{ fontSize: '14px' }}>Add images to /assets/images/pages/gallery/ folder</p>
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
