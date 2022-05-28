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
            <div>
              <li key={person._id}><strong>Minecraft Name: </strong>{person.minecraftName}</li>
              <li key={person._id}><strong>Discord Tag: </strong>{person.discordName}</li>
              <li key={person._id}><strong>Social Media Platform: </strong>{person.socialType}</li>
              <li key={person._id}><strong>Social Name: </strong>{person.socialName}</li>
              <li key={person._id}><strong>Approximate Age Group: </strong>{person.ageGroup}</li>
              <li key={person._id}><strong>Any Other Relevant Information: </strong>{person.info}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
  
export default ApplicationStatus;
