// Write your code here
import './index.css'

const TeamMemberCard = props => {
  const {imageUrl, name, role, department} = props
  return (
    <div className="member-card">
      <img src={imageUrl} className="member-img" alt={name} />
      <h1 className="member-name"> {name} </h1>
      <p className="member-role"> {role} </p>
      <p className="member-department">Department: {department}</p>
    </div>
  )
}
export default TeamMemberCard
