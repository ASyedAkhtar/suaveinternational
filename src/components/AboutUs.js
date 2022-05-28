import './css/aboutus.css';

const AboutUs = () => {
  return (
    <div>
      <div id="pictureplayerone" class="player-picture popout box"></div>
      <div class="player-content box">
        <h4>Cokefish</h4>
        <span>Cokefish is the founder of Suave International. He loves building elegant 
        structures and terraforming in Minecraft. In his spare time he likes to design RC 
        aircraft and go hiking.</span>
        <span>On Suave, he is the administrator of Ardennestown, and likes to help out with
        various Dreamville projects.
        </span>
      </div>
      <br />
      <div class="player-content box">
        <h4>Kayrat</h4>
          <span>Kayrat is the head administrator of Suave International. His specialty is in constructing
          redstone gadgets and medieval towns. In his spare time he likes to solve math problems and
          technical challenges.</span>
          <span>On Suave, he is the administrator of Torrac, and helps build the many mob, item, and XP
          farms that dot Suave.
          </span>
      </div>
      <div id="pictureplayertwo" class="player-picture popout box"></div>
      <br />
      <div id="pictureplayerthree" class="player-picture popout box"></div>
      <div class="player-content box">
        <h4>LemonHades</h4>
        <span>LemonHades is a chief builder of Suave International. He loves 
        building lively and colorful scenes, using a combination of nature and simple materials
        to craft engaging centerpieces. In his spare time he goes outside.</span>
        <span>On Suave, he is the co-owner of Dreamville, and likes inviting and showing new players
        around.
        </span>
      </div>
    </div>
  );
}
  
export default AboutUs;
  