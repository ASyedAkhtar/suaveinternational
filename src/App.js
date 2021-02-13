import React, { Component } from 'react';
import Todos from './components/Todos';
import './css/style.css';
import './css/home.css';
import axios from 'axios';

// function App() {
//   return(
//       <div classNameName = 'root-container'>
//         <header>
//           <div id="main-title-background" className="popout">
//             <div id="full-logo"></div>
//           </div>
//         </header>
//         <nav id="navigation" className="floatbar box popout">
//           <div>
//             <ul>
//               <li><a href="#">Home</a></li><hr style={{ borderColor: '#008B8B',
//                                                         borderWidth: 2,
//                                                         margin: 0}}/>
//               <li><a href="howtoapply.html">How To Apply</a></li><hr style={{ borderColor: '#008B8B',
//                                                         borderWidth: 2,
//                                                         margin: 0}}/>
//               <li><a href="rules.html">Rules</a></li><hr style={{ borderColor: '#008B8B',
//                                                         borderWidth: 2,
//                                                         margin: 0}}/>
//               <li><a href="guides.html">Guides</a></li><hr style={{ borderColor: '#008B8B',
//                                                         borderWidth: 2,
//                                                         margin: 0}}/>
//               <li><a href="gallery.html">Gallery</a></li><hr style={{ borderColor: '#008B8B',
//                                                         borderWidth: 2,
//                                                         margin: 0}}/>
//               <li><a href="aboutus.html">About Us</a></li>
//             </ul>
//           </div>
//         </nav>
//         <nav id="social" className="floatbar box popout">
//           <div>
//             <ul>
//               <li><a href="#">YouTube</a></li><hr style={{ borderColor: '#008B8B',
//                                                         borderWidth: 2,
//                                                         margin: 0}}/>
//               <li><a href="#">Instagram</a></li><hr style={{ borderColor: '#008B8B',
//                                                         borderWidth: 2,
//                                                         margin: 0}}/>
//               <li><a href="#">Twitter</a></li><hr style={{ borderColor: '#008B8B',
//                                                         borderWidth: 2,
//                                                         margin: 0}}/>
//               <li><a href="#">TikTok</a></li><hr style={{ borderColor: '#008B8B',
//                                                         borderWidth: 2,
//                                                         margin: 0}}/>
//               <li><a href="#">Facebook</a></li><hr style={{ borderColor: '#008B8B',
//                                                         borderWidth: 2,
//                                                         margin: 0}}/>
//               <li><a href="#">Snapchat</a></li>
//             </ul>
//           </div>
//         </nav>
//         <div className="foreground-background box popout">
//           <section id="news" className="main-container-text">
//             <h3>The Premiere Non-Reset Minecraft Bedrock Community!</h3>
//             <h4>News</h4>
//             <section className="popout-main box">
//               <div id="newspictureone" className="news-picture popout box"></div>
//               <div className="news-content box">
//                 <h4>Website Grand Opening!</h4>
//                 <h6>February 28th, 2021</h6>
//                 <span>Hello world! Today marks the launch of the Suave International
//                     Website! After weeks of construction we are pleased to finally
//                     open up to the public.
//                 </span>
//               </div>
//             </section>
//           </section>
//         </div>
//         <footer id="main-footer" className="popout">
//           <p>Suave International. All Rights Reserved.</p>
//         </footer>
//       </div>
//   );
// }
class App extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount()  {
    axios.get(process.env.REACT_APP_PERSONS_URL).then((response) =>  {
      this.setState({ persons: response.data });
    });
  }

  render()  {
    const { persons } = this.state;
    return (
      <div classNameName="App">
        <ul className="persons">
          {persons.map((person) => (
            <li className="person">
              <p><strong>Minecraft: Bedrock Edition Tag: </strong>{person.minecraftName}</p>
              <p><strong>Discord Tag: </strong>{person.discordName}</p>
              <p><strong>Social Media Platform: </strong>{person.socialType}</p>
              <p><strong>Social Name: </strong>{person.socialName}</p>
              <p><strong>Approximate Age Group: </strong>{person.ageGroup}</p>
              <p><strong>Any Other Relevant Information: </strong>{person.info}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
