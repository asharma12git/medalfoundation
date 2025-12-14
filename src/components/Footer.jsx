import { Link } from 'react-router-dom'

function Footer() {
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
        flexDirection: window.innerWidth < 768 ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: window.innerWidth < 768 ? 'center' : 'center',
        gap: window.innerWidth < 768 ? '24px' : '0'
      }}>
        {/* Logo and Copyright */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '8px',
          alignItems: window.innerWidth < 768 ? 'center' : 'flex-start'
        }}>
          <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{
            width: window.innerWidth < 640 ? '150px' : '200px',
            height: '50px',
            backgroundImage: 'url(/src/assets/images/shared/logo.jpg)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            cursor: 'pointer',
            display: 'block'
          }} />
          <p style={{ 
            fontSize: '14px', 
            color: '#9ca3af',
            margin: 0,
            textAlign: window.innerWidth < 768 ? 'center' : 'left'
          }}>
            © 2025 All rights reserved.
          </p>
        </div>

        {/* Contact Information */}
        <div style={{ 
          display: 'flex', 
          flexDirection: window.innerWidth < 768 ? 'column' : 'row',
          gap: window.innerWidth < 768 ? '20px' : '32px', 
          alignItems: window.innerWidth < 768 ? 'center' : 'start',
          textAlign: window.innerWidth < 768 ? 'center' : 'left'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#085c97' }}>Address</span>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>Kathmandu, Nepal</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{ fontSize: '14px', fontWeight: '600', color: '#085c97' }}>Phone</span>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>+977-1-9841918287</span>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>+977-1-9851026241</span>
          </div>
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