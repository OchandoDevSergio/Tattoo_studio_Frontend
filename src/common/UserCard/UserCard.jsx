import "./UserCard.css";
import Button from 'react-bootstrap/Button';


export const UserCard = ({ id, role_id, name, surnames, phone, update}) => {
  
    return (
    <div>
      <Button variant="primary" className="userDesign">
      <div><span className="bold">User identification number:</span> {id} <span className="bold">Role:</span> 
      {role_id === 1 && (<span>Admin</span>)}
      {role_id === 2 && (<span>Customer</span>)}
      {role_id === 3 && (<span>Artist</span>)}
      </div>
      <div> <span className="bold">Name:</span> {name} <span className="bold">Surnames:</span> {surnames}</div>
      <div><span className="bold">Phone:</span> {phone}</div>
      </Button>
  
      
    </div>
    );   
  }