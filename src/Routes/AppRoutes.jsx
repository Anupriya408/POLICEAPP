import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Users from "../Pages/Users";
import Update from "../Pages/Update";
import Police from "../Pages/Police";
import Complains from "../Pages/Complains";
import Emergency from "../Pages/Emergency";
import Messages from "../Pages/Messages";
import AllPendingStatus from "../Pages/AllPendingStatus";
import Completed from "../Pages/Completed";
import Approved from "../Pages/Approved";


function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/update" element={<Update/>}/>
            <Route path="/police" element={<Police/>}/>
            <Route path="/complains" element={<Complains/>}/>
            <Route path="/emergency" element={<Emergency/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/allpendingstatus" element={<AllPendingStatus/>}/>
            <Route path="/completed" element={<Completed/>}/>
            <Route path="/approved" element={<Approved/>}/>

        </Routes>
    )
}
export default AppRoutes