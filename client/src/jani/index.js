import Profile from "./profile";
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import AgentCard from "./AgentCard";

export default function Manager()
{
const data={
    name:'Sk Mahammad Jani',
    email:'skskjani7@gmail.com',
    location:'Ongole,Andhrapradesh',
    number:9381116577,
    id:1
}


return(

<>
<Topbar/>
<Sidebar/>
<div className="content-body">
    <div className="container-fluid">
     <Profile data={data}/>
     <h1>Agent List</h1>
       <AgentCard data={data}/>

    </div>

</div>

</>

);    



}