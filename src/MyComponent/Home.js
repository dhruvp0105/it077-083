import React from 'react'
import './Home.css';
const Home = () => {
  return (
    <div>
      <div>
        <img className='Image' src="https://images.ctfassets.net/pxcfulgsd9e2/articleImage111708/c01185366ea3df4e7d7fe2f78314cd2c/DM128-Pediatric-care-schedule-Infographic-Working-FINAL-Update_1.png?f=top&fit=fill&fm=webp&h=524&q=85&w=931" width="100" height="600"></img>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className='heading'>
        <h3><ul>Our Services</ul></h3>
        <p>We provide to you the best Choives for you.Vaccination start early in life to protect children before they are exposed to these diseases.</p>
      </div>
      <br></br>
      <br></br>
      <div className='def'>
        <table>
          <tr>
            <td>
              <div className='schedule'>
                <img src='https://www.inducta.hr/wp-content/uploads/2017/01/schedule.png' width="33%" height="80"></img>
                <br></br>
                <h4>Schedule</h4>
                <p>Free consultation with our trusted doctors and get the best recommendation</p>
              </div>
            </td>
            <td>
              <div className='Book_Appointment'>
                <img src='https://www.inducta.hr/wp-content/uploads/2017/01/schedule.png' width="33%" height="80"></img>
                <br></br>
                <h4>Book Appintment</h4>
                <p>You can get for your children and your lovely family</p>
              </div>
            </td>
            <td>
              <div className='Tracking'>
                <img src='https://www.inducta.hr/wp-content/uploads/2017/01/schedule.png' width="33%" height="80"></img>
                <br></br>
                <h4>Tracking</h4>
                <p>Track and save your medical histroy and health data</p>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <br></br>
      <br></br>
      <center>
        <button className='b'>Learn more</button>
      </center>
      <br></br>
      <br></br>
      <table cellPadding="50">
        <tr>
          <td>
            <img src='https://cdn2.momjunction.com/wp-content/uploads/2017/10/Creative3.jpg.webp'></img>
          </td>
          <td>
            <h3>Child Vaccination Guide</h3>
            <br></br>
            <p>Parent Should try to hae their children vaccinated according to the schedule.A significant delay in vaccination puts children at risk according to the serious diseases the vaccines could prevent.If children miss a vaccine dose,parents should talk to their doctors about catching up with the schedule.Missing a dose does not requirw children to restart the series of injection from the beginning.</p>
          </td>
        </tr>
      </table>

    </div>
  )
}

export default Home