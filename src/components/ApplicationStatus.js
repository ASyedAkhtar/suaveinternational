import persons from '../api/persons'

const ApplicationStatus = () => {

  const getPersons = async () => {
    try {
      const response = await persons.get('');
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    }
  }

  return (
    <ul className='persons'>
      {{getPersons}.map((person) => (
        <li className='person'>
          <p><strong>Minecraft: Bedrock Edition Tag: </strong>{person.minecraftName}</p>
          <p><strong>Discord Tag: </strong>{person.discordName}</p>
          <p><strong>Social Media Platform: </strong>{person.socialType}</p>
          <p><strong>Social Name: </strong>{person.socialName}</p>
          <p><strong>Approximate Age Group: </strong>{person.ageGroup}</p>
          <p><strong>Any Other Relevant Information: </strong>{person.info}</p>
        </li>
      ))}
    </ul>
  )
}
  
export default ApplicationStatus;
