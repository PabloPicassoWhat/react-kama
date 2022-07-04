import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import truemark from "../../../assets/images/truemark.png";
import chekmark from "../../../assets/images/mark.png";
import profileimg from "../../../assets/images/profile-picture.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large === null ? profileimg : profile.photos.large} width="300px" alt='profileimg'/>
        <div>
          <div>
            <div>
              <h3>
                {profile.fullName}
              </h3>
              <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
              {profile.aboutMe}
            </div>
            <div>
              my contacts:
              <ul>
                <li>{profile.contacts.facebook === null ? "---" : profile.contacts.facebook}</li>
                <li>{profile.contacts.website === null ? "---" : profile.contacts.website}</li>
                <li>{profile.contacts.vk === null ? "---" : profile.contacts.vk}</li>
                <li>{profile.contacts.twitter === null ? "---" : profile.contacts.twitter}</li>
                <li>{profile.contacts.instagram === null ? "---" : profile.contacts.instagram}</li>
                <li>{profile.contacts.youtube === null ? "---" : profile.contacts.youtube}</li>
                <li>{profile.contacts.github === null ? "---" : profile.contacts.github}</li>
                <li>{profile.contacts.mainLink === null ? "---" : profile.contacts.mainLink}</li>
              </ul>
            </div>
            <div>
              <span>
                в поиске работы: {profile.lookingForAJob === true ? <img src={truemark} alt='yes' width="50px"/> : <img src={chekmark} alt='no' width="50px"/>}
              </span>
              <div>
                {profile.lookingForAJobDescription}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;