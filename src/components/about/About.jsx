import '../about/about.css'
import { useState , useEffect } from 'react'

function About() {
  const [count , setCount]=useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
        setCount(prev => {
        if (prev < 10) return prev + 1; 
        clearInterval(interval);         
        return prev;
    })
  },280);
   return () => clearInterval(interval);
}, []);


  return (
    <div>
      <div className="row">
        <div className="details1 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div className="nameimg">
            <div className="nmimg col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 col-xxl-5">
              <div className="imgbox">
                <img src={require('../../image/blackshhirt.png')} alt="" />
              </div>
            </div>
            <div className="nmmm col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 col-xxl-7">
              <div style={{ padding: '20px' }} className="nmmmmm">
                <p>Name: Manjeet Singh</p>
                <p>Job Role: React Js Developer</p>
                <p>Experience: Fresher</p>
                <p>Address: Alwar, Rajasthan, India</p>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="skill_details">
              <p>React js</p>
              <div className="skill">
                <div className="skill_bar" style={{ width: '95%' }}><h6>90%</h6></div>
              </div>
            </div>
            <div className="skill_details">
              <p>Javascript</p>
              <div className="skill">
                <div className="skill_bar" style={{ width: '90%' }}><h6>90%</h6></div>
              </div>
            </div>
            <div className="skill_details">
              <p>HTML</p>
              <div className="skill">
                <div className="skill_bar" style={{ width: '97%' }}><h6>90%</h6></div>
              </div>
            </div>
            <div className="skill_details">
              <p>CSS</p>
              <div className="skill">
                <div className="skill_bar" style={{ width: '95%' }}><h6>90%</h6></div>
              </div>
            </div>
            <div className="skill_details">
              <p>Bootstrap</p>
              <div className="skill">
                <div className="skill_bar" style={{ width: '85%' }}><h6>90%</h6></div>
              </div>
            </div>
            <div className="skill_details">
              <p>Github</p>
              <div className="skill">
                <div className="skill_bar" style={{ width: '85%' }}><h6>90%</h6></div>
              </div>
            </div>
            <div className="skill_details">
              <p>Node</p>
              <div className="skill">
                <h6>basic</h6>
              </div>
            </div>
            <div className="skill_details">
              <p>Express</p>
              <div className="skill">
                <h6>basic</h6>
              </div>
            </div>
            <div className="skill_details">
              <p>MongoDb</p>
              <div className="skill">
                <h6>basic</h6>
              </div>
            </div>

          </div>
        </div>
        <div className="image1 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div className="aboutme">
            <h1 >About </h1>
            <h2>About Me</h2>
            <p>I'm Manjeet Singh, a Front-End Developer specializing in React.js.
              Currently pursuing my B.A. from Shree Krishna Mahavidya Jalooki Nagar.
              Trained in the MERN stack from DIIT, with hands-on project experience.
              I love building responsive, user-friendly web applications.
              Always eager to learn and grow as a developer.</p>

              <table>
          <tbody>
            <tr>
              <th>Profile</th>
              <td>Front-End Web Developer (React.js & MERN Stack)</td>
            </tr>
            <tr>
              <th>Domain</th>
              <td>Web Development, UI/UX Design, Responsive Design, API Integration</td>
            </tr>
            <tr>
              <th>Education</th>
              <td>
                Bachelor of Arts – Final Year<br />
                Shree Krishna Mahavidya Jalooki Nagar<br />
                (2nd Year: MSBU University)
              </td>
            </tr>
            <tr>
              <th>Languages</th>
              <td>English, Hindi</td>
            </tr>
            <tr>
              <th>Web Technologies</th>
              <td>HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB</td>
            </tr>
            <tr>
              <th>Other Skills</th>
              <td>
                Git & GitHub, REST APIs, Postman, Tailwind CSS, Bootstrap, VS Code, Netlify,
                Vercel
              </td>
            </tr>
            <tr>
              <th>Interests</th>
              <td>Coding, UI Design, Blogging, Teaching, Traveling</td>
            </tr>
          </tbody>
        </table>
          </div>
          

        </div>
        <div className="linkdin col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
          <div className="count"><span style={{color:'gold'}}>{count}</span>&nbsp;&nbsp;+ &nbsp;projects compleated</div>
        </div>
      </div>
    </div>
  )
}

export default About
