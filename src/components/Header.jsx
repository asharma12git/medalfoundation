import { Link } from 'react-router-dom'

function Header() {
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
          height: '72px' 
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Company Logo */}
            <div style={{
              width: '200px',
              height: '50px',
              backgroundImage: 'url(/src/assets/images/shared/logo.jpg)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'left center'
            }} />
          </div>

          {/* Navigation */}
          <nav style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '40px'
          }}>
            <Link to="/" style={{ 
              fontSize: '16px', 
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
              fontSize: '16px', 
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
            <a href="#members" style={{ 
              fontSize: '16px', 
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
            </a>
            <a href="#projects" style={{ 
              fontSize: '16px', 
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
            </a>
            <a href="#relief" style={{ 
              fontSize: '16px', 
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
            </a>
            <a href="#gallery" style={{ 
              fontSize: '16px', 
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
            </a>
          </nav>

          {/* CTA Button */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button style={{
              padding: '12px 24px',
              fontSize: '14px',
              fontWeight: '500',
              color: 'white',
              background: 'linear-gradient(135deg, #085c97 0%, #0a6bb0 100%)',
              border: 'none',
              borderRadius: '12px',
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
              Get Involved
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header