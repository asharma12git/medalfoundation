import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1050)
      setIsTablet(window.innerWidth < 1250 && window.innerWidth >= 1050)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <header style={{ 
      backgroundColor: 'white', 

      borderBottom: '1px solid #f3f4f6',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '0 20px' 
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          height: '72px',
          position: 'relative'
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{
              width: isMobile ? '150px' : isTablet ? '170px' : '200px',
              height: '50px',
              backgroundImage: 'url(/assets/images/shared/logo.jpg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left center',
              cursor: 'pointer',
              display: 'block'
            }} />
          </div>

          {/* Desktop Navigation */}
          <nav style={{ 
            display: isMobile ? 'none' : 'flex',
            alignItems: 'center', 
            gap: isTablet ? '20px' : '40px'
          }}>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ 
              fontSize: isTablet ? '14px' : '16px', 
              fontWeight: '500', 
              color: '#6b7280', 
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              padding: '8px 0'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#085c97';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#6b7280';
              e.target.style.transform = 'translateY(0)';
            }}>
              Home
            </Link>
            <Link to="/about" style={{ 
              fontSize: isTablet ? '14px' : '16px', 
              fontWeight: '500', 
              color: '#6b7280', 
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              padding: '8px 0'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#085c97';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#6b7280';
              e.target.style.transform = 'translateY(0)';
            }}>
              About
            </Link>
            <Link to="/members" style={{ 
              fontSize: isTablet ? '14px' : '16px', 
              fontWeight: '500', 
              color: '#6b7280', 
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              padding: '8px 0'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#085c97';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#6b7280';
              e.target.style.transform = 'translateY(0)';
            }}>
              Members
            </Link>
            <Link to="/projects" style={{ 
              fontSize: isTablet ? '14px' : '16px', 
              fontWeight: '500', 
              color: '#6b7280', 
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              padding: '8px 0'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#085c97';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#6b7280';
              e.target.style.transform = 'translateY(0)';
            }}>
              Projects & Collaborators
            </Link>
            <Link to="/relief" style={{ 
              fontSize: isTablet ? '14px' : '16px', 
              fontWeight: '500', 
              color: '#6b7280', 
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              padding: '8px 0'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#085c97';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#6b7280';
              e.target.style.transform = 'translateY(0)';
            }}>
              Relief and Humanitarian Work
            </Link>
            <Link to="/gallery" style={{ 
              fontSize: isTablet ? '14px' : '16px', 
              fontWeight: '500', 
              color: '#6b7280', 
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              padding: '8px 0'
            }}
            onMouseEnter={(e) => {
              e.target.style.color = '#085c97';
              e.target.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.color = '#6b7280';
              e.target.style.transform = 'translateY(0)';
            }}>
              Gallery
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: isMobile ? 'flex' : 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              fontSize: '24px',
              color: '#085c97'
            }}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>

          {/* Desktop CTA Button */}
          <div style={{ 
            display: isMobile ? 'none' : 'flex',
            alignItems: 'center' 
          }}>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <button style={{
                padding: '12px 24px',
                fontSize: '14px',
                fontWeight: '500',
                color: 'white',
                background: 'linear-gradient(135deg, #085c97 0%, #0a6bb0 100%)',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 12px rgba(8, 92, 151, 0.3)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 20px rgba(8, 92, 151, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 12px rgba(8, 92, 151, 0.3)';
              }}>
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && isMobile && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: 'white',
              borderBottom: '1px solid #f3f4f6',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              zIndex: 50
            }}>
              <nav style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px'
              }}>
                <Link to="/" 
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  style={{ 
                    fontSize: '16px', 
                    fontWeight: '500', 
                    color: '#6b7280', 
                    textDecoration: 'none',
                    padding: '12px 0',
                    borderBottom: '1px solid #f3f4f6'
                  }}>
                  Home
                </Link>
                <Link to="/about" 
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    fontSize: '16px', 
                    fontWeight: '500', 
                    color: '#6b7280', 
                    textDecoration: 'none',
                    padding: '12px 0',
                    borderBottom: '1px solid #f3f4f6'
                  }}>
                  About
                </Link>
                <Link to="/members" 
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    fontSize: '16px', 
                    fontWeight: '500', 
                    color: '#6b7280', 
                    textDecoration: 'none',
                    padding: '12px 0',
                    borderBottom: '1px solid #f3f4f6'
                  }}>
                  Members
                </Link>
                <Link to="/projects" 
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    fontSize: '16px', 
                    fontWeight: '500', 
                    color: '#6b7280', 
                    textDecoration: 'none',
                    padding: '12px 0',
                    borderBottom: '1px solid #f3f4f6'
                  }}>
                  Projects & Collaborators
                </Link>
                <Link to="/relief" 
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    fontSize: '16px', 
                    fontWeight: '500', 
                    color: '#6b7280', 
                    textDecoration: 'none',
                    padding: '12px 0',
                    borderBottom: '1px solid #f3f4f6'
                  }}>
                  Relief and Humanitarian Work
                </Link>
                <Link to="/gallery" 
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    fontSize: '16px', 
                    fontWeight: '500', 
                    color: '#6b7280', 
                    textDecoration: 'none',
                    padding: '12px 0',
                    borderBottom: '1px solid #f3f4f6'
                  }}>
                  Gallery
                </Link>
                <Link to="/contact" 
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    display: 'inline-block',
                    marginTop: '16px',
                    textDecoration: 'none'
                  }}>
                  <button style={{
                    padding: '12px 24px',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: 'white',
                    background: 'linear-gradient(135deg, #085c97 0%, #0a6bb0 100%)',
                    border: 'none',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    width: '100%',
                    boxShadow: '0 4px 12px rgba(8, 92, 151, 0.3)'
                  }}>
                    Contact Us
                  </button>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header