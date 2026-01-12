/*
 🧠 Event Listener kya hota hai?
 👉 Event Listener browser ko bolta hai:
        “Jab ye event ho, tab ye kaam karna.”
     Event = koi action
jaise:
           -click     -scroll     -key press
           -online / offline      -resize
*/


import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(navigator.onLine); //
    
    useEffect(() => {

        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });

    }, []); 

    return onlineStatus;

};

export default useOnlineStatus;    