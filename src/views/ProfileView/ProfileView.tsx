import React from 'react'
import { connect } from 'react-redux'

import ProfileCard, { User } from '../../components/Authentication/ProfileCard'
import Header from '../../components/Header'
import Container from '../../sharedComponents/Container'
import withPermission from '../../utils/HOC/withPermission'

declare interface ProfileViewProps {
  user: User
}

const ProfileView = ({ user }: ProfileViewProps) => {
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
          <ProfileCard user={user} />
        </div>
      </Container>
    </>
  )
}

const mapStateToProps = () => ({
  user: {
    name: 'Mariana Luiza',
    email: 'mariana.luiza@algaworks.com'
  }
})

export default connect(mapStateToProps)(
  withPermission(['admin', 'customer'], '/')(ProfileView)
)
