import React from 'react'

const Toggle = () => {

    

    const [toggle, setToggle] = useState(false);
  
    const toggleSidebar = () => {
      setToggle(!toggle); 
    };
  return (
    <div>Toggle</div>
  )
}

export default Toggle