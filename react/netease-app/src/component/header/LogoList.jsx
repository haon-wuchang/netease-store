import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass,faCartShopping,faUser} from '@fortawesome/free-solid-svg-icons';
import {faXTwitter,faFacebook,faInstagram,faYoutube,faTiktok} from '@fortawesome/free-brands-svg-icons';
import Logo from './Logo.jsx';


export default function LogoList() {
    const logoList = [
        faFacebook,faInstagram,faYoutube,faTiktok,faXTwitter,faMagnifyingGlass,faUser,faCartShopping
    ]

    return (
        <>
            <Logo />
        </>
    );
}

