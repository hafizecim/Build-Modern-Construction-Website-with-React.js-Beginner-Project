import { useEffect, useState } from 'react'

const useNavbar = () => {
    const [showNavbar, setShowNavbar] = useState(false)

    const toogleNavbar = () =>{
        if(window.scrollY > 150){
            setShowNavbar(true);
        }
        else{
            setShowNavbar(false);
        }
    }

    useEffect (() =>{
        window.addEventListener("scroll", toogleNavbar);
        // clean up function
        return () => {
            window.removeEventListener("scroll", toogleNavbar);
        }

    }, [])
  return {showNavbar}
}

export default useNavbar