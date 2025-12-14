import { useState, useEffect } from 'react'

function ReliefHumanitarian() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isSmallMobile, setIsSmallMobile] = useState(false)
  const [isVerySmallMobile, setIsVerySmallMobile] = useState(false)
  const [isExtraSmallMobile, setIsExtraSmallMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1050)
      setIsTablet(window.innerWidth < 1200 && window.innerWidth >= 1050)
      setIsSmallMobile(window.innerWidth < 700)
      setIsVerySmallMobile(window.innerWidth < 600)
      setIsExtraSmallMobile(window.innerWidth < 550)
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

  return (
    <div>
      {/* Two-Column Content Section */}
      <section style={{
        backgroundColor: 'white',
        padding: isMobile ? '30px 20px' : '40px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          padding: isMobile ? '30px 15px' : '40px 20px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
          border: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
          
          {/* Section Title */}
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '40px' }}>
            <h1 style={{
              fontSize: isSmallMobile ? '20px' : isTablet ? '22px' : isMobile ? '23px' : '24px',
              fontWeight: '700',
              color: '#000',
              marginBottom: '0',
              lineHeight: '1.2',
              borderBottom: '3px solid #085c97',
              paddingBottom: '12px',
              display: 'inline-block',
              transition: 'font-size 0.3s ease'
            }}>
              Father Moran Education Fund
            </h1>
          </div>
          
          {/* Two Column Layout */}
          <div style={{
            display: isMobile ? 'block' : 'grid',
            gridTemplateColumns: isMobile ? 'none' : '1fr 1fr',
            gap: isMobile ? '20px' : '30px',
            alignItems: 'start'
          }}>
            
            {/* Left Column - Images */}
            <div style={{
              display: 'flex',
              flexDirection: isExtraSmallMobile ? 'column' : isSmallMobile ? 'column' : isMobile ? 'row' : 'column',
              gap: '20px',
              justifyContent: 'center',
              height: '100%'
            }}>
              {/* Top Image */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
                flex: isSmallMobile ? 'none' : isMobile ? '1' : 'none'
              }}>
                <img 
                  src="/assets/images/pages/relief-and-humanitarian-work/Father-Marshall-D-Moran.jpg" 
                  alt="Father Marshall D. Moran" 
                  style={{
                    width: '100%',
                    height: isExtraSmallMobile ? '250px' : isVerySmallMobile ? '150px' : isSmallMobile ? '200px' : isMobile ? '280px' : '380px',
                    objectFit: 'cover',
                    display: 'block'
                  }} 
                />
              </div>
              
              {/* Bottom Image */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
                flex: isSmallMobile ? 'none' : isMobile ? '1' : 'none'
              }}>
                <img 
                  src="/assets/images/pages/relief-and-humanitarian-work/Father-Moran-With-Students.jpg" 
                  alt="Father Moran With Students" 
                  style={{
                    width: '100%',
                    height: isExtraSmallMobile ? '250px' : isVerySmallMobile ? '150px' : isSmallMobile ? '200px' : isMobile ? '280px' : '380px',
                    objectFit: 'cover',
                    display: 'block'
                  }} 
                />
              </div>
            </div>
            
            {/* Right Column - Descriptions */}
            <div style={{
              fontSize: isSmallMobile ? '14px' : isTablet ? '15px' : isMobile ? '15px' : '16px',
              lineHeight: '1.8',
              color: '#374151',
              marginTop: isMobile ? '20px' : '0',
              transition: 'font-size 0.3s ease'
            }}>
              <p style={{ marginBottom: isMobile ? '24px' : '32px', textAlign: 'justify' }}>
                Father Marshall D. Moran, a Jesuit priest, was a beloved figure in Nepal and India, renowned for his dedication to education and social welfare. Born in Chicago in 1906, he arrived in India in 1929 and spent his life shaping young minds and fostering community development. He founded several renowned institutions, including St. Xavier's School in Lalitpur, Nepal, where he instilled in his students a strong sense of social responsibility and a love for learning. Beyond his academic contributions, Father Moran was deeply committed to the well-being of the Nepali people, especially children. His legacy continues to inspire generations, and his efforts have left a lasting impact on the nation.
              </p>
              
              <p style={{ marginBottom: isMobile ? '24px' : '32px', textAlign: 'justify' }}>
                In the early 1990s, Media Alert and Relief Foundation established the Father Moran Education Fund in honor of their mentor. This fund has supported over 200 schools across Nepal, providing scholarships to students, free education, and other grants.
              </p>
              
              <p style={{ marginBottom: isMobile ? '24px' : '32px', textAlign: 'justify' }}>
                Currently, in close collaboration with the American non-profit Far Too Young, Inc., Media Alert is working on an ambitious project to produce an educational film, dedicated to Father Moran, that highlights the importance of education and its role in preventing issues like early marriage, trafficking, and modern slavery. Avinash Sharma, the founder and CEO of Far Too Young, Inc., is actively supporting Media Alert's fundraising efforts in North America to bring this film to life.
              </p>
              
              <p style={{ textAlign: 'justify' }}>
                Father Moran was also an avid ham radio operator, connecting with people from around the world. His friendly nature and engaging personality made him a beloved figure among fellow ham radio enthusiasts. His passion for technology and communication bridged geographical boundaries and fostered global friendships.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Second Two-Column Section */}
      <section style={{
        backgroundColor: 'white',
        padding: isMobile ? '10px 20px' : '10px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: isMobile ? 'block' : 'grid',
          gridTemplateColumns: isMobile ? 'none' : '1fr 1fr',
          gap: isMobile ? '20px' : '30px'
        }}>
          
          {/* Left Column - Images Container */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            padding: isMobile ? '30px 15px' : '40px 20px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(0, 0, 0, 0.05)'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: isExtraSmallMobile ? 'column' : isSmallMobile ? 'column' : isMobile ? 'row' : 'column',
              gap: '20px'
            }}>
              {/* Top Image */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
                flex: isSmallMobile ? 'none' : isMobile ? '1' : 'none'
              }}>
                <img 
                  src="/assets/images/pages/relief-and-humanitarian-work/Logo-F.-Moran-Education-Fund.jpg" 
                  alt="Logo F. Moran Education Fund" 
                  style={{
                    width: '100%',
                    height: isVerySmallMobile ? '150px' : isSmallMobile ? '200px' : isMobile ? '280px' : '390px',
                    objectFit: 'cover',
                    display: 'block'
                  }} 
                />
              </div>
              
              {/* Bottom Image */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
                flex: isSmallMobile ? 'none' : isMobile ? '1' : 'none'
              }}>
                <img 
                  src="/assets/images/pages/relief-and-humanitarian-work/SCR-20250202-ldcq.jpg" 
                  alt="Relief Work Image" 
                  style={{
                    width: '100%',
                    height: isVerySmallMobile ? '150px' : isSmallMobile ? '200px' : isMobile ? '280px' : '390px',
                    objectFit: 'contain',
                    display: 'block'
                  }} 
                />
              </div>
            </div>
          </div>
          
          {/* Right Column - Vertical Collage */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            padding: isMobile ? '30px 15px' : '40px 20px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            marginTop: isMobile ? '20px' : '0'
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)'
            }}>
              <img 
                src="/assets/images/pages/relief-and-humanitarian-work/Collage-2.jpg" 
                alt="Collage 2" 
                style={{
                  width: '100%',
                  height: isMobile ? '400px' : '800px',
                  objectFit: 'cover',
                  display: 'block'
                }} 
              />
            </div>
          </div>
          
        </div>
      </section>

      {/* Third Section - Single Column */}
      <section style={{
        backgroundColor: 'white',
        padding: isMobile ? '10px 20px' : '10px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          padding: isMobile ? '30px 15px' : '40px 20px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
          border: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
          
          {/* Title */}
          <h2 style={{
            fontSize: isSmallMobile ? '18px' : isTablet ? '22px' : isMobile ? '23px' : '24px',
            fontWeight: '700',
            color: '#000',
            marginBottom: isMobile ? '30px' : '40px',
            lineHeight: '1.2',
            borderBottom: '3px solid #085c97',
            paddingBottom: '12px',
            display: 'inline-block',
            transition: 'font-size 0.3s ease, margin 0.3s ease'
          }}>
            Three Decades of Relief and Humanitarian Service
          </h2>
          
          {/* Horizontal Collage Image */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
            marginBottom: isMobile ? '30px' : '40px'
          }}>
            <img 
              src="/assets/images/pages/relief-and-humanitarian-work/COLLAGE.jpg" 
              alt="COLLAGE" 
              style={{
                width: '100%',
                height: isMobile ? '450px' : '600px',
                objectFit: 'fill',
                display: 'block'
              }} 
            />
          </div>
          
          {/* Bottom - Description */}
          <div style={{
            fontSize: isSmallMobile ? '14px' : isTablet ? '15px' : isMobile ? '15px' : '16px',
            lineHeight: '1.8',
            color: '#374151',
            textAlign: 'justify',
            transition: 'font-size 0.3s ease'
          }}>
            <p style={{ marginBottom: isMobile ? '24px' : '32px' }}>
              Since its establishment in 1993, Media Alert and Relief Foundation (Media Alert-MEDAL) has conducted many free health camps in villages of rural and remote districts of Nepal for the poor and needy. We provide health checkups, help people with medical emergencies, and distribute free medicine. Various hospitals, health posts, individuals and organizations have cooperated in our efforts.
            </p>
            
            <p style={{ marginBottom: isMobile ? '24px' : '32px' }}>
              <strong>Partners with Media Alert and Relief Foundation are:</strong> BPKHIS, Nepal Eye Hospital, Koshi Zonal Hospital, SAARC TB Center, Lions Club, Solu District Hospital, Seti Zonal Hospital, Nepal Red Cross, Surkhet District Hospital, Mahakali Zonal Hospital, Nepal Medical Association.
            </p>
            
            <p style={{ marginBottom: isMobile ? '24px' : '32px' }}>
              Media Alert and Relief Foundation has actively been involved in all natural disasters in Nepal <strong>since 1993</strong>; in <strong>1993 landslides that took 1259 lives and affected 44 districts</strong>, the <strong>2003 landslides and floods across the country that took 232 lives</strong>, the <strong>devastating earthquake that took more than 9,000 lives and injured 25,000 people</strong> and hundreds of millions of property, infrastructure, development projects and monuments were destroyed, now the ongoing <strong>COVID-19 crisis</strong>. In all major and minor calamities Media Alert has worked towards protecting livelihoods and ensuring safety, distributing clothes, medical supplies, and food. (Partners with Media Alert and Relief Foundation: ICRC, Nepal Red Cross, Nepal Center for Disaster Management, Captive Daughters, Komar, Medecins Sans Frontiers, International Medical Corps, Lions Club, Home Ministry of Nepal, Nepal Army, Ministry of Health and Population)
            </p>
          </div>
          
        </div>
      </section>
    </div>
  )
}

export default ReliefHumanitarian
