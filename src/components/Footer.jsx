import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth <= 1024)
  const [isIpadAir, setIsIpadAir] = useState(window.innerWidth >= 768 && window.innerWidth <= 850)

  useEffect(() => {
    let timeoutId
    const handleResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768)
        setIsTablet(window.innerWidth >= 768 && window.innerWidth <= 1024)
        setIsIpadAir(window.innerWidth >= 768 && window.innerWidth <= 850)
      }, 100)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(timeoutId)
    }
  }, [])
  return (
    <footer style={{ 
      backgroundColor: '#f8fafb', 
      borderTop: '1px solid rgba(8, 92, 151, 0.1)',
      padding: '24px 20px'
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: isMobile ? 'center' : isIpadAir ? 'space-around' : 'space-between',
        alignItems: 'center',
        gap: isMobile ? '24px' : '20px',
        transition: 'all 0.3s ease'
      }}>
        {/* Logo and Copyright */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '8px',
          alignItems: isMobile ? 'center' : 'flex-start',
          transition: 'all 0.3s ease'
        }}>
          <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{
            width: isMobile ? '150px' : '200px',
            height: '50px',
            backgroundImage: 'url(/src/assets/images/shared/logo.jpg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            cursor: 'pointer',
            display: 'block',
            transition: 'all 0.3s ease'
          }} />
          <p style={{ 
            fontSize: '14px', 
            color: '#9ca3af',
            margin: 0,
            textAlign: isMobile ? 'center' : 'left',
            transition: 'all 0.3s ease'
          }}>
            © 2025 All rights reserved.
          </p>
        </div>

        {/* Vertical Divider */}
        {!isMobile && (
          <div style={{
            width: '1px',
            height: '60px',
            backgroundColor: 'rgba(8, 92, 151, 0.2)',
            transition: 'all 0.3s ease'
          }} />
        )}

        {/* Contact Information */}
        <div style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '20px' : isIpadAir ? '24px' : '32px', 
          alignItems: isMobile ? 'center' : 'start',
          textAlign: isMobile ? 'center' : 'left',
          transition: 'all 0.3s ease'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#085c97' }}>Address</span>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>Kathmandu, Nepal</span>
          </div>

          {/* Vertical Divider */}
          {!isMobile && (
            <div style={{
              width: '1px',
              height: '50px',
              backgroundColor: 'rgba(8, 92, 151, 0.2)',
              alignSelf: 'center'
            }} />
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#085c97' }}>Phone</span>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>+977-1-9841918287</span>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>+977-1-9851026241</span>
          </div>

          {/* Vertical Divider */}
          {!isMobile && (
            <div style={{
              width: '1px',
              height: '50px',
              backgroundColor: 'rgba(8, 92, 151, 0.2)',
              alignSelf: 'center'
            }} />
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#085c97' }}>Emails</span>
            <a href="mailto:info@medalfoundation.org" style={{ 
              fontSize: '14px', 
              color: '#085c97', 
              textDecoration: 'none'
            }}>
              info@medalfoundation.org
            </a>
            <a href="mailto:ravibaralfilms@gmail.com" style={{ 
              fontSize: '14px', 
              color: '#085c97', 
              textDecoration: 'none'
            }}>
              ravibaralfilms@gmail.com
            </a>
            <a href="mailto:moran.edu.fund@fartooyoung.org" style={{ 
              fontSize: '14px', 
              color: '#085c97', 
              textDecoration: 'none'
            }}>
              moran.edu.fund@fartooyoung.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer