import React, { useState } from 'react';

import './css/style.css';
import './css/home.css';
import './css/howtoapply.css';

import axios from 'axios';
import persons from './api/persons.js'

function App()  {
  // States
  const[values, setValues] = useState({
    minecraftName: "",
    discordName: "",
    socialType: null,
    socialName: "",
    ageGroup: null,
    info: ""
  });

  const[submitted, setSubmitted] = useState(false);
  const[valid, setValid] = useState(false);

  // Handlers
  const handleMinecraftNameInputChange = (event) =>  {
    setValues({...values, minecraftName: event.target.value});
  }

  const handleDiscordNameInputChange = (event) =>  {
    setValues({...values, discordName: event.target.value});
  }

  const handleSocialTypeInputChange = (event) =>  {
    setValues({...values, socialType: event.target.value});
  }

  const handleSocialNameInputChange = (event) =>  {
    setValues({...values, socialName: event.target.value});
  }

  const handleAgeGroupInputChange = (event) =>  {
    setValues({...values, ageGroup: event.target.value});
  }

  const handleInfoInputChange = (event) =>  {
    setValues({...values, info: event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(values.minecraftName
      && values.discordName
      && values.socialType
      && values.socialName
      && values.ageGroup) {
        setValid(true);
      }
    setSubmitted(true);
  }

  const getPersons = async () => {
    try {
      const response = await persons.get('');
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    }
    // axios.get(persons).then((response) => {
    //   console.log(response);
    // });
  }

  return(
    <body>
      <header>
        <div id="main-title-background" class="popout">
            <div id="full-logo"></div>
        </div>
      </header>
      <nav id="navigation" class="floatbar box popout">
        <div>
            <ul>
                <li><a href="home.html">Home</a></li>
                <li><a href="home.html">How To Apply</a></li>
                <li><a href="rules.html">Rules</a></li>
                <li><a href="guides.html">Guides</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="aboutus.html">About Us</a></li>
            </ul>
        </div>
      </nav>
      <nav id="social" class="floatbar box popout">
        <div>
            <ul>
                <li><a href="home.html">YouTube</a></li>
                <li><a href="home.html">Instagram</a></li>
                <li><a href="home.html">Twitter</a></li>
                <li><a href="home.html">TikTok</a></li>
                <li><a href="home.html">Facebook</a></li>
                <li><a href="home.html">Snapchat</a></li>
            </ul>
        </div>
      </nav>
      <div class="foreground-background box popout">
        <section id="application" class="main-container-text">
          <h3>The Premiere Non-Reset Minecraft Bedrock Community!</h3>
          <p>If you want to apply for Suave, please carefully fill out our application below.</p>
          <h4>Application</h4>
          <section class="popout-main box">
            <form class="form" onSubmit={handleSubmit}>
              <br />
              {submitted && valid ? <div className="error">Your application has been submitted! Thanks!</div> : null}
              <table>
                <thead></thead>
                  <tbody>
                    <tr>
                      <td>
                        <label>Minecraft: Bedrock Edition Tag</label>
                      </td>
                      <td>
                        <input onChange={handleMinecraftNameInputChange} value={values.minecraftName} type="text" id="minecraftName" name="minecraftName" placeholder="Minecraft: Bedrock Edition Tag" maxlength="32"/>
                        <br />
                        {submitted && !values.minecraftName ? <span className="error">Please enter your Minecraft: Bedrock Edition tag.</span> : null}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Discord Tag</label>
                      </td>
                      <td>
                        <input onChange={handleDiscordNameInputChange} value={values.discordName} type="text" id="discordName" name="discordName" placeholder="e.g. Cokefish#6054" maxlength="32"/>
                        <br />
                        {submitted && !values.discordName ? <span className="error">Please enter your Discord name.</span> : null}
                      </td>
                    </tr>
                    <tr>
                      <td spacing="adjoining-row">
                        <label>Social Media Platform</label>
                      </td>
                      <td spacing="adjoining-row">
                        <input onChange={handleSocialTypeInputChange} value="reddit" type="radio" id="reddit" name="socialMediaPlatform"/>
                        <label for="reddit">Reddit</label>
                        {"\n"}
                        <input onChange={handleSocialTypeInputChange} value="twitter" type="radio" id="twitter" name="socialMediaPlatform"/>
                        <label for="twitter">Twitter</label>
                        <br />
                        {submitted && !values.socialType ? <span className="error">Please select your Social Media Platform type.</span> : null}
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <input onChange={handleSocialNameInputChange} value={values.socialName} type="text" id="socialName" name="socialName" placeholder="Social Media Tag" maxlength="32"/>
                        <br />
                        {submitted && !values.socialName ? <span className="error">Please enter your Social Media Platform name.</span> : null}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Approximate Age Group</label>
                      </td>
                      <td>
                        <select onChange={handleAgeGroupInputChange} values={values.ageGroup} id="ageGroup" name="agegroup">
                          <option value="" selected disabled hidden>Select Your Age Group</option>
                          <option value="adult">Adult</option>
                          <option value="teenager">Teenager</option>
                          <option value="other">Other</option>
                        </select>
                        <br />
                        {submitted && !values.ageGroup ? <span className="error">Please enter your approximate Age Group.</span> : null}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label>Any Other Relevant Information</label>
                      </td>
                      <td>
                        <textarea onChange={handleInfoInputChange} value={values.info} id="information" name="information" maxlength="256"></textarea>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <input onClick={getPersons} class="popout" type="submit" name="submit" value="Submit Application"/>
                        {/* <button class="popout" click="apply">Submit Application</button> */}
                      </td>
                    </tr>
                  </tbody>
                </table>
            </form>
          </section>
          <section>
            <h4>Thank you for your interest in Suave!</h4>
          </section>
        </section>
      </div>
      <footer id="main-footer" class="popout">
        <p>Suave International. All Rights Reserved.</p>
      </footer>
    </body>
  )
}

export default App;

// class App extends React.Component {
//   state = {
//     persons: [],
//   };

//   componentDidMount()  {
//     axios.get(process.env.REACT_APP_PERSONS_URL).then((response) =>  {
//       this.setState({ persons: response.data });
//     });
//   }

//   render()  {
//     const { persons } = this.state;
//     return (
//       <div className="App">
//         <div>
//           <ul className="persons">
//             {persons.map((person) => (
//               <li className="person">
//                 <p><strong>Minecraft: Bedrock Edition Tag: </strong>{person.minecraftName}</p>
//                 <p><strong>Discord Tag: </strong>{person.discordName}</p>
//                 <p><strong>Social Media Platform: </strong>{person.socialType}</p>
//                 <p><strong>Social Name: </strong>{person.socialName}</p>
//                 <p><strong>Approximate Age Group: </strong>{person.ageGroup}</p>
//                 <p><strong>Any Other Relevant Information: </strong>{person.info}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
