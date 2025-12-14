function About() {
  return (
    <div>
      {/* Full-width hero image */}
      <img 
        src="src/assets/images/pages/about/about.jpg" 
        alt="About Medal Foundation" 
        style={{
          width: '100%',
          height: '60vh',
          objectFit: 'cover',
          objectPosition: 'center top',

          display: 'block'
        }} 
      />
      
      {/* Section Title */}
      <section style={{
        backgroundColor: 'white',
        padding: '60px 20px 0px 20px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{
            fontSize: '36px',
            fontWeight: '600',
            color: '#171717',
            marginBottom: '16px',
            lineHeight: '1.2',
            borderBottom: '3px solid #085c97',
            paddingBottom: '12px',
            display: 'inline-block'
          }}>
            30 Years of Service to Humanity
          </h1>
        </div>
      </section>
      
      {/* Paper-like Letter Section */}
      <section style={{
        backgroundColor: 'white',
        padding: '60px 20px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          padding: '60px 40px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.06)',
          border: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
          {/* Centered Logo */}
          <div style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <img 
              src="/src/assets/images/shared/medal-30.png" 
              alt="Medal Foundation 30 Years" 
              style={{
                width: '200px',
                height: 'auto',
                display: 'block',
                margin: '0 auto'
              }} 
            />
          </div>
          
          {/* Letter Content Area */}
          <div style={{
            fontSize: '16px',
            lineHeight: '1.8',
            color: '#374151',
            textAlign: 'justify'
          }}>
            <p style={{ marginBottom: '32px' }}>Media Alert and Relief Foundation was established in 1993 by a group of friends who attended St. Xavier's School, inspired by the school's motto "Live for God, Lead for Nepal." These passionate individuals, with diverse backgrounds and professions, have dedicated their lives to serving their country and uplifting marginalized communities.</p>
            
            <p style={{ marginBottom: '32px' }}>Since its inception, Media Alert and Relief Foundation has established the Father Moran Education Fund, which has provided free education and scholarships to thousands of impoverished children in remote, rural, and urban areas of Nepal.</p>
            
            <p style={{ marginBottom: '32px' }}>Currently, in close collaboration with the American non-profit Far Too Young, Inc., Media Alert is working on an ambitious project to produce an educational film, dedicated to their mentor, <strong>Father Marshall D. Moran</strong>, a Jesuit priest who dedicated his life to education in Nepal and India. The film will highlight the importance of education and its role in preventing issues like early marriage, trafficking, and modern slavery. Avinash Sharma, the founder and CEO of Far Too Young, Inc., is actively supporting Media Alert's fundraising efforts in North America to bring this film to life.</p>
            
            <p>Media Alert and Relief Foundation is a dedicated non-profit organization committed to uplifting marginalized communities in Nepal and South Asia. With a team of passionate individuals from diverse backgrounds, Media Alert has been at the forefront of social change, addressing critical issues such as poverty, gender inequality, and environmental degradation.</p>
            
            <h1 style={{ fontSize: '36px', fontWeight: '700', color: '#085c97', marginTop: '32px', marginBottom: '16px' }}>Our Mission</h1>
            
            <p>Media Alert strives to empower communities through education, awareness, and humanitarian aid. Our core mission is to:</p>
            
            <ul style={{ marginLeft: '20px', marginBottom: '20px', listStyleType: 'disc' }}>
              <li><strong>Promote social justice:</strong> Advocate for the rights of marginalized groups, particularly women and children.</li>
              <li><strong>Enhance quality of life:</strong> Improve the well-being of communities through healthcare, education, and sustainable development initiatives.</li>
              <li><strong>Foster sustainable development:</strong> Promote environmentally friendly practices and sustainable livelihoods.</li>
              <li><strong>Respond to humanitarian crises:</strong> Provide timely relief and support during natural disasters and other emergencies.</li>
            </ul>
            
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#085c97', marginTop: '32px', marginBottom: '16px' }}>Our Impact</h3>
            
            <p>Over the past three decades, Media Alert has made a significant impact on the lives of thousands of people. Our key accomplishments include:</p>
            
            <ul style={{ marginLeft: '20px', marginBottom: '20px', listStyleType: 'disc' }}>
              <li><strong>Community-Based Programs:</strong> Implementing grassroots initiatives to address local needs and empower communities.</li>
              <li><strong>Communication and Outreach:</strong> Utilizing innovative communication strategies to raise awareness and promote social change.</li>
              <li><strong>E-Learning:</strong> Leveraging technology to provide accessible education and training opportunities.</li>
              <li><strong>Humanitarian Aid:</strong> Responding to disasters and emergencies with timely relief and support.</li>
            </ul>
            
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#085c97', marginTop: '32px', marginBottom: '16px' }}>Our Expertise</h3>
            
            <p>Media Alert boasts a wealth of expertise in:</p>
            
            <ul style={{ marginLeft: '20px', marginBottom: '20px', listStyleType: 'disc' }}>
              <li><strong>Community engagement:</strong> Building strong relationships with communities and understanding their unique needs.</li>
              <li><strong>Communication strategies:</strong> Developing and implementing effective communication campaigns.</li>
              <li><strong>Capacity building:</strong> Empowering individuals and organizations through training and skill development.</li>
              <li><strong>Monitoring and evaluation:</strong> Tracking progress and measuring impact.</li>
            </ul>
            
            <p style={{ marginBottom: '32px' }}>By combining these strengths with a deep commitment to social justice, Media Alert continues to make a lasting difference in the lives of those we serve.</p>
            
            <p style={{ marginBottom: '32px' }}><strong>ACTIVE VOLUNTEERS/MEMBERS:</strong> 5006</p>
            <p style={{ marginBottom: '32px' }}><strong>DISTRICTS COVERED BY OUR PROGRAMS:</strong> 48</p>
            <p style={{ marginBottom: '32px' }}><strong>LOCAL PARTNERS:</strong> District Level Hospitals and Health Posts, District Development Committees, Village Development Committees, Youth Clubs, Mothers Groups, Wards, Media, Municipalities, Radio Listeners Groups, Local Theatre Groups, other Local Community Groups, and Civil Societies, etc.</p>
            
            <p>Media Alert and Relief Foundation has worked closely with the Nepal Center for Disaster Management in protecting livelihood and ensuring safety in natural disasters and with hospitals, health posts, and frontline workers in COVID-19 prevention and awareness.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About