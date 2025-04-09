import './Users.css';
const Users = (props)=>{
    return(
        <div className="users">
        {props.users.map((user,i)=><p key={i} className="users__user">{`${user.name}(${user.age} years old)`}</p>)}
        </div>
    )
}
export default Users;