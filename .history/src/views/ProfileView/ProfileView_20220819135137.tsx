import { connect } from 'react-redux'

import ProfileCard, { User } from '../../components/Authentication/ProfileCard'
import Header from '../../components/Header'
import Container from '../../sharedComponents/Container'

declare interface ProfileViewProps {
  user: User
}

const ProfileView = (props) => {
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
    name: 'Mariana Luiza',
    email: 'mariana.luiza@algaworks.com'
  }
})

export default connect(mapStateToProps)(ProfileView)
