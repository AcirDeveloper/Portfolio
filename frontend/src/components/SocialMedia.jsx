import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a
                    href='https://twitter.com/acirdeveloper'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <BsTwitter />
                </a>
            </div>
            <div>
                <a
                    href='https://www.facebook.com/profile.php?id=100080640219642'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <FaFacebookF />
                </a>
            </div>
            <div>
                <a
                    href='https://www.instagram.com/acirdeveloper/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <BsInstagram />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia
