import Form from '../../sharedComponents/Form'
import Input from '../../sharedComponents/Input'

export interface User {
  name: string
  email: string
}

declare interface ProfileCardProps {
  user: User
}

const ProfileCard = ({ user }: ProfileCardProps) => {
  return (
    <div style={{ minWidth: 320 }}>
      <Form title="Profile">
        <Input label="Name" value={user.name} disabled />
        <Input label="Email" value={user.email} disabled />
      </Form>
    </div>
  )
}

export default ProfileCard
