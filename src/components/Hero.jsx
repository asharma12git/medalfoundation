function Hero() {
  return (
    <section style={{ 
      backgroundColor: 'white', 
      padding: '40px 20px 60px 20px', 
      textAlign: 'center' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-block',
          padding: '8px 16px',
          fontSize: '14px',
          color: '#666',
          backgroundColor: '#f5f5f5',
          borderRadius: '20px',
          marginBottom: '32px'
        }}>
          Making a difference, one step at a time
        </div>

        {/* Main heading */}
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: '400',
          marginBottom: '24px',
          lineHeight: '1.2'
        }}>
          <span style={{ color: 'black' }}>Our </span>
          <span style={{ fontWeight: '500', color: '#085c97' }}>Mission</span>
        </h1>

        {/* Subheading */}
        <p style={{
          fontSize: '16px',
          fontWeight: '500',
          color: '#666',
          marginBottom: '32px',
          maxWidth: '800px',
          margin: '0 auto 32px auto',
          lineHeight: '1.6'
        }}>
          Media Alert and Relief Foundation was established in 1993 and strives to empower communities through education, awareness, and humanitarian aid. Our core mission is to promote social justice, enhance quality of life, foster sustainable development, and respond to humanitarian crises.
        </p>

        {/* About Foundation Button */}
        <div style={{ textAlign: 'center' }}>
          <button style={{
            padding: '16px 32px',
            fontSize: '16px',
            fontWeight: '500',
            color: 'white',
            backgroundColor: 'rgba(8, 92, 151, 0.9)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '16px',
            cursor: 'pointer',
            transition: 'all 0.4s ease',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-4px)'
            e.target.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.5)'
            e.target.style.backgroundColor = 'rgba(8, 92, 151, 0.95)'
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)'
            e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.4)'
            e.target.style.backgroundColor = 'rgba(8, 92, 151, 0.9)'
          }}>
            About the Foundation
          </button>
        </div>

      </div>
    </section>
  )
}

export default Hero
