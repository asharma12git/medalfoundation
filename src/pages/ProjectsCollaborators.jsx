import { useState, useEffect } from 'react'

function ProjectsCollaborators() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isSmallMobile, setIsSmallMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1050)
      setIsTablet(window.innerWidth < 1200 && window.innerWidth >= 1050)
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
      {/* Large Medal Logo and Title Section */}
      <section style={{
        backgroundColor: 'white',
        padding: isMobile ? '40px 20px' : '60px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <img 
            src="/assets/images/shared/medal-30.png" 
            alt="Medal Foundation 30 Years" 
            style={{
              width: isMobile ? '200px' : '300px',
              height: 'auto',
              display: 'block',
              margin: isMobile ? '0 auto 30px auto' : '0 auto 40px auto',
              transition: 'width 0.3s ease, margin 0.3s ease'
            }} 
          />
          
          <h1 style={{
            fontSize: isMobile ? '24px' : '36px',
            fontWeight: '700',
            color: '#000',
            textAlign: 'center',
            marginBottom: '16px',
            lineHeight: '1.2',
            borderBottom: '3px solid #085c97',
            paddingBottom: '12px',
            display: 'inline-block',
            transition: 'font-size 0.3s ease'
          }}>
            Three Decades of Service
          </h1>
        </div>
      </section>
      
      {/* Paper-like Campaigns Section */}
      <section style={{
        backgroundColor: 'white',
        padding: isMobile ? '0px 20px 40px 20px' : '0px 20px 60px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: '#fefefe',
          padding: isMobile ? '40px 20px' : '60px 40px',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb'
        }}>
          {/* Campaigns Content */}
          <div style={{
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: '1.8',
            color: '#374151',
            textAlign: 'justify',
            transition: 'font-size 0.3s ease'
          }}>
            <h3 style={{
              fontSize: isSmallMobile ? '14px' : isTablet ? '16px' : isMobile ? '17px' : '18px',
              fontWeight: '600',
              color: '#085c97',
              marginTop: '0px',
              marginBottom: '16px',
              transition: 'font-size 0.3s ease'
            }}>
              LOCAL AND NATIONAL CAMPAIGNS CONDUCTED:
            </h3>
            
            <ul style={{
              marginLeft: isMobile ? '16px' : '20px',
              marginBottom: isMobile ? '24px' : '32px',
              listStyleType: 'disc'
            }}>
              <li><strong>IMMUNIZATION:</strong> with UNICEF (1998)</li>
              <li><strong>ANTI-TOBACCO CAMPAIGN:</strong> with HMG/NEPAL, Mrigendra Chikitsa Guthi (1999)</li>
              <li><strong>ANTI-GIRL TRAFFICKING:</strong> with USAID and UNIFEM (2001)</li>
              <li><strong>LEPROSY:</strong> with HMG/NEPAL and UNDP (2002)</li>
              <li><strong>ENVIRONMENT PROTECTION:</strong> with IUCN (2003)</li>
              <li><strong>RAMJHAM: A Musical for PEACE:</strong> with various partners (2004- 2006)</li>
              <li><strong>POLIO CAMPAIGN:</strong> with UNICEF and WHO (2007)</li>
              <li><strong>Kathabhitra K Kathharro:</strong> with FHI-USAID ( 2009, 2010, 2011 to 2015)</li>
              <li><strong>HEART HEALTH:</strong> with Jayanti Memorial Trust (2014)</li>
              <li><strong>People Help People: United in the Campaign against AIDS:</strong> With various partners (2015 to 2016)</li>
              <li><strong>Maynati: Poetry Against Modern Slavery:</strong> with various partners (2015 & 2017 to 2019)</li>
              <li><strong>COVID-19 AWARENESS:</strong> with Nepal Medical Association</li>
              <li><strong>JOIN THE MOVEMENT:</strong> with various partners 2021- ongoing</li>
            </ul>
            
            <h3 style={{
              fontSize: isSmallMobile ? '14px' : isTablet ? '16px' : isMobile ? '17px' : '18px',
              fontWeight: '600',
              color: '#085c97',
              marginTop: isMobile ? '24px' : '32px',
              marginBottom: '16px',
              transition: 'font-size 0.3s ease, margin 0.3s ease'
            }}>
              AWARD ESTABLISHED:
            </h3>
            
            <p style={{ marginBottom: isMobile ? '24px' : '32px' }}>Established by Media Alert and Relief Foundation organizes and gives away Media Alert's EXCELLENCE IN MEDIA AWARDS to the Best Journalist among print, TV, and radio journalists who spread education and awareness on pressing social issues. Chosen by a jury consisting of professional communication and media professionals, three Excellence in Media Awards have been given away so far</p>
            
            <h3 style={{
              fontSize: isSmallMobile ? '14px' : isTablet ? '16px' : isMobile ? '17px' : '18px',
              fontWeight: '600',
              color: '#085c97',
              marginTop: isMobile ? '24px' : '32px',
              marginBottom: '16px',
              transition: 'font-size 0.3s ease, margin 0.3s ease'
            }}>
              AUDIO-VIDEO PRODUCED:
            </h3>
            
            <ul style={{
              marginLeft: isMobile ? '16px' : '20px',
              marginBottom: isMobile ? '24px' : '32px',
              listStyleType: 'disc'
            }}>
              <li>Kalilai Umerama: Short Film against Child Marriage (2022)</li>
              <li>A series of short films on COVID-19 awareness and prevention produced in 2020 and 2021 in collaboration with Nepal Medical Association and others.</li>
              <li>Maynati: Poems against Modern Day Slavery. I & II Editions. 2014, 2015, 2016. (Various Partners)</li>
              <li>Didi Bahini, Anti-trafficking Promotional Trailer. 2016. (Captive Daughters)</li>
              <li>Child Brides. 2016. (Various Partners)</li>
              <li>Earthquake Preparedness, Rescue and Rehabilitation. 2015. (Various Partners)</li>
              <li>NTB promotional short films. 2015-2017. (MEDAL)</li>
              <li>We owe it to the children. 2014. (Smile Nepal)</li>
              <li>Touching Hearts. Cardiac Care In Nepal 2014. (Jayanti Memorial Trust)</li>
              <li>Kangaroo Baby Care. 2014. (OCB and Ministry of Health)</li>
              <li>Nepal Votes. 2013. (European Union)</li>
              <li>Uterine Prolapse. Campaign in West Nepal. 2013. (Ministry of Health and JSI)</li>
              <li>Gender-based violence.2012. (Doctor of the World- Health Rights)</li>
              <li>Reduction of stigma toward repatriated female sex workers. 2012. (MEDAL-USAID)</li>
              <li>Marginalized Communities in India and Nepal. 2011,2012. (MEDAL and Various Partners)</li>
              <li>Chori lai Shikshya. Country Campaign 2011. (Ministry of Education- USAID)</li>
              <li>Using Safe Child Birth Check List. 2010. (USAID and Partners)</li>
              <li>Kathabhitraka Kathaharoo. Shorts, Books. Journal (FHI- DFID (RAB) 2009. Short Films (RAB): Reaching Across Borders, People United, Communication Power, ART Saves Lives, Ishwari and Apsara, Story of Omni and Lal Singh</li>
              <li>Celluloid spots of Number 1 condoms and its dissemination countrywide. 2009 (PSI)</li>
              <li>Domestic Violence in Nepal. 2008. (UNIFEM)</li>
              <li>Contraceptive Use in Nepal. Film and Campaign. 2007. (MOH-USAID-JHPIEGO)</li>
              <li>Life Free of Drugs and Alcohol Abuse. Film and Campaign. 2007 (MOH-UNODC)</li>
              <li>Jigyasaa. Family Planning Counseling (Bangladesh). 2006. (Mitra Associates- USAID)</li>
              <li>Improving Primary Education. 2005. (ADB-MEDAL)</li>
              <li>Ramjham: Peace Campaign. East Nepal and West Bengal, India. 2004. (Embassy of India/BP Koirala India Nepal Foundation)</li>
              <li>Micro-Hydropower in Nepal. 2003. (MOWR-JICA)</li>
              <li>Earthquake Rehabilitation. 2003. (MEDAL- World Bank)</li>
              <li>P-Process and GATHER. 2002 (Johns Hopkins University- USAID)</li>
              <li>Effects of Population Growth on National Development. (Futures Group- POLICY Project-USAID)</li>
              <li>Population Growth: Hazards. Campaign. 1999. ( MEDAL- Futures Group- POLICY Project-USAID)</li>
              <li>Improving the Efficiency of the Education System. 1998. (Florida State University and USAID)</li>
              <li>Other Campaigns and Research between 1993 through 2016: Rehydration Salt. Anti-tobacco. Immunization. Girl Child Education. Birth Spacing. Domestic Violence. Production and Dissemination of Radio Soap Operas on Health Education. Midwife Training Film and Manuals. Voters Education. MOH Communication strategies on HIV/AIDS prevention. Earthquake preparedness, rescue, and rehabilitation. E-learning. Situation of Child Marriage in several States of India, Bangladesh, and Districts of Nepal with various partners and support. (UNDP-UNICEF-Carter Center- Jhpiego- USAID- NCASC, Nepal Red Cross Society, ICRC, National Planning Commission, Social Welfare Council, eSARA)</li>
            </ul>
            
            <h3 style={{
              fontSize: isSmallMobile ? '14px' : isTablet ? '16px' : isMobile ? '17px' : '18px',
              fontWeight: '600',
              color: '#085c97',
              marginTop: isMobile ? '24px' : '32px',
              marginBottom: '16px',
              transition: 'font-size 0.3s ease, margin 0.3s ease'
            }}>
              Workshops Conducted With Experts:
            </h3>
            
            <ul style={{
              marginLeft: isMobile ? '16px' : '20px',
              marginBottom: isMobile ? '24px' : '32px',
              listStyleType: 'disc'
            }}>
              <li>Community Outreach through e-learning.</li>
              <li>What is Behavior Change Communication?</li>
              <li>Measuring Impact of Communication Campaigns.</li>
              <li>The importance of Pre-tests in Communication Campaigns.</li>
              <li>Ways to Monitor and Evaluate Media Projects.</li>
              <li>Mobilizing Community.</li>
              <li>Social Marketing.</li>
              <li>Dissemination of Information, Education, Communication materials.</li>
              <li>On Media Alert's Mobile Audio Video Approach (MAVA)</li>
              <li>Interpersonal Communication.</li>
              <li>Types of Media and Intervention.</li>
              <li>Script Writing Workshops</li>
              <li>Others.</li>
            </ul>
          </div>
        </div>
      </section>

      
      {/* Past & Present Collaborators Title */}
      <section style={{
        backgroundColor: 'white',
        padding: isMobile ? '20px 20px 40px 20px' : '20px 20px 60px 20px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{
            fontSize: isMobile ? '24px' : '36px',
            fontWeight: '700',
            color: '#000',
            textAlign: 'center',
            marginBottom: '16px',
            lineHeight: '1.2',
            borderBottom: '3px solid #085c97',
            paddingBottom: '12px',
            display: 'inline-block',
            transition: 'font-size 0.3s ease'
          }}>
            Past & Present Collaborators
          </h1>
        </div>
      </section>
      
      {/* Collaborators Content Section */}
      <section style={{
        backgroundColor: 'white',
        padding: isMobile ? '0px 20px 40px 20px' : '0px 20px 60px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: '#fefefe',
          padding: isMobile ? '40px 20px' : '60px 40px',
          borderRadius: '8px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e5e7eb'
        }}>
          
          {/* Affiliation Section at top */}
          <div style={{
            marginBottom: '20px'
          }}>
            <h3 style={{
              fontSize: isSmallMobile ? '14px' : isTablet ? '16px' : isMobile ? '17px' : '18px',
              fontWeight: '600',
              color: '#085c97',
              marginBottom: '20px',
              textAlign: 'left',
              transition: 'font-size 0.3s ease'
            }}>
              AFFILIATION
            </h3>
            
            <div style={{
              textAlign: 'left'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/swc.webp" 
                alt="Social Welfare Council Nepal" 
                style={{
                  width: isMobile ? '200px' : '300px',
                  maxWidth: '100%',
                  height: 'auto',
                  display: 'block',
                  transition: 'width 0.3s ease'
                }} 
              />
            </div>
          </div>
          
          {/* Partner Organizations */}
          <h3 style={{
            fontSize: isSmallMobile ? '14px' : isTablet ? '16px' : isMobile ? '17px' : '18px',
            fontWeight: '600',
            color: '#085c97',
            marginBottom: '20px',
            textAlign: 'left',
            transition: 'font-size 0.3s ease'
          }}>
            PARTNER ORGANIZATIONS
          </h3>
          
          {/* Responsive Grid for Logos */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isSmallMobile ? 'repeat(4, 1fr)' : 'repeat(6, 1fr)',
            gap: isMobile ? '15px' : '20px',
            alignItems: 'center'
          }}>
            {/* Logo placeholders - will be replaced with actual logos */}
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/Govt-Nepal.png" 
                alt="Government of Nepal" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/UKAID.png" 
                alt="UKAID" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/DFID.png" 
                alt="DFID" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/USAID.png" 
                alt="USAID" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/bill-and-melinda-gates-foundation.png" 
                alt="Bill & Melinda Gates Foundation" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/UN-Women.png" 
                alt="UN Women" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            {/* Second Row */}
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/PSI.png" 
                alt="PSI" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/UNICEF.png" 
                alt="UNICEF" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/john-hopkins.png" 
                alt="Johns Hopkins University" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/UNODC.png" 
                alt="UNODC" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/John-Snow-Inc.png" 
                alt="John Snow, Inc." 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/World-Bank-Group.png" 
                alt="World Bank Group" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            {/* Third Row */}
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/SAARC.png" 
                alt="SAARC" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/European-Union.png" 
                alt="European Union" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/UNDP.png" 
                alt="UNDP" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/ADB.png" 
                alt="ADB" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/FHI-Family-Health-International.png" 
                alt="FHI Family Health International" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/JICA.png" 
                alt="JICA" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            {/* Fourth Row */}
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/ICRC-International-Comite-Geneve.png" 
                alt="ICRC International Committee Geneva" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/Embassy-Of-India.png" 
                alt="Embassy of India" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/BP-Koirala-India-Nepal-Foundation.png" 
                alt="BP Koirala India Nepal Foundation" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/HEALTHRIGHT-INTERNATIONAL.png" 
                alt="HealthRight International" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/Nepal-Red-Cross-Society.png" 
                alt="Nepal Red Cross Society" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/Jayanti-Memorial-Trust.png" 
                alt="Jayanti Memorial Trust" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            {/* Fifth Row */}
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/THE-CARTER-CENTER.png" 
                alt="The Carter Center" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/FLORIDA-STATE-UNIVERSITY.png" 
                alt="Florida State University" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/Jhpiego-An-Affiliate-of-Johns-Hopkins-University.png" 
                alt="Jhpiego - An Affiliate of Johns Hopkins University" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/DOCTORS-OF-THE-WORLD.png" 
                alt="Doctors of the World" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/swc.webp" 
                alt="Social Welfare Council Nepal" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/esara.png" 
                alt="eSARA Nepal" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            {/* Sixth Row */}
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/CAPTIVE-DAUGHTERS-FILMS.png" 
                alt="Captive Daughters Films" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/Nepal_Medical_Association_Logo.jpg" 
                alt="Nepal Medical Association" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
            
            <div style={{
              aspectRatio: '1',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px'
            }}>
              <img 
                src="/assets/images/shared/Far-Too-Young-c4.jpg" 
                alt="Far Too Young" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }} 
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default ProjectsCollaborators