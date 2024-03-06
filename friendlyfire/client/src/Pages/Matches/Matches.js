import React from 'react'
// import AuthModal from "../Component/AuthModal.js"
// import {useState} from 'react'
// import {useCookies} from "react-cookie"

 const Matches = () => {
 
    // const [showModal, setShowModal] = useState(false)
    // const [isSignUp, setIsSignUp] = useState(true)
    // const [cookies, setCookie, removeCookie] = useCookies(['user'])
    // const authToken = cookies.AuthToken
let authToken = true

    const handleClick = () => {
        // if (authToken) {
        //     removeCookie('UserId', cookies.UserId)
        //     removeCookie('AuthToken', cookies.AuthToken)
        //     window.location.reload()
        //     return
        // }
        // setShowModal(true)
        // setIsSignUp(true)
        console.log("Clicked! ")
        console.log(authToken)
       
    }

    
 
    return (
    <div className="home">
        <h1>Swipe Right</h1>

        <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>








    </div>
  )
}

export default Matches