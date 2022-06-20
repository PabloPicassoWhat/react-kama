import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import truemark from "../../../assets/images/truemark.png"
import chekmark from "../../../assets/images/mark.png"
import profileimg from "../../../assets/images/profile-picture.png"

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' width="1500px" alt='logoimg' />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large === null ? profileimg : props.profile.photos.large} width="300px" alt='profileimg'/>
        <div>
          <div>
            <div>
              <h3>
                {props.profile.fullName}
              </h3>
              {props.profile.aboutMe}
            </div>
            <div>
              my contacts:
              <ul>
                <li>{props.profile.contacts.facebook === null ? "---" : props.profile.contacts.facebook}</li>
                <li>{props.profile.contacts.website === null ? "---" : props.profile.contacts.website}</li>
                <li>{props.profile.contacts.vk === null ? "---" : props.profile.contacts.vk}</li>
                <li>{props.profile.contacts.twitter === null ? "---" : props.profile.contacts.twitter}</li>
                <li>{props.profile.contacts.instagram === null ? "---" : props.profile.contacts.instagram}</li>
                <li>{props.profile.contacts.youtube === null ? "---" : props.profile.contacts.youtube}</li>
                <li>{props.profile.contacts.github === null ? "---" : props.profile.contacts.github}</li>
                <li>{props.profile.contacts.mainLink === null ? "---" : props.profile.contacts.mainLink}</li>
              </ul>
            </div>
            <div>
              <span>
                в поске работы: {props.profile.lookingForAJob === true ? <img src={truemark} alt='yes' width="50px"/> : <img src={chekmark} alt='no' width="50px"/>}
              </span>
              <div>
                {props.profile.lookingForAJobDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;