import React, { useState } from 'react';

import personCreate from '../api/person/create.js';

import './css/howtoapply.css';

const HowToApply = () => {

  // States
  const [values, setValues] = useState({
    minecraftName: "",
    discordName: "",
    socialType: null,
    socialName: "",
    ageGroup: null,
    info: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

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
        setPerson();
    }
    setSubmitted(true);
  }

  const setPerson = async () => {
    const request = await personCreate.post('', {
      minecraftName: values.minecraftName,
      discordName: values.discordName,
      socialType: values.socialType,
      socialName: values.socialName,
      ageGroup: values.ageGroup,
      info: values.info
    });
  }

  return(
    <form className='form' onSubmit={handleSubmit}>
      <br />
      {submitted && valid ? <div className='error'>Your application has been submitted! Thanks!</div> :
        <table>
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <label>Minecraft Tag</label>
              </td>
              <td>
                <input onChange={handleMinecraftNameInputChange} value={values.minecraftName} type='text' id='minecraftName' name='minecraftName' placeholder='e.g. CokefishR7166' maxlength='64'/>
                <br />
                {submitted && !values.minecraftName ? <span className='error'>Please enter your Minecraft tag.</span> : null}
              </td>
            </tr>
            <tr>
              <td>
                <label>Discord Tag</label>
              </td>
              <td>
                <input onChange={handleDiscordNameInputChange} value={values.discordName} type='text' id='discordName' name='discordName' placeholder='e.g. Cokefish#6054' maxlength='64'/>
                <br />
                {submitted && !values.discordName ? <span className='error'>Please enter your Discord name.</span> : null}
              </td>
            </tr>
            <tr>
              <td spacing='adjoining-row'>
                <label>Social Media Platform</label>
              </td>
              <td spacing='adjoining-row'>
                <input onChange={handleSocialTypeInputChange} value='reddit' type='radio' id='reddit' name='socialMediaPlatform'/>
                <label for='reddit'>Reddit</label>
                {"\n"}
                <input onChange={handleSocialTypeInputChange} value='twitter' type='radio' id='twitter' name='socialMediaPlatform'/>
                <label for='twitter'>Twitter</label>
                <br />
                {submitted && !values.socialType ? <span className='error'>Please select your Social Media Platform type.</span> : null}
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input onChange={handleSocialNameInputChange} value={values.socialName} type='text' id='socialName' name='socialName' placeholder='e.g. MinecartCataphract' maxlength='64'/>
                <br />
                {submitted && !values.socialName ? <span className='error'>Please enter your Social Media Platform name.</span> : null}
              </td>
            </tr>
            <tr>
              <td>
                <label>Approximate Age Group</label>
              </td>
              <td>
                <select onChange={handleAgeGroupInputChange} values={values.ageGroup} id='ageGroup' name='agegroup'>
                  <option value='' selected disabled hidden>Select Your Age Group</option>
                  <option value='adult'>Adult</option>
                  <option value='teenager'>Teenager</option>
                  <option value='other'>Other</option>
                </select>
                <br />
                {submitted && !values.ageGroup ? <span className='error'>Please enter your approximate Age Group.</span> : null}
              </td>
            </tr>
            <tr>
              <td>
                <label>Any Other Relevant Information</label>
              </td>
              <td>
                <textarea onChange={handleInfoInputChange} value={values.info} id='information' name='information' maxlength='256'></textarea>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input className='popout' type='submit' name='submit' value='Submit Application'/>
              </td>
            </tr>
          </tbody>
        </table>
      }
    </form>
  );
}
  
export default HowToApply;
  