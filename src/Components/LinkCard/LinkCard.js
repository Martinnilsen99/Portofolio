
import React, {Component} from "react";
import "../../CSS/LinkCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPortrait } from '@fortawesome/free-solid-svg-icons'
import { CV_Icon } from '../../IMG/Icons/CV_Icon.png'

class LinkCard extends Component{
    render(){
        return(
            <div id="LinkCardContainer">
                <div class="LinkCardBox" id="LinkCardBox1">
                    <a href="https://github.com/Martinnilsen99" target="_blank">
                    <div>
                        <FontAwesomeIcon icon={faGithub} class="LinkCardIcon" alt="Martin Johannes Nilsen's GitHub"/>
                    </div>
                    </a>
                </div>
                <div class="LinkCardBox" id="LinkCardBox2">
                    <a href="https://www.linkedin.com/in/martinnilsen99/" target="_blank">
                    <div>
                        <FontAwesomeIcon icon={faLinkedin} class="LinkCardIcon" alt="Martin Johannes Nilsen's linkedIn"/>
                    </div>
                    </a>
                </div>
                <div class="LinkCardBox" id="LinkCardBox3">
                    <a href="/media/Martin_Johannes_Nilsen_CV.pdf" target="_blank">
                    <div>
                        <FontAwesomeIcon icon={faPortrait} class="LinkCardIcon" id="LinkCardIcon3" alt="Martin Johannes Nilsen's CV"/>
                    </div>
                    </a>
                </div>
            </div>
        )
    }
    
}
export default LinkCard;


/*
<img src={CV_Icon} class="LinkCardIcon" id="LinkCardIcon3" />
*/