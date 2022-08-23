import ProfileCard, { User } from '../components/Authentication/ProfileCard'

import React from 'react'
import { connect } from 'react-redux'

import Container from '../../sharedComponents/Container'

declare interface ProfileViewProps {
  user: User
}

const ProfileView: React.FC<ProfileViewProps> = (props) => {
  return (
    <>
      <Header title="AlgaStock" />
      <Container>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <ProfileCard user={props.user} />
        </div>
      </Container>
    </>
  )
}

const mapStateToProps = () => ({
  user: {
    name: 'Daniel Bonifacio',
    email: 'daniel.bonifacio@algaworks.com'
  }
})

export default connect(mapStateToProps)(ProfileView)
