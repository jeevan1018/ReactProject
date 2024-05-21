import React from 'react'
import StadiumProps from './StadiumProps'
import Navbar from '../../navbar/Navbar'
import Footer from '../../navbar/Footer'

const Motera = () => {
  return (
    <div>
      <Navbar/>
      <StadiumProps img1={"https://assets.cntraveller.in/photos/60ba1bddd2d37295460ae843/16:9/w_1024%2Cc_limit/Motera-stadium-.jpeg"}  img2={"https://images.hindustantimes.com/img/2021/02/24/1600x900/PTI02_22_2021_000246B_1614152879632_1614152911612.jpg"}   img3={"https://th.bing.com/th/id/OIP.SOgxChIJTsZqx_ZjR3e3iwHaEK?rs=1&pid=ImgDetMain"}   img4={"https://www.icccricketschedule.com/wp-content/uploads/2021/03/thequint_2021-02_0d53d9a8-d2e3-4de2-9419-cbc7d8a1dd78__AI_1892-1.jpg"} about={"The Narendra Modi stadium stands on the same plot where the Sardar Patel Stadium was present from 1982 to 2015, until its demolition.[8] It served as the main venue of domestic and international cricket in the city till 2015. It hosted some matches during the 1987, 1996, and 2011 ICC World Cups.[16][17][18] The Gujarat Cricket Association (GCA) scrapped the Sardar Patel Stadium in 2015 to build a state of the art and the world's biggest cricket stadium. The Narendra Modi stadium is designed by Australia's design firm Populous and built by Larsen and Toubro. It took 5 years to build, at an estimated cost of ₹800 crore (US$100 million). The arena replaced the iconic Melbourne Cricket Ground as the world's largest cricket stadium. The headquarter of the GCA is located in its premises. The Narendra Modi stadium has 4 dressing rooms, 11 center pitches, and 2 practice grounds that can host practice as well as domestic matches etc.[16][8][19][20]"} name={"Narendra Modi Stadium"} city={"Ahmedabad"}  capacity={"1,30,000"}/>
   <Footer/>
    </div>
  )
}

export default Motera
