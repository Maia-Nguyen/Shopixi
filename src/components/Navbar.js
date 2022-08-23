import React, { useState }from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [show, setShow] = useState(false);

    function showSwitch() {
        return setShow(!show)
    }

    return (
        <>
            <div className='navbar'>
                <div className={ show ? 'logo active' : 'logo' }>
                    SHOPixi
                </div>
                <div className={ show ? 'links active' : 'links' }>
                    <Link onClick= { ()=> showSwitch() } to='/'>HOME</Link>
                    <Link onClick= { ()=> showSwitch() } to='/about'>ABOUT</Link>
                    <Link onClick= { ()=> showSwitch() } to='/sign-in'>SIGN IN</Link>
                </div>
                <div onClick={ ()=> showSwitch() } className=
                    { show ? 'buttons active' : 'buttons' }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    )
}

export default Navbar
