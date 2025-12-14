import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Hero() {
  const navigate = useNavigate()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <section style={{ 
      backgroundColor: 'white', 
      padding: isMobile ? '20px 16px 40px 16px' : '40px 20px 60px 20px', 
      textAlign: 'center' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-block',
          padding: isMobile ? '6px 12px' : '8px 16px',
          fontSize: isMobile ? '12px' : '14px',
          color: '#666',
          backgroundColor: '#eeeeee',
          borderRadius: '20px',
          marginBottom: isMobile ? '24px' : '32px'
        }}>
          Making a difference, one step at a time
        </div>

        {/* Main heading */}
        <h1 style={{
          fontSize: isMobile ? '24px' : '28px',
          fontWeight: '400',
          marginBottom: '16px',
          lineHeight: '1.2'
        }}>
          <span style={{ color: 'black' }}>Our </span>
          <span style={{ fontWeight: '500', color: '#085c97' }}>Mission</span>
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: isMobile ? '14px' : '16px',
          fontWeight: '500',
          color: '#666',
          marginBottom: isMobile ? '24px' : '32px',
          maxWidth: '800px',
          margin: `0 auto ${isMobile ? '24px' : '32px'} auto`,
          lineHeight: '1.6',
          padding: isMobile ? '0 8px' : '0'
        }}>
          MEDAL was established in 1993 and strives to empower communities through education, awareness, and humanitarian aid. Our core mission is to promote social justice, enhance quality of life, foster sustainable development, and respond to humanitarian crises.
        </p>

        {/* Favicon Icon */}
        <div style={{
          textAlign: 'center',
          marginBottom: isMobile ? '20px' : '24px'
        }}>
          <img 
            src="/src/assets/images/shared/favicon.png" 
            alt="Medal Foundation Icon" 
            style={{
              width: isMobile ? '80px' : '120px',
              height: isMobile ? '80px' : '120px',
              display: 'block',
              margin: '0 auto'
            }} 
          />
        </div>

        {/* About Foundation Button */}
        <div style={{ textAlign: 'center' }}>
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
            e.target.style.transform = 'translateY(-2px)'
            e.target.style.boxShadow = '0 8px 20px rgba(8, 92, 151, 0.4)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 4px 12px rgba(8, 92, 151, 0.3)'
          }}
          onClick={() => navigate('/about')}>
            About the Foundation
          </button>
        </div>

      </div>
    </section>
  )
}

export default Hero
