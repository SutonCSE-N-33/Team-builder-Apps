import { useEffect, useState } from 'react';
import AddMember from './Components/Team/AddMember/AddMember';
import Team from './Components/Team/Team';

function App() {
const [team,setTeam] = useState([]);
useEffect(()=> {
  fetch(`https://randomuser.me/api/?results=20`)
.then(rest => rest.json())
.then(data => setTeam(data.results))
.catch(error => console.log(error));
},[])
 

const [addMember,setAddMember] = useState([]);
const addMemberHandle = member =>{
  const newAddMember = [...addMember,member];
  setAddMember(newAddMember);
}

  return (
    <div style={{padding:"20px"}}>
      <h1><u>Team Bulder</u></h1>
       <div style={{display:"flex"}}>
       <div style={{width:"70%",padding:"20px"}}>
           {
             team.map(member => <Team addMemberHandle={addMemberHandle} member={member}></Team>)
           }
       </div>
       <div style={{padding:"10px",borderRadius:"5px",boxShadow:"0 0 5px lightGreen",height:"300px",overflow:"scroll"}}>
       <h1>Added Member</h1>
        <AddMember addMember={addMember}></AddMember>
       </div>
       </div>
    </div>
  );
}

export default App;
