import React from 'react'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import './Header.scss'
const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 2,
            ease: 'easeInOut',
        },
    },
}

const Header = () => {
    return (
        <div id='home' className='app__header app__flex'>
            <motion.div
                className='app__header-info'
                whileInView={{ x: [-150, 0], opacity: [0, 1] }}
                transition={{ duration: 2 }}
            >
                <div className='app__header-badge'>
                    <div className='badge-cmp app__flex'>
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className='p-text'>Hello, I am</p>
                            <h1 className='head-text'> Julio Sevillano</h1>
                        </div>
                    </div>
                    <div className='tag-cmp app__flex'>
                        <p className='p-text'>Web Developer</p>
                        <p className='p-text'>Freelancer</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className='app__header-img'
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 2, delayChildren: 2 }}
            >
                <img src={images.profile} alt='profile_bg' />
                <motion.img
                    className='overlay_circle'
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    src={images.circle}
                    alt='profile_circle'
                />
            </motion.div>
            <motion.div
                variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className='app__header-circles'
            >
                {[images.python, images.redux, images.node].map((circle, index) => (
                    <div className='circle-cmp app__flex' key={`circle-${index}`}>
                        <img src={circle} alt='circle' />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default Header
