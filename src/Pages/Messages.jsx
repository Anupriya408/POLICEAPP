import "bootstrap/dist/css/bootstrap.min.css";
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa6";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { FaIntercom } from "react-icons/fa";
import { MdEmergency } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { GrUpdate } from "react-icons/gr";
import { FiLogOut } from "react-icons/fi";
import { MdIncompleteCircle } from "react-icons/md";
import { FcApprove } from "react-icons/fc";
import { MdOutlinePending } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Messages() {
  const navigate=useNavigate();

  return (
    <div className="d-flex justify-content-center align-items-start">
      <div className="bg-dark text-white width-fiftheen">
      <div className="p-3 d-flex justify-content-center align-item-center">
          <div className="logo-image-box">
            <img className="full-screen" src="https://cdn-icons-png.flaticon.com/128/5600/5600529.png" alt="logo" />
          </div>
        </div>
        <div className="mt-1 p-2 d-flex flex-column ">
          <div className="py-2 px-4 mb-2 cursor-pointer"  onClick={()=>navigate("/dashboard")}>
            <div className="d-flex justify-content-left align-items-center text-white ">
              <MdDashboard />
              <span className="ms-2">Dashboard</span>
            </div>
          </div>
          <div className="py-2 px-4 mb-2 cursor-pointer"  onClick={()=>navigate("/users")}>
            <div className="d-flex justify-content-left align-items-center text-white">
              <FaUsers />
              <span className="ms-2">Users</span>
            </div>
          </div>
          <div className="py-2 px-4 mb-2 cursor-pointer"  onClick={()=>navigate("/police")}>
            <div className="d-flex justify-content-left align-items-center text-white">
              <GiPoliceOfficerHead />
              <span className="ms-2">Police</span>
            </div>
          </div>
          <div className="py-2 px-4 mb-2 cursor-pointer"  onClick={()=>navigate("/complains")}>
            <div className="d-flex justify-content-left align-items-center text-white">
              <FaIntercom />
              <span className="ms-2">Complains</span>
            </div>
          </div>
          <div className="py-2 px-4 mb-2  cursor-pointer" onClick={()=>navigate("/allpendingstatus")}>
          <div className="d-flex justify-content-left align-items-center text-white">
          <MdOutlinePending />

            <span className="ms-2">All Pending Status</span>
          </div>
        </div>
        <div className="py-2 px-4 mb-2cursor-pointer" onClick={()=>navigate("/completed")}>
        <div className="d-flex justify-content-left align-items-center text-white">
        <MdIncompleteCircle />

          <span className="ms-2">Completed</span>
        </div>
      </div>
      <div className="py-2 px-4 mb-2  cursor-pointer" onClick={()=>navigate("/approved")}>
      <div className="d-flex justify-content-left align-items-center text-white">
      <FcApprove />

        <span className="ms-2">Approved</span>
      </div>
    </div>
          <div className="py-2 px-4 mb-2 cursor-pointer"  onClick={()=>navigate("/emergency")}>
            <div className="d-flex justify-content-left align-items-center text-white">
              <MdEmergency />

              <span className="ms-2">Emergency</span>
            </div>
          </div>
          <div className="py-2 px-4 mb-2 bg-primary rounded-3 cursor-pointer" onClick={()=>navigate("/messages")}>
            <div className="d-flex justify-content-left align-items-center text-white">
              <LuMessagesSquare />

              <span className="ms-2">Messages</span>
            </div>
          </div>
          <div className="py-2 px-4 mb-2 cursor-pointer"  onClick={()=>navigate("/update")}>
            <div className="d-flex justify-content-left align-items-center text-white">
              <GrUpdate />

              <span className="ms-2">Update</span>
            </div>
          </div>
          <div className="py-2 px-4 mb-2 cursor-pointer"  onClick={()=>navigate("/")}>
            <div className="d-flex justify-content-left align-items-center text-white">
              <FiLogOut />

              <span className="ms-2">Log Out</span>
            </div>
          </div>
        </div>
      </div>
      <div className="width-eighty-five">
        <Navbar/>
        <div className="p-3">
          <div className="position-relative">
            <h2 className="text-align-left">Message</h2>
            <div className="mt-3 overflow-hide">
              <table className="table-style">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="py-2 font-fiftheen">MESSAGE</th>
                    <th className="py-2 font-fiftheen">LOCATION</th>
                    <th className="py-2 font-fiftheen">REPLY FROM</th>
                    <th className="py-2 font-fiftheen">BATCH ID</th>
                    <th className="py-2 font-fiftheen">RESOLUTION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Message</td>
                    <td>name</td>
                    <td>Avi Das</td>
                    <td>874565</td>
                    <td>
                      <button className="btn btn-success text-white border-0 py-1 px-3 rounded-2">
                        Resolution
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Message</td>
                    <td>name</td>
                    <td>Avi Das</td>
                    <td>874565</td>
                    <td>
                      <button className="btn btn-success text-white border-0 py-1 px-3 rounded-2">
                        Resolution
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="pt-5 police-walla">
              <p>
                Police Walla &copy;{new Date().getFullYear()} All Right
                Reserved!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Messages;
