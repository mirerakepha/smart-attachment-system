import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import api from "../services/api";




function EditProfileModal({ onclose }){
    const {user, setUser} = useContext(AuthContext);
    const [name, setName] = useState(user.name);

    const handleUpdate = async () => {
        const token = localStorage.getItem("token");

        try{
            await api.put("/user/update-profile", null, {
                params: {name},
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setUser({...user, name});
            alert("Profile updated Successfully");
            onclose();
        } catch (error){
            alert("Failed to update profile")
        }
    }
    
    return(
        <div style={overlay}>
            <div style={overlay}>
                <h2>Edit Profile</h2>

                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}                
                />

                <div style={{marginTop: "15px"}}>
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={onclose}>Cancel</button>
                </div>
            </div>

        </div>
    );
}

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 2000
};

const modal = {
  background: "#fff",
  padding: "25px",
  borderRadius: "8px",
  width: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};

export default EditProfileModal;