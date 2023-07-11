import React from 'react'
import './hero.css'

export default function Hero() {
  return (
    <div className='hero-home'>
      <h1 style={{marginTop:"85px", marginLeft:"80px",paddingTop:"15px"}}>
        IIT INDORE<br/>NIGHT CANTEEN
      </h1>
      <p style={{marginLeft:"80px"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aliquam tempora? Delectus nemo nisi debitis adipisci iure neque necessitatibus expedita ex quas odio? Reiciendis alias quidem architecto. Nostrum, a quaerat?
      </p>
      <img className='hero-photo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWbh6Bu1EncJmpeFof8if_S3KsKFHXWmXxsa7BRT8E4e4FsCEi3bz5WPog8_YbwHaW7I0&usqp=CAU" alt="night-canteen-photo" />
    </div>
  )
}
