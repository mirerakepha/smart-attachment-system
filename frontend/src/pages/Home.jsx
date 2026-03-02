import { useState } from "react";
import NavBar from "../components/NavBar";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";



function Home (){
    const [ showLogin, setShowLogin ] = useState(false);
    const [ showRegister, setShowRegister ] = useState(false);

    return (
        <div>
            {/* NavBar */}
            <NavBar 
                onLogin={() => setShowLogin(true)}
                onRegister={() => setShowRegister(true)}
            />

            <div style= {{padding : "40px", textAlign: "center"}}>
                <h1>Smart Attachment System</h1>
                <p>Find the best attachment based on your skills </p>

            </div>

            {/* Click outside and the modal closes */}
            {showLogin && < LoginModal onClose={() => setShowLogin(false)}/>}
            {showRegister && <RegisterModal onClose={() => setShowRegister(false)}/>}
        </div>
    );


}

export default Home;