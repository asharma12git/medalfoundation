function ChildMarriageNepal() {
  return (
    <div>
      {/* Two-Column Content Section */}
      <section style={{
        backgroundColor: 'white',
        padding: '40px 20px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          padding: '40px 20px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
          border: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
          
          {/* Section Title */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#000',
              marginBottom: '0',
              lineHeight: '1.2',
              borderBottom: '3px solid #085c97',
              paddingBottom: '12px',
              display: 'inline-block'
            }}>
              Child Marriage in Nepal
            </h1>
          </div>
          
          {/* Two Column Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '30px',
            alignItems: 'start'
          }}>
            
            {/* Left Column - Description + Logos */}
            <div style={{
              fontSize: '16px',
              lineHeight: '1.8',
              color: '#374151'
            }}>
              {/* Description */}
              <div style={{ marginBottom: '40px' }}>
                <p style={{ marginBottom: '32px', textAlign: 'justify' }}>
                  Sexual and reproductive rights are the basis of women empowerment without which gender equality cannot be achieved. In order to achieve the United Nations Sustainable Development Goals, gender equality must be at the heart of international agenda.
                </p>
                
                <p style={{ marginBottom: '32px', textAlign: 'justify' }}>
                  Through underage marriage, girls lose out on their childhood and compromise their physical, mental and reproductive health.
                </p>
                
                <p style={{ marginBottom: '32px', textAlign: 'justify' }}>
                  In Nepal, and other countries of South Asia- namely India and Bangladesh, lack of economic security, displacement, societal instability, lack of education and awareness, age old traditional practices and superstitions, poverty, caste and dowry systems and the stigma associated with premarital sex, force some parents to seek early marriage for a girl child. These are some of the main reasons that child marriage, under-age marriage, and forced marriage is thriving in Nepal. Child marriage in Nepal was outlawed back in 1963. The government promises reforms, but in towns and villages across the country, nothing has changed. In 15 out of 75 districts in Nepal, child marriage is unacceptably high.
                </p>
                
                <p style={{ textAlign: 'justify' }}>
                  Media Alert in collaboration with Nepal Government's Ministry of Women Children and Social Welfare is in the process of developing a film project for Nepal, a national campaign, to raise awareness on child marriage and issues. The aim is to complete production by the end of 2025 and disseminate the film across Nepal and globally.
                </p>
              </div>
              
              {/* Three Logos Horizontally */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '15px'
              }}>
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)'
                }}>
                  <img 
                    src="/src/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/Govt-Nepal.png" 
                    alt="Government of Nepal" 
                    style={{
                      width: '100%',
                      aspectRatio: '1.2',
                      objectFit: 'contain',
                      display: 'block'
                    }} 
                  />
                </div>
                
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)'
                }}>
                  <img 
                    src="/src/assets/images/shared/Far-Too-Young-c4.jpg" 
                    alt="Far Too Young" 
                    style={{
                      width: '100%',
                      aspectRatio: '1.2',
                      objectFit: 'contain',
                      display: 'block'
                    }} 
                  />
                </div>
                
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)'
                }}>
                  <img 
                    src="/src/assets/images/shared/medal-30.png" 
                    alt="Medal Foundation 30 Years" 
                    style={{
                      width: '100%',
                      aspectRatio: '1.2',
                      objectFit: 'contain',
                      display: 'block'
                    }} 
                  />
                </div>
              </div>
            </div>
            
            {/* Right Column - Big Vertical Image */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
              marginTop: '0',
              padding: '15px'
            }}>
              <img 
                src="/src/assets/images/pages/home/join-the-movvement.jpg" 
                alt="Join the Movement - Child Marriage Prevention" 
                style={{
                  width: '100%',
                  height: '820px',
                  objectFit: 'fill',
                  display: 'block',
                  borderRadius: '8px'
                }} 
              />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChildMarriageNepal
