import { useState, useEffect } from 'react'

function Members() {
  const [isMobile, setIsMobile] = useState(false)
  const [isSmallMobile, setIsSmallMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1050)
      setIsSmallMobile(window.innerWidth < 700)
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
      {/* Section Title */}
      <section style={{
        backgroundColor: 'white',
        padding: isMobile ? '40px 20px 0px 20px' : '60px 20px 0px 20px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{
            fontSize: isMobile ? '24px' : '36px',
            fontWeight: '600',
            color: '#171717',
            marginBottom: '16px',
            lineHeight: '1.2',
            borderBottom: '3px solid #085c97',
            paddingBottom: '12px',
            display: 'inline-block',
            transition: 'font-size 0.3s ease, margin 0.3s ease, padding 0.3s ease'
          }}>
            Executive Committee
          </h1>
        </div>
      </section>
      
      {/* Paper-like Member Section */}
      <section style={{
        backgroundColor: 'white',
        padding: isMobile ? '40px 20px' : '60px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          padding: isMobile ? '30px 20px' : '60px 40px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
          border: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
          {/* Member Layout */}
          <div style={{
            display: isMobile ? 'block' : 'grid',
            gridTemplateColumns: isMobile ? 'none' : '300px 1fr',
            gap: isMobile ? '20px' : '40px',
            alignItems: 'start'
          }}>
            {/* Member Image */}
            <div style={{
              width: isMobile ? '280px' : '300px',
              height: isMobile ? '350px' : '400px',
              borderRadius: '12px',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              overflow: 'hidden',
              margin: isMobile ? '0 auto 20px auto' : '0'
            }}>
              <img 
                src="/src/assets/images/pages/members/Ravi-baral.jpg" 
                alt="Ravi Baral" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'
                }}
              />
            </div>
            
            {/* Member Info */}
            <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
              {/* Member Name */}
              <h2 style={{
                fontSize: isMobile ? '22px' : '28px',
                fontWeight: '600',
                color: '#000',
                marginBottom: '8px',
                lineHeight: '1.2',
                transition: 'font-size 0.3s ease'
              }}>
                Ravi Baral
              </h2>
              
              {/* Member Title */}
              <h3 style={{
                fontSize: isMobile ? '16px' : '18px',
                fontWeight: '500',
                color: '#085c97',
                marginBottom: '16px',
                transition: 'font-size 0.3s ease'
              }}>
                Founder and Executive Chairperson
              </h3>
              
              {/* Divider */}
              <hr style={{
                border: 'none',
                borderTop: '1px solid #e5e7eb',
                marginBottom: isMobile ? '20px' : '24px'
              }} />
              
              {/* Biography */}
              <div style={{
                fontSize: isMobile ? '14px' : '16px',
                lineHeight: '1.8',
                color: '#374151',
                textAlign: 'justify',
                transition: 'font-size 0.3s ease'
              }}>
                <p style={{ marginBottom: isMobile ? '24px' : '32px' }}>Ravi Baral, a prominent activist filmmaker, has dedicated his life to using the power of media to address critical social issues. He is the founder and executive chairperson of Media Alert and Relief Foundation, an organization he has led for over three decades. His career began at Nepal Television, where he produced documentaries, anchored current affairs programs, and hosted the popular Music Magazine. In 1993, he founded Media Alert, a platform to create impactful films and campaigns. He has produced feature films, documentaries, and short films, each addressing pressing social concerns. A former student of the renowned Fr. Marshall D. Moran at St. Xavier's School, Baral has continued to honor his mentor's legacy by contributing significantly to the Fr. Moran Education Fund, which provides scholarships to underprivileged children.</p>
                
                <p>Currently, Baral is at the forefront of the "Join the Movement" campaign, aiming to eradicate child marriage in Nepal and South Asia by 2030. He is also involved in the pre-production of the film "Far Too Young," which will further shed light on gender-based violence. Dedicated to the memory of Fr. Moran, the film will be disseminated worldwide to raise awareness about the importance of education and to encourage efforts to keep children in school, protecting them from early marriage, trafficking, forced labor, and slavery. The Fr. Moran Education Fund, set up by Media Alert, works closely with the American non-profit Far Too Young, Inc., to jointly raise funds for the production of "Far Too Young," ensuring that Fr. Moran's legacy of education and social justice continues to inspire and empower future generations. Through his tireless efforts and creative vision, Ravi Baral continues to inspire and empower communities, leaving a lasting legacy in the world of social activism and filmmaking.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Two Members in Columns */}
        <div style={{
          maxWidth: '1200px',
          margin: '15px auto 0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '15px'
        }}>
          {/* Left Member */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
            padding: isMobile ? '20px 15px' : '20px 15px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(0, 0, 0, 0.05)'
          }}>
            {/* Member Image */}
            <div style={{
              width: isMobile ? '220px' : '200px',
              height: isMobile ? '280px' : '250px',
              borderRadius: '12px',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              margin: '0 auto 20px auto',
              overflow: 'hidden'
            }}>
              <img 
                src="/src/assets/images/pages/members/Avi-Sharma.jpg" 
                alt="Avinash Sharma" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'
                }}
              />
            </div>
            
            {/* Member Info */}
            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: isMobile ? '18px' : '22px',
                fontWeight: '600',
                color: '#000',
                marginBottom: '8px',
                transition: 'font-size 0.3s ease'
              }}>
                Avinash Sharma
              </h3>
              
              <h4 style={{
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '500',
                color: '#085c97',
                marginBottom: '16px',
                transition: 'font-size 0.3s ease'
              }}>
                Producer and Partner
              </h4>
              
              <hr style={{
                border: 'none',
                borderTop: '1px solid #e5e7eb',
                marginBottom: '20px'
              }} />
              
              <div style={{
                fontSize: isMobile ? '14px' : '16px',
                lineHeight: '1.6',
                color: '#374151',
                textAlign: 'justify',
                transition: 'font-size 0.3s ease'
              }}>
                <p style={{ marginBottom: '16px' }}>Avinash Sharma, a dedicated advocate for social justice and a skilled data scientist, is the Founder and CEO of Far Too Young, Inc., a US-based non-profit organization. He is a key partner of Media Alert and Relief Foundation, contributing his expertise to their communication and education programs on gender equality, human trafficking, and child and women's rights.</p>
                
                <p style={{ marginBottom: '16px' }}>As a seasoned Data Scientist and Business Intelligence expert, Mr. Sharma has provided invaluable advice to Media Alert since 2008, aiding in the production of impactful audio-visual materials on various social issues. His philanthropic spirit is evident in his support for numerous relief initiatives, including mobile health clinics, food and shelter for disaster victims, and research on child marriage. Additionally, Sharma has generously provided scholarships to countless underprivileged children in Nepal through the Fr. Moran Education Fund.</p>
                
                <p>Sharma's commitment to addressing social injustice is further demonstrated through his role as a co-producer of the short film "Far Too Young," which highlights the devastating consequences of child marriage. This short film serves as a powerful prelude to the upcoming full-length feature film, "Far Too Young," which will be dedicated to the legacy of Fr. Moran. Once completed, this educational film will be used in classrooms across Nepal, South Asia, and around the world to raise awareness about gender-based violence and the importance of education in protecting children from trafficking, early marriage, and modern slavery. It will also serve as a valuable resource for policymakers.</p>
              </div>
            </div>
          </div>
          
          {/* Right Member */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
            padding: isMobile ? '20px 15px' : '20px 15px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            marginTop: isMobile ? '15px' : '0'
          }}>
            {/* Member Image */}
            <div style={{
              width: isMobile ? '220px' : '200px',
              height: isMobile ? '280px' : '250px',
              borderRadius: '12px',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              margin: '0 auto 20px auto',
              overflow: 'hidden'
            }}>
              <img 
                src="/src/assets/images/pages/members/Bishwanath-Ghimire.jpg" 
                alt="Bishwanath Ghimire" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'
                }}
              />
            </div>
            
            {/* Member Info */}
            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: isMobile ? '18px' : '22px',
                fontWeight: '600',
                color: '#000',
                marginBottom: '8px',
                transition: 'font-size 0.3s ease'
              }}>
                Bishwanath Ghimire
              </h3>
              
              <h4 style={{
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '500',
                color: '#085c97',
                marginBottom: '16px',
                transition: 'font-size 0.3s ease'
              }}>
                General Manager
              </h4>
              
              <hr style={{
                border: 'none',
                borderTop: '1px solid #e5e7eb',
                marginBottom: '20px'
              }} />
              
              <div style={{
                fontSize: isMobile ? '14px' : '16px',
                lineHeight: '1.6',
                color: '#374151',
                textAlign: 'justify',
                transition: 'font-size 0.3s ease'
              }}>
                <p>Bishwanath Ghimire, also known as Lilhari Ghimire, has been a cornerstone of Media Alert since 1998, serving as General Manager and overseeing all communication projects and humanitarian initiatives. With a distinguished career spanning decades, he has held key positions at the Nepal Red Cross Society and consulted for organizations like UNDP, UNICEF, GTZ, WHO, and Save the Children USA. His extensive experience in the field is complemented by a Master's degree in Sociology and Political Science, and a tenure as a lecturer at Patan Multiple Campus, Tribhuvan University. Ghimire's deep understanding of Nepal's social and humanitarian landscape, combined with his strategic leadership, ensures the effective implementation of Media Alert's programs and initiatives.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Two More Members in Columns */}
        <div style={{
          maxWidth: '1200px',
          margin: '15px auto 0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '15px'
        }}>
          {/* Left Member */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
            padding: isMobile ? '20px 15px' : '20px 15px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(0, 0, 0, 0.05)'
          }}>
            {/* Member Image */}
            <div style={{
              width: isMobile ? '220px' : '200px',
              height: isMobile ? '280px' : '250px',
              borderRadius: '12px',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              margin: '0 auto 20px auto',
              overflow: 'hidden'
            }}>
              <img 
                src="/src/assets/images/pages/members/Pradip Upadhyay.jpg" 
                alt="Pradeep Upadhyay" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'
                }}
              />
            </div>
            
            {/* Member Info */}
            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: isMobile ? '18px' : '22px',
                fontWeight: '600',
                color: '#000',
                marginBottom: '8px',
                transition: 'font-size 0.3s ease'
              }}>
                Pradeep Upadhyay
              </h3>
              
              <h4 style={{
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '500',
                color: '#085c97',
                marginBottom: '16px',
                transition: 'font-size 0.3s ease'
              }}>
                Head of Productions
              </h4>
              
              <hr style={{
                border: 'none',
                borderTop: '1px solid #e5e7eb',
                marginBottom: '20px'
              }} />
              
              <div style={{
                fontSize: isMobile ? '14px' : '16px',
                lineHeight: '1.6',
                color: '#374151',
                textAlign: 'justify',
                transition: 'font-size 0.3s ease'
              }}>
                <p style={{ marginBottom: '16px' }}>Pradeep Upadhyay, a seasoned audio-visual expert, has been a key member of Media Alert since 1999, leading the Production Department. With a distinguished career spanning decades, he has served as a technical consultant for numerous Nepali productions, including BBC, Nepal Television, and various private TV channels. As a skilled sound engineer, Upadhyay has designed numerous sound studios, radios, and FM stations across Nepal.</p>
                
                <p>His dedication to the industry is evident through his active involvement in the Nepal Motion Picture Association, Nepal Film Technicians Association, and the Audio Engineering Society, USA. His notable achievements include directing the Nepali feature film "Jhuma" and pioneering the introduction of Dolby Digital Surround Sound in Nepal with the film "Chameli." A graduate with distinction from the prestigious Film and TV Institute of India, Upadhyay's technical expertise and artistic vision have significantly contributed to the growth and development of the Nepali film industry.</p>
              </div>
            </div>
          </div>
          
          {/* Right Member */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
            padding: isMobile ? '20px 15px' : '20px 15px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            marginTop: isMobile ? '15px' : '0'
          }}>
            {/* Member Image */}
            <div style={{
              width: isMobile ? '220px' : '200px',
              height: isMobile ? '280px' : '250px',
              borderRadius: '12px',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              margin: '0 auto 20px auto',
              overflow: 'hidden'
            }}>
              <img 
                src="/src/assets/images/pages/members/Viplob-Pratik.jpg" 
                alt="Viplob Pratik" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'scale(1)'
                }}
              />
            </div>
            
            {/* Member Info */}
            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontSize: isMobile ? '18px' : '22px',
                fontWeight: '600',
                color: '#000',
                marginBottom: '8px',
                transition: 'font-size 0.3s ease'
              }}>
                Viplob Pratik
              </h3>
              
              <h4 style={{
                fontSize: isMobile ? '14px' : '16px',
                fontWeight: '500',
                color: '#085c97',
                marginBottom: '16px',
                transition: 'font-size 0.3s ease'
              }}>
                Creative Head and Writer
              </h4>
              
              <hr style={{
                border: 'none',
                borderTop: '1px solid #e5e7eb',
                marginBottom: '20px'
              }} />
              
              <div style={{
                fontSize: isMobile ? '14px' : '16px',
                lineHeight: '1.6',
                color: '#374151',
                textAlign: 'justify',
                transition: 'font-size 0.3s ease'
              }}>
                <p style={{ marginBottom: '16px' }}>Viplob Pratik, a founding member of Media Alert, leads the Creative Department, overseeing the production of films, print materials, and campaign materials. A talented filmmaker, he has directed "Samarpan," "Abhilasha," and "Spandan," and contributed to publications like "Himal" and "Salil." As a renowned poet, his works, including "Unvanquished" and "A Person Kissed by the Moon," have been published in multiple languages and featured in international publications.</p>
                
                <p>Beyond his creative pursuits, Pratik is actively involved in the cultural scene, serving as Secretary of the Kathmandu Film Society, a Founding Member of Gallery Nine, and Secretary of the Narayan Gopal Music Trust. A skilled photographer, Pratik's diverse talents and contributions have significantly enriched the cultural landscape of Nepal.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Board Members and Legal Advisor */}
        <div style={{
          maxWidth: '1200px',
          margin: '15px auto 0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '15px'
        }}>
          {/* Board Members */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
            padding: isMobile ? '25px 15px' : '30px 20px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            textAlign: 'center'
          }}>
            <h3 style={{
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: '600',
              color: '#000',
              marginBottom: '20px',
              textAlign: 'left',
              transition: 'font-size 0.3s ease'
            }}>
              Board Members
            </h3>
            
            <hr style={{
              border: 'none',
              borderTop: '1px solid #085c97',
              marginBottom: '20px',
              width: '180px',
              marginLeft: '0'
            }} />
            
            <div style={{
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '1.8',
              color: '#374151',
              textAlign: 'left',
              transition: 'font-size 0.3s ease'
            }}>
              <p><strong>Mr. Bijay Dhakal</strong></p>
              <p><strong>Mr. Pratap Poudel</strong></p>
              <p><strong>Mr. Umesh Singh</strong></p>
              <p><strong>Mr. Pradip Sharma</strong></p>
            </div>
          </div>
          
          {/* Legal Advisor */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
            padding: isMobile ? '25px 15px' : '30px 20px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            textAlign: 'center',
            marginTop: isMobile ? '15px' : '0'
          }}>
            <h3 style={{
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: '600',
              color: '#000',
              marginBottom: '20px',
              textAlign: 'left',
              transition: 'font-size 0.3s ease'
            }}>
              Legal Advisor
            </h3>
            
            <hr style={{
              border: 'none',
              borderTop: '1px solid #085c97',
              marginBottom: '20px',
              width: '150px',
              marginLeft: '0'
            }} />
            
            <div style={{
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '1.8',
              color: '#374151',
              textAlign: 'left',
              transition: 'font-size 0.3s ease'
            }}>
              <p><strong>Mr. Ganesh Dhungana</strong></p>
            </div>
          </div>
        </div>
        
        {/* Banks and Auditor */}
        <div style={{
          maxWidth: '1200px',
          margin: '15px auto 0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '15px'
        }}>
          {/* Banks */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
            padding: isMobile ? '25px 15px' : '30px 20px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(0, 0, 0, 0.05)'
          }}>
            <h3 style={{
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: '600',
              color: '#000',
              marginBottom: '20px',
              textAlign: 'left',
              transition: 'font-size 0.3s ease'
            }}>
              Banks
            </h3>
            
            <hr style={{
              border: 'none',
              borderTop: '1px solid #085c97',
              marginBottom: '20px',
              width: '80px',
              marginLeft: '0'
            }} />
            
            <div style={{
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '1.8',
              color: '#374151',
              textAlign: 'left',
              transition: 'font-size 0.3s ease'
            }}>
              <p><strong>Global IME Bank</strong></p>
              <p><strong>NMB Bank</strong></p>
            </div>
          </div>
          
          {/* Auditor */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
            padding: isMobile ? '25px 15px' : '30px 20px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            marginTop: isMobile ? '15px' : '0'
          }}>
            <h3 style={{
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: '600',
              color: '#000',
              marginBottom: '20px',
              textAlign: 'left',
              transition: 'font-size 0.3s ease'
            }}>
              Auditor
            </h3>
            
            <hr style={{
              border: 'none',
              borderTop: '1px solid #085c97',
              marginBottom: '20px',
              width: '100px',
              marginLeft: '0'
            }} />
            
            <div style={{
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '1.8',
              color: '#374151',
              textAlign: 'left',
              transition: 'font-size 0.3s ease'
            }}>
              <p><strong>Madhusudhan Dhakal And Company</strong></p>
            </div>
          </div>
        </div>
        
        {/* Advisors and Experts */}
        <div style={{
          maxWidth: '1200px',
          margin: '15px auto 0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: '15px'
        }}>
          {/* Advisors */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
            padding: isMobile ? '25px 15px' : '30px 20px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(0, 0, 0, 0.05)'
          }}>
            <h3 style={{
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: '600',
              color: '#000',
              marginBottom: '20px',
              textAlign: 'left',
              transition: 'font-size 0.3s ease'
            }}>
              Advisors
            </h3>
            
            <hr style={{
              border: 'none',
              borderTop: '1px solid #085c97',
              marginBottom: '20px',
              width: '110px',
              marginLeft: '0'
            }} />
            
            <div style={{
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '1.8',
              color: '#374151',
              textAlign: 'left',
              transition: 'font-size 0.3s ease'
            }}>
              <p><strong>Mrs. Chadni Joshi</strong>, Former UNIFEM Regional Director, Women's Rights Champion</p>
              <p><strong>Mrs. Durga Ghimire</strong>, Women and Child Rights Activist</p>
              <p><strong>Mrs. Sabita Bhandary</strong>, Women's Law/ Senior Advocate</p>
              <p><strong>Prof. Manindra Ranjan Baral</strong>, Child Rights-Advocate and Professor of Child Health</p>
              <p><strong>Mrs. Rita Thapa</strong>, Ashoka Fellow, Women and Child Rights Activist</p>
              <p><strong>Dr. Sudha Sharma</strong>, Former Health Secretary Nepal Government, Public Health Expert</p>
              <p><strong>Mrs. Pramila Acharya Rizal</strong>, Women and Child Rights Activist</p>
            </div>
          </div>
          
          {/* Experts */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
            padding: isMobile ? '25px 15px' : '30px 20px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            marginTop: isMobile ? '15px' : '0'
          }}>
            <h3 style={{
              fontSize: isMobile ? '20px' : '24px',
              fontWeight: '600',
              color: '#000',
              marginBottom: '20px',
              textAlign: 'left',
              transition: 'font-size 0.3s ease'
            }}>
              Experts
            </h3>
            
            <hr style={{
              border: 'none',
              borderTop: '1px solid #085c97',
              marginBottom: '20px',
              width: '90px',
              marginLeft: '0'
            }} />
            
            <div style={{
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '1.8',
              color: '#374151',
              textAlign: 'left',
              transition: 'font-size 0.3s ease'
            }}>
              <p><strong>Dr. Hemang Dixit</strong> (Health Education)</p>
              <p><strong>Mr. Radhesh Pant</strong> (Management)</p>
              <p><strong>Mr. Matt Friedman</strong> (Modern Slavery)</p>
              <p><strong>Mr. Chewang Sherpa</strong> (Information Technology)</p>
              <p><strong>Mr. Soorya Baral</strong> (Communication and Media)</p>
            </div>
          </div>
        </div>
        
        {/* Other Team Members - Large Section */}
        <div style={{
          maxWidth: '1200px',
          margin: '15px auto 0 auto',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          padding: isMobile ? '40px 20px' : '60px 40px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
          border: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
          <h3 style={{
            fontSize: isMobile ? '20px' : '24px',
            fontWeight: '600',
            color: '#000',
            marginBottom: '20px',
            textAlign: 'center',
            transition: 'font-size 0.3s ease'
          }}>
            Other Team Members
          </h3>
          
          <hr style={{
            border: 'none',
            borderTop: '1px solid #085c97',
            marginBottom: isMobile ? '30px' : '40px',
            width: isMobile ? '200px' : '250px',
            margin: `0 auto ${isMobile ? '30px' : '40px'} auto`
          }} />
          
          {/* Two Column Layout for Names */}
          <div style={{
            display: isSmallMobile ? 'block' : 'grid',
            gridTemplateColumns: isSmallMobile ? 'none' : '1fr 2px 1fr',
            gap: isSmallMobile ? '0' : '40px',
            alignItems: 'start'
          }}>
            {/* Left Column */}
            <div style={{
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '1.8',
              color: '#374151',
              textAlign: 'center',
              transition: 'font-size 0.3s ease'
            }}>
              <p><strong>Lata Poudel:</strong> Senior Administrative Officer</p>
              <p><strong>Deepesh Poudel:</strong> Projects Consultant</p>
              <p><strong>Ramsaran Upreti:</strong> Cinematographer</p>
              <p><strong>Madhav Thapalia:</strong> Studio Department</p>
              <p><strong>Bimal Sharma:</strong> Production Control</p>
              <p><strong>Binay Poudel:</strong> Production Assistant</p>
              <p><strong>SreeeJana Dahal:</strong> Field Coordinator</p>
              <p><strong>Radha Ghimire:</strong> Field Coordinator</p>
              <p><strong>Binod Kumar Dhakal:</strong> Field Coordinator</p>
              <p><strong>Shankar Sharma:</strong> Field Coordinator</p>
              <p><strong>Bion KC:</strong> Film Editor</p>
              <p><strong>Aman Shrestha:</strong> Graphics</p>
              <p><strong>Dharmendra Gauchan:</strong> Chief Field Technician</p>
            </div>
            
            {/* Vertical Divider - Hidden on small mobile */}
            {!isSmallMobile && (
              <div style={{
                width: '2px',
                backgroundColor: '#085c97',
                height: '100%',
                minHeight: '400px'
              }}></div>
            )}
            
            {/* Right Column */}
            <div style={{
              fontSize: isMobile ? '14px' : '16px',
              lineHeight: '1.8',
              color: '#374151',
              textAlign: 'center',
              marginTop: isSmallMobile ? '20px' : '0',
              transition: 'font-size 0.3s ease',
              paddingTop: isSmallMobile ? '20px' : '0',
              position: 'relative'
            }}>
              {isSmallMobile && (
                <div style={{
                  position: 'absolute',
                  top: '0px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100px',
                  height: '1px',
                  backgroundColor: '#085c97'
                }}></div>
              )}
              <p><strong>Sanjeev Phuyal:</strong> Writer, Translator</p>
              <p><strong>Munna Malakar:</strong> Technician</p>
              <p><strong>Bikash Tamang:</strong> Office Manager</p>
              <p><strong>Shyam Khadka:</strong> Field Logistics</p>
              <p><strong>Ram Khatiwada:</strong> Site Officer</p>
              <p><strong>Suresh Poudel:</strong> Chief Accounts</p>
              <p><strong>Susmita Khanal:</strong> Accounts Assistant</p>
              <p><strong>Shree Krishna Shrestha:</strong> Transport Manager</p>
              <p><strong>Ayush Shrestha:</strong> Driver</p>
              <p><strong>Tikaram Gharti:</strong> Driver</p>
              <p><strong>Sanjita Dhakal:</strong> Office Help</p>
              <p><strong>Kamala Sapkota:</strong> Office Help</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Members