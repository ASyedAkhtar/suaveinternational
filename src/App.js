import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './components/css/style.css';
import './components/css/home.css';

import Header from './components/Header.js';
import Nav from './components/Nav.js';
import Home from './components/Home.js';
import Gallery from './components/Gallery.js';
import ApplicationStatus from './components/ApplicationStatus.js';
import HowToApply from './components/HowToApply.js';
import AboutUs from './components/AboutUs.js';
import Footer from './components/Footer.js';

import Resource from './constants/Resource.js';

const App = () => {
  return(
    <body>
      <Header />
      <Nav />
      <div class="foreground-background box popout">
        <section id="application" class="main-container-text">
          <h3>The Premiere Non-Reset Minecraft Community!</h3>
          <section class="popout-main">
            <Routes>
              <Route path={Resource.ABOUTUS} element={<AboutUs />} />
              <Route path={Resource.HOWTOAPPLY} element={<HowToApply />} />
              <Route path={Resource.APPLICATIONSTATUS} element={<ApplicationStatus />} />
              <Route path={Resource.GALLERY} element={<Gallery />} />
              <Route path={Resource.BASE} element={<Home />} />
            </Routes>
          </section>
          <section>
            <h4>Thank you for your interest in Suave!</h4>
          </section>
        </section>
      </div>
      <Footer />
    </body>
  );
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
//                 <p><strong>Minecraft Tag: </strong>{person.minecraftName}</p>
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
