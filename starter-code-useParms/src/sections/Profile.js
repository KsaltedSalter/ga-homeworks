import React from 'react'
//import { useParams } from 'react-router-dom'
import ProfileHeader from '../components/ProfileHeader'

//const { id } = useParams()

const users = {
  
  robin: {
    username: 'robin',
    displayName: 'Robin James Kerrison',
  },
  tristan: {
    username: 'tristan',
    displayName: 'Tristan Hall',
  },
}

const Profile = ({ username }) => {

  if (!username) {
    return (
      <section className="profile">
        <h2>Profile</h2>
        <p>No user selected</p>
      </section>
    )
  }
  const user = users[username]

  return (
    <section className="profile">
      <h2>Profile</h2>
      <ProfileHeader {...user}></ProfileHeader>
    </section>
  )
}

export default Profile
