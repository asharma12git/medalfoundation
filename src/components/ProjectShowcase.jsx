import { Link } from 'react-router-dom'

function ProjectShowcase() {
  const currentProjects = {
    mainImages: [
      "/src/assets/images/pages/home/fartooyoung-hami-sana-chau.jpg",
      "/src/assets/images/pages/home/join-the-movvement.jpg"
    ],
    logos: [
      "/src/assets/images/shared/medal-30.png",
      "/src/assets/images/pages/home/upahar.jpg",
      "/src/assets/images/pages/projects-and-collaborators/past-and-present-colaborators/Govt-Nepal.png",
      "/src/assets/images/shared/Far-Too-Young-c4.jpg"
    ]
  }

  const pastProjects = {
    main: "/src/assets/images/pages/home/I-helped-save-a-life.jpg",
    topImages: [
      "/src/assets/images/pages/home/maya.jpg",
      "/src/assets/images/pages/home/katha-bhitra.jpg"
    ],
    bottomImage: "/src/assets/images/pages/home/maynati.jpg"
  }

  return (
    <section style={{ 
      backgroundColor: 'white', 
      padding: '0px 20px 60px 20px' 
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Section Headers */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '60px' }}>
          <Link to="/child-marriage-in-nepal" style={{ textDecoration: 'none' }}>
            <div style={{
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('h2').style.color = '#085c97'
              e.currentTarget.querySelector('h2').style.filter = 'drop-shadow(0 3px 6px rgba(8, 92, 151, 0.3))'
              e.currentTarget.querySelector('span').style.transform = 'translateX(4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector('h2').style.color = '#171717'
              e.currentTarget.querySelector('h2').style.filter = 'none'
              e.currentTarget.querySelector('span').style.transform = 'translateX(0)'
            }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#171717',
                margin: 0,
                textAlign: 'center',
                borderBottom: '3px solid #085c97',
                paddingBottom: '12px',
                transition: 'color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                Current Projects
                <span style={{
                  fontSize: '20px',
                  color: '#085c97',
                  transition: 'transform 0.2s ease'
                }}>→</span>
              </h2>
            </div>
          </Link>
          
          <Link to="/projects" style={{ textDecoration: 'none' }}>
            <div style={{
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.querySelector('h2').style.color = '#a47c43'
              e.currentTarget.querySelector('h2').style.filter = 'drop-shadow(0 3px 6px rgba(164, 124, 67, 0.3))'
              e.currentTarget.querySelector('span').style.transform = 'translateX(4px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector('h2').style.color = '#171717'
              e.currentTarget.querySelector('h2').style.filter = 'none'
              e.currentTarget.querySelector('span').style.transform = 'translateX(0)'
            }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '600',
                color: '#171717',
                margin: 0,
                textAlign: 'center',
                borderBottom: '3px solid #a47c43',
                paddingBottom: '12px',
                transition: 'color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                Past Projects
                <span style={{
                  fontSize: '20px',
                  color: '#a47c43',
                  transition: 'transform 0.2s ease'
                }}>→</span>
              </h2>
            </div>
          </Link>
        </div>

        {/* Row 1: Main Images */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '40px' }}>
          {/* Two main images side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
            {currentProjects.mainImages.map((image, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(8, 92, 151, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(8, 92, 151, 0.1)'
                }}
              >
                <div style={{
                  width: '100%',
                  height: '500px',
                  backgroundImage: `url(${image})`,
                  backgroundSize: '100% 100%',
                  backgroundPosition: 'center'
                }} />
              </div>
            ))}
          </div>
          
          {/* I Helped Save a Life */}
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(0, 0, 0, 0.05)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)'
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(180, 83, 9, 0.15)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(180, 83, 9, 0.1)'
          }}>
            <div style={{
              width: '100%',
              height: '500px',
              backgroundImage: `url(${pastProjects.main})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center'
            }} />
          </div>
        </div>

        {/* Flow indicator */}
        <div style={{ 
          textAlign: 'center', 
          margin: '40px 0',
          opacity: 0.3
        }}>
          <div style={{
            fontSize: '24px',
            color: '#085c97',
            animation: 'bounce 2s infinite'
          }}>
            ↓
          </div>
        </div>

        {/* Row 2: Social Welfare Council and Past Project Images */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '40px' }}>
          {/* Left side: 4 logos at top + Social Welfare Council Certificate below */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* 4 logos in 4x1 row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '15px' }}>
              {currentProjects.logos.map((logo, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(8, 92, 151, 0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(8, 92, 151, 0.1)'
                  }}
                >
                  <div style={{
                    width: '100%',
                    aspectRatio: '1',
                    backgroundImage: `url(${logo})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }} />
                </div>
              ))}
            </div>
            
            {/* Social Welfare Council Certificate */}
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(8, 92, 151, 0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(8, 92, 151, 0.1)'
            }}>
              <div style={{
                width: '100%',
                height: '500px',
                backgroundImage: 'url(/src/assets/images/pages/home/social-welfare-council.png)',
                backgroundSize: '100% 100%',
                backgroundPosition: 'center'
              }} />
            </div>
          </div>
          
          {/* Past project images and Nepal Medical Associations section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Past project images in 2x2 grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {/* Maya */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 2px 8px rgba(180, 83, 9, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(180, 83, 9, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(180, 83, 9, 0.1)'
              }}>
                <div style={{
                  width: '100%',
                  aspectRatio: '1',
                  backgroundImage: `url(${pastProjects.topImages[0]})`,
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }} />
              </div>
              
              {/* Maynati */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 2px 8px rgba(180, 83, 9, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(180, 83, 9, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(180, 83, 9, 0.1)'
              }}>
                <div style={{
                  width: '100%',
                  aspectRatio: '1',
                  backgroundImage: `url(${pastProjects.bottomImage})`,
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }} />
              </div>
              
              {/* Katha */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 2px 8px rgba(180, 83, 9, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(180, 83, 9, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(180, 83, 9, 0.1)'
              }}>
                <div style={{
                  width: '100%',
                  aspectRatio: '1',
                  backgroundImage: `url(${pastProjects.topImages[1]})`,
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }} />
              </div>
              
              {/* Fourth image */}
              <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '8px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                boxShadow: '0 2px 8px rgba(180, 83, 9, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(180, 83, 9, 0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(180, 83, 9, 0.1)'
              }}>
                <div style={{
                  width: '100%',
                  aspectRatio: '1',
                  backgroundImage: 'url(/src/assets/images/pages/home/chameli-poster-2.jpg)',
                  backgroundSize: '100% 100%',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center'
                }} />
              </div>
            </div>

          </div>

        </div>

        {/* Flow indicator */}
        <div style={{ 
          textAlign: 'center', 
          margin: '40px 0',
          opacity: 0.3
        }}>
          <div style={{
            fontSize: '24px',
            color: '#085c97',
            animation: 'bounce 2s infinite'
          }}>
            ↓
          </div>
        </div>

        {/* Nepal Medical Associations Section */}
        <div style={{
          maxWidth: '1400px',
          margin: '20px auto 0 auto',
          textAlign: 'left'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: '#171717',
            margin: '0 0 40px 0',
            textAlign: 'left',
            borderBottom: '3px solid #085c97',
            paddingBottom: '12px',
            display: 'inline-block'
          }}>
            COVID-19: Health Care Protection Initiative
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            <div style={{
              backgroundColor: '#f5f5f7',
              borderRadius: '24px',
              padding: '20px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              aspectRatio: '16/9'
            }}>
              {/* Device bezel */}
              <div style={{
                backgroundColor: '#000',
                borderRadius: '16px',
                padding: '12px',
                height: '100%',
                position: 'relative'
              }}>
                {/* Home indicator */}
                <div style={{
                  position: 'absolute',
                  top: '6px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '4px',
                  backgroundColor: '#333',
                  borderRadius: '2px'
                }} />
                <div style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '100%',
                  backgroundColor: '#000',
                  marginTop: '16px'
                }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/P5agfy2FvR0"
                    title="YouTube video 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div style={{
              backgroundColor: '#f5f5f7',
              borderRadius: '24px',
              padding: '20px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              aspectRatio: '16/9'
            }}>
              {/* Device bezel */}
              <div style={{
                backgroundColor: '#000',
                borderRadius: '16px',
                padding: '12px',
                height: '100%',
                position: 'relative'
              }}>
                {/* Home indicator */}
                <div style={{
                  position: 'absolute',
                  top: '6px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '60px',
                  height: '4px',
                  backgroundColor: '#333',
                  borderRadius: '2px'
                }} />
                <div style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  height: '100%',
                  backgroundColor: '#000',
                  marginTop: '16px'
                }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/iAxYzEaonMc"
                    title="YouTube video 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ProjectShowcase