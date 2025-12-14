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
          <div style={{
            textAlign: 'center',
            padding: '16px 24px',
            background: 'linear-gradient(135deg, rgba(8, 92, 151, 0.3) 0%, rgba(8, 92, 151, 0.18) 100%)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            border: '1px solid rgba(8, 92, 151, 0.5)',
            boxShadow: '0 4px 12px rgba(8, 92, 151, 0.2)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(8, 92, 151, 0.2)'
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(8, 92, 151, 0.4) 0%, rgba(8, 92, 151, 0.25) 100%)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(8, 92, 151, 0.1)'
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(8, 92, 151, 0.3) 0%, rgba(8, 92, 151, 0.18) 100%)'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '500',
              color: '#171717',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              Current Projects
              <span style={{
                fontSize: '16px',
                color: '#085c97',
                transition: 'transform 0.3s ease'
              }}>→</span>
            </h2>
          </div>
          
          <div style={{
            textAlign: 'center',
            padding: '16px 24px',
            background: 'linear-gradient(135deg, rgba(218, 165, 32, 0.35) 0%, rgba(218, 165, 32, 0.22) 100%)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            border: '1px solid rgba(218, 165, 32, 0.6)',
            boxShadow: '0 4px 12px rgba(218, 165, 32, 0.3)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(218, 165, 32, 0.3)'
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(218, 165, 32, 0.5) 0%, rgba(218, 165, 32, 0.32) 100%)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(218, 165, 32, 0.2)'
            e.currentTarget.style.background = 'linear-gradient(135deg, rgba(218, 165, 32, 0.35) 0%, rgba(218, 165, 32, 0.22) 100%)'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '500',
              color: '#171717',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}>
              Past Projects
              <span style={{
                fontSize: '16px',
                color: '#DAA520',
                transition: 'transform 0.3s ease'
              }}>→</span>
            </h2>
          </div>
        </div>

        {/* Row 1: Main Images */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '60px' }}>
          {/* Two main images side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            {currentProjects.mainImages.map((image, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: '1px solid rgba(8, 92, 151, 0.2)',
                  boxShadow: '0 4px 12px rgba(8, 92, 151, 0.1)',
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
            border: '1px solid rgba(180, 83, 9, 0.2)',
            boxShadow: '0 4px 12px rgba(180, 83, 9, 0.1)',
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

        {/* Row 2: Social Welfare Council and Past Project Images */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '60px' }}>
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
                    border: '1px solid rgba(8, 92, 151, 0.2)',
                    boxShadow: '0 2px 8px rgba(8, 92, 151, 0.1)',
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
              border: '1px solid rgba(8, 92, 151, 0.2)',
              boxShadow: '0 4px 12px rgba(8, 92, 151, 0.1)',
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
                border: '1px solid rgba(180, 83, 9, 0.2)',
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
                border: '1px solid rgba(180, 83, 9, 0.2)',
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
                border: '1px solid rgba(180, 83, 9, 0.2)',
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
              
              {/* Fourth image - blank */}
              <div></div>
            </div>
            
            {/* Nepal Medical Associations Section */}
            <div style={{ marginTop: '60px' }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '500',
                color: '#171717',
                marginBottom: '20px',
                textAlign: 'left'
              }}>
                Nepal Medical Associations Presents
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(180, 83, 9, 0.2)',
                  boxShadow: '0 2px 8px rgba(180, 83, 9, 0.1)',
                  aspectRatio: '16/9'
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
                <div style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  border: '1px solid rgba(180, 83, 9, 0.2)',
                  boxShadow: '0 2px 8px rgba(180, 83, 9, 0.1)',
                  aspectRatio: '16/9'
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