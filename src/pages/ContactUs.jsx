function ContactUs() {
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
            Contact Us
          </h1>
          <p style={{
            fontSize: '16px',
            color: '#6b7280',
            marginTop: '20px',
            maxWidth: '600px',
            margin: '20px auto 0 auto'
          }}>
            Get in touch with Media Alert and Relief Foundation. We're here to answer your questions and discuss how we can work together.
          </p>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section style={{
        backgroundColor: 'white',
        padding: '60px 20px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          
          {/* Contact Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px',
            padding: '0'
          }}>
            
            {/* Address Card */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '40px 30px',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(8, 92, 151, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)';
            }}>
              {/* Address Icon */}
              <div style={{
                fontSize: '48px',
                marginBottom: '20px',
                color: '#085c97'
              }}>
                📍
              </div>
              
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#085c97',
                marginBottom: '16px',
                margin: '0 0 16px 0'
              }}>
                Our Location
              </h3>
              
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Dilli+Bazar+Height,+Kathmandu,+44600,+Nepal"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <p style={{
                  fontSize: '16px',
                  color: '#085c97',
                  lineHeight: '1.6',
                  margin: 0,
                  cursor: 'pointer',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#0a6bb0';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#085c97';
                }}>
                  Dilli Bazar Height, Kathmandu,<br />
                  44600, Nepal
                </p>
              </a>
            </div>

            {/* Phone Card */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '40px 30px',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(8, 92, 151, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)';
            }}>
              {/* Phone Icon */}
              <div style={{
                fontSize: '48px',
                marginBottom: '20px',
                color: '#085c97'
              }}>
                📞
              </div>
              
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#085c97',
                marginBottom: '16px',
                margin: '0 0 16px 0'
              }}>
                Call Us
              </h3>
              
              <div style={{
                fontSize: '16px',
                color: '#374151',
                lineHeight: '1.6'
              }}>
                <p style={{ margin: '0 0 8px 0' }}>+977-1-9841918287</p>
                <p style={{ margin: 0 }}>+977-1-9851026241</p>
              </div>
            </div>

            {/* Email Card */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              padding: '40px 30px',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              textAlign: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(8, 92, 151, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)';
            }}>
              {/* Email Icon */}
              <div style={{
                fontSize: '48px',
                marginBottom: '20px',
                color: '#085c97'
              }}>
                ✉️
              </div>
              
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: '#085c97',
                marginBottom: '16px',
                margin: '0 0 16px 0'
              }}>
                Email Us
              </h3>
              
              <div style={{
                fontSize: '16px',
                color: '#374151',
                lineHeight: '1.6'
              }}>
                <p style={{ margin: '0 0 8px 0' }}>
                  <a href="mailto:info@medalfoundation.org" style={{ 
                    color: '#085c97', 
                    textDecoration: 'none'
                  }}>
                    info@medalfoundation.org
                  </a>
                </p>
                <p style={{ margin: '0 0 8px 0' }}>
                  <a href="mailto:ravibaralfilms@gmail.com" style={{ 
                    color: '#085c97', 
                    textDecoration: 'none'
                  }}>
                    ravibaralfilms@gmail.com
                  </a>
                </p>
                <p style={{ margin: 0 }}>
                  <a href="mailto:moran.edu.fund@fartooyoung.org" style={{ 
                    color: '#085c97', 
                    textDecoration: 'none'
                  }}>
                    moran.edu.fund@fartooyoung.org
                  </a>
                </p>
              </div>
            </div>

          </div>
          
          {/* Interactive Map Section */}
          <div style={{
            marginTop: '80px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '30px',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#085c97',
              marginBottom: '20px',
              textAlign: 'center',
              margin: '0 0 20px 0'
            }}>
              Find Us on the Map
            </h2>
            
            <div style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1234567890!2d85.3240000!3d27.7172000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzAyLjAiTiA4NcKwMTknMjYuNCJF!5e0!3m2!1sen!2snp!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Medal Foundation Location - Dilli Bazar Height, Kathmandu"
              ></iframe>
            </div>
            
            <p style={{
              textAlign: 'center',
              marginTop: '15px',
              fontSize: '14px',
              color: '#6b7280',
              margin: '15px 0 0 0'
            }}>
              Click and drag to explore the area around our office
            </p>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default ContactUs
