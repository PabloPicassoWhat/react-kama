import React from "react";
import styles from './Users.module.css'

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
        {
          id: 1, photoUrl: 'https://i.timeout.ru/pix/resize/513/464/750x485.jpeg',
          followed: false, fullName: 'Dmitry', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}
        },
        {
          id: 2,
          photoUrl: 'data:image/jpeg;base64,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',
          followed: true,
          fullName: 'Sasha',
          status: 'I am a boss too',
          location: {city: 'Moscow', country: 'Russia'}
        },
        {
          id: 3, photoUrl: 'https://www.eg.ru/wp-content/uploads/2019/08/okk041118.jpg',
          followed: false, fullName: 'Andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}
        },
      ]
    )
  }

  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto}/>
            </div>
            <div>
              { u.followed
                  ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button>
                  : <button onClick={ () => {props.follow(u.id)} }>Follow</button> }
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>)
      }
    </div>
  );
};

export default Users;