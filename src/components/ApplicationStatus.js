import react, { useEffect, useState } from 'react';

import data from '../api/data.json';
import persons from '../api/persons.js';

import './css/applicationstatus.css';

const ApplicationStatus = () => {

  const [person, setPerson] = useState([]);

  const getPerson = async () => {
    const response = await persons.get('');
    const data = await response.data;
    setPerson(data);
  }

  useEffect(() => {
    getPerson();
  }, []);

  return (
    <div>
      <ul>
        {person.map((person) => {
          return(
            <div key={person._id}>
              <li><strong>Minecraft Name: </strong>{person.minecraftName}</li>
              <li><strong>Discord Tag: </strong>{person.discordName}</li>
              <li><strong>Social Media Platform: </strong>{person.socialType}</li>
              <li><strong>Social Name: </strong>{person.socialName}</li>
              <li><strong>Approximate Age Group: </strong>{person.ageGroup}</li>
              <li><strong>Any Other Relevant Information: </strong>{person.info}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
  
export default ApplicationStatus;
