import React, { useEffect, useState } from 'react';

import personList from '../api/person/list.js';

import './css/applicationstatus.css';

const ApplicationStatus = () => {

  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getPersons();
  }, []);

  const getPersons = async () => {
    const response = await personList.get('');
    const data = await response.data;
    setPersons(data);
  }

  return(
    <div>
      <ul>
        {persons.map((person) => {
          return(
            <div key={person._id}>
              <br />
              <li><strong>Minecraft Name: </strong>{person.minecraftName}</li>
              <li><strong>Discord Tag: </strong>{person.discordName}</li>
              <li><strong>Social Media Platform: </strong>{person.socialType}</li>
              <li><strong>Social Name: </strong>{person.socialName}</li>
              <li><strong>Approximate Age Group: </strong>{person.ageGroup}</li>
              <li><strong>Any Other Relevant Information: </strong>{person.info}</li>
              <br />
              <ul>
                {person.achievements.map((personAchievement, i) => {
                  return(
                    <div>
                      <li><strong>Achievement {i+1}: </strong>{personAchievement.status}</li>
                      <li><strong>Date {i+1}: </strong>{personAchievement.date}</li>
                    </div>
                  );
                })}
              </ul>
              <br />
            </div>
          );
        })}
      </ul>
    </div>
  );
}
  
export default ApplicationStatus;
