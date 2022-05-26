import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './css/style.css';
import './css/home.css';

import AboutUs from './components/AboutUs';
import ApplicationStatus from './components/ApplicationStatus';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import HowToApply from './components/HowToApply';
import Nav from './components/Nav';

function App()  {

  return(
    <body>
      <Header />
      <Nav />
      <div class="foreground-background box popout">
        <section id="application" class="main-container-text">
          <h3>The Premiere Non-Reset Minecraft Bedrock Community!</h3>
          <section class="popout-main box">
            <Routes>
              <Route path={process.env.REACT_APP_HOME_URL} element={<Home />} />
              <Route path={process.env.REACT_APP_APPLICATIONSTATUS_URL} element={<ApplicationStatus />} />
              <Route path={process.env.REACT_APP_HOWTOAPPLY_URL} element={<HowToApply />} />
              <Route path={process.env.REACT_APP_ABOUTUS_URL} element={<AboutUs />} />
            </Routes>
          </section>
          <section>
            <h4>Thank you for your interest in Suave!</h4>
          </section>
        </section>
      </div>
      <Footer />
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
