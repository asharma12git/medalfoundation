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
          fontSize: '24px',
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
            padding: '12px 24px',
            fontSize: '14px',
            fontWeight: '500',
            color: 'white',
            background: 'linear-gradient(135deg, #085c97 0%, #0a6bb0 100%)',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
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
          }}>
            About the Foundation
          </button>
        </div>

      </div>
    </section>
  )
}

export default Hero
