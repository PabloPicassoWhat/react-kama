import React, {useState} from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import truemark from "../../../assets/images/truemark.png";
import chekmark from "../../../assets/images/mark.png";
import profileimg from "../../../assets/images/profile-picture.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

  const [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    );
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large === null ? profileimg : profile.photos.large} width="300px" alt='profileimg'/>
        <div>{ isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}</div>
        <div>
          <div>
            <h3>
              {profile.fullName}
            </h3>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            {profile.aboutMe}
          </div>
          { editMode
            ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
            : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/> }
        </div>
      </div>
    </div>
  );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
  return (
    <div>
      <div className={s.myContacts}>
        <b>My contacts</b>: {Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
      })}
      </div>
      <div>
        <span>
          <b>looking for a job:</b> {profile.lookingForAJob === true ? <img src={truemark} alt='yes' width="50px"/> : <img src={chekmark} alt='no' width="50px"/>}
        </span>
        <div>
          {profile.lookingForAJobDescription}
        </div>
      </div>
      {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
    </div>
  );
}

const Contact = ({contactTitle, contactValue}) => {
  return <div className={s.contact}><b>{contactTitle}:</b> {contactValue}</div>
}

export default ProfileInfo;