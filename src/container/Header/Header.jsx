// import React from 'react'
import { motion } from 'framer-motion'
// import { images } from '../../constants'
import { AppWrap } from '../../wrapper'

// import './Header.scss'

// const scaleVariants = {
//   whileInView: {
//     scale: [0, 1],
//     opacity: [0, 1],
//     transition: {
//       duration: 1,
//       ease: 'easeInOut',
//     },
//   },
// };

// const Header = () => {
//   return (
//     <div className='app__header app__flex'>
//       <motion.dev
//         whileInView={{
//           x: [-100, 0], opacity: [0, 1]

//         }}
//         transition={{ duration: 0.5 }}
//         className="app__header-info">

//         <div className="app__header-badge">
//           <div className="badge-cmp app__flex">
//           <span>👋</span>
//           <div style={{ marginLeft: 20 }}>
//             <p className='p-text'> Hello,I am</p>
//             <h1 className='head-text'>Shadman</h1>
//             </div>
//           </div>

//           <div className="tag-cmp app__flex">
//           <p className="p-text">Web Developer</p>
//           <p className="p-text">Freelancer</p>
//         </div>

//         </div>

//       </motion.dev>

//       <motion.div
//       whileInView={{ opacity: [0, 1] }}
//       transition={{ duration: 0.5, delayChildren: 0.5 }}
//       className="app__header-img"
//     >
//       <img src={images.profile} alt="profile_bg" />
//       <motion.img
//         whileInView={{ scale: [0, 1] }}
//         transition={{ duration: 1, ease: 'easeInOut' }}
//         src={images.circle}
//         alt="profile_circle"
//         className="overlay_circle"
//       />
//     </motion.div>

//     <motion.div
//       variants={scaleVariants}
//       whileInView={scaleVariants.whileInView}
//       className="app__header-circles"
//     >
//       {[images.flutter, images.redux, images.sass].map((circle, index) => (
//         <div className="circle-cmp app__flex" key={`circle-${index}`}>
//           <img src={circle} alt="profile_bg" />
//         </div>
//       ))}
//     </motion.div>



//     </div>
//   )
// }

// export default AppWrap(Header,'home')


import React from 'react'
import shadman from "./shadman.jpg"
import "./Header.scss"
// import pdf from "./shadman.pdf"

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div className='start1'>
     <motion.div
        whileInView={{
          x: [-100, 0], opacity: [0, 1]

        }}
        transition={{ duration: 1.0 }}
        className="app__header-info">
     
    <div className='start2'>

      <h1 className='home-data-title'> Hi, I'm Shadman</h1>
      <h3 className='home-data-subtitle'>Full Stack Developer</h3>
      <br/>
      <p className='home-data-description'>High Level experience in web development, producing quality work.</p>
      <br/>
      <br/>
    
    
                        {/* <a download href={pdf} className="start3" >
                            Download CV 
                        </a> */}
                        <a href="https://drive.google.com/file/d/1RFR1UevVrHprFZXqF1BLANk6iel_WkYh/view"  className="start3" target="_blank" rel='noreferrer' >Download CV</a>

                           
          {/* <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button> */}
       
                    
    </div>
    </motion.div>
    <div className=''>
    <motion.div
        whileInView={{
          x: [100, 0], opacity: [0, 1]

        }}
        transition={{ duration: 1.0 }}
        className="app__header-info">
    {/* <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    > */}
   <img className='image1' src={shadman} alt="" />
   
   </motion.div>
    </div>


    </div>
  )
}

export default AppWrap(Header,'home')
