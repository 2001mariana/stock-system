export interface User {
  name: string
  email: string
}

declare interface ProfileCardProps {
  user: User
}

const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  return (
    <div style={{ minWidth: 320 }}>
      <Form title="Profile">
        <Input label="Name" value={props.user.name} disabled />
        <Input label="Email" value={props.user.email} disabled />
      </Form>
    </div>
  )
}

export default ProfileCard
