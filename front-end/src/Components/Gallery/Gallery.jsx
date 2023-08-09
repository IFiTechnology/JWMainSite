import React from 'react'
import './Gallery.css'

const Gallery = () => {
  return (
    <div>
      <div className="aboutCard">
        {/* <div className="aboutIMG">
          <img src={aboutF} alt="" />
          <img src={aboutB} alt="" />
        </div> */}
        <div class="card">
          <div class="card__face card__face--front">
            <img src={aboutF}/>
          </div>
          <div class="card__face card__face--back">
            <img src={aboutB} />
          </div>
        </div>
        
        <div className="aboutText">
          <h3>About Us</h3>
          <p>
            Just worship is an annual worship and praise outreach, organized by
            a team of worship leaders in and outside Nigeria with the sole
            intent of inspiring intimacy with God through worship and praise.
          </p>

          <h3>Our Mission</h3>
          <p>
            Our mission is to inspire intimacy with GOD through Worship and
            Praise and also reaching out to the unreached.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Gallery
