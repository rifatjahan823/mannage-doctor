import React from 'react';
import AnimatedNumbers from "react-animated-numbers";
import factbg from '../../../Image/Home/4.jpg';
import { GiDoctorFace } from "react-icons/gi";
import { FaBed,FaGem,FaSmile} from "react-icons/fa";
import './FactArea.css'
const FactArea = () => {
    return (
        <div className='fact-area'style={{ backgroundImage: `url(${factbg})`,backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",position:"relative",color:'white',zIndex:'5',padding:"100px 0",backgroundAttachment:"fixed",}}>
        <div className='container'>
           {/* ---------new car area----------  */}
            <div className='row'>
                <div className="col-lg-3 col-md-6">
                    <div className='fact-item'>
                        <div className='fact-icon-area'>
                             <GiDoctorFace/>
                        </div>
                        <div className='fact-content-area'>
                        <div className='d-flex align-items-center justify-content-center'>
                        <span >
                            <AnimatedNumbers
                                animateToNumber={27000}
                                fontStyle={{ fontSize:30,fontWeight:800,color:'white',lineHeight:1,}}
                                configs={[
                                    {
                                        mass: 1,
                                        tension: 220,
                                        friction: 100,
                                    },
                                    {
                                        mass: 1,
                                        tension: 180,
                                        friction: 130,
                                    },
                                    { mass: 1, tension: 280, friction: 90 },
                                    {
                                        mass: 1,
                                        tension: 180,
                                        friction: 135,
                                    },
                                    { mass: 1, tension: 280, friction: 90 },
                                ]}
                            ></AnimatedNumbers>
                        </span>
                        <h3>+</h3>
                       </div>
                            <p>Medical Experts </p>
                        </div>
                    </div>
                </div>
            {/* ---------usedcar area----------  */}  
                <div className="col-lg-3 col-md-6">
                    <div className='fact-item'>
                        <div className='fact-icon-area'>
                        <FaBed/>
                        </div>
                        <div className='fact-content-area'>
                        <div className='d-flex align-items-center justify-content-center'>
                        <span >
                            <AnimatedNumbers
                                animateToNumber={20000}
                                fontStyle={{ fontSize:30,fontWeight:800,color:'white',lineHeight:1,}}
                                configs={[
                                    {
                                        mass: 1,
                                        tension: 220,
                                        friction: 100,
                                    },
                                    {
                                        mass: 1,
                                        tension: 180,
                                        friction: 130,
                                    },
                                    { mass: 1, tension: 280, friction: 90 },
                                    {
                                        mass: 1,
                                        tension: 180,
                                        friction: 135,
                                    },
                                    { mass: 1, tension: 280, friction: 90 },
                                ]}
                            ></AnimatedNumbers>
                        </span>
                        <h3>+</h3>
                       </div>
                            <p>Hospital Rooms</p>
                        </div>
                    </div>
                </div> 
            {/* ---------service center area----------  */} 
                <div className="col-lg-3 col-md-6">
                    <div className='fact-item'>
                        <div className='fact-icon-area'>
                            <FaGem/>
                        </div>
                        <div className='fact-content-area'>
                        <div className='d-flex align-items-center justify-content-center'>
                        <span >
                            <AnimatedNumbers
                                animateToNumber={35000}
                                fontStyle={{ fontSize:30,fontWeight:800,color:'white',lineHeight:1,}}
                                configs={[
                                    {
                                        mass: 1,
                                        tension: 220,
                                        friction: 100,
                                    },
                                    {
                                        mass: 1,
                                        tension: 180,
                                        friction: 130,
                                    },
                                    { mass: 1, tension: 280, friction: 90 },
                                    {
                                        mass: 1,
                                        tension: 180,
                                        friction: 135,
                                    },
                                    { mass: 1, tension: 280, friction: 90 },
                                ]}
                            ></AnimatedNumbers>
                        </span>
                        <h3>+</h3>
                       </div>
                            <p>Awwwards Win</p>
                        </div>
                    </div>
                </div>
            {/* ---------happy client area----------  */}
                <div className="col-lg-3 col-md-6">
                   <div className='fact-item'>
                        <div className='fact-icon-area '>
                           <FaSmile/>
                        </div>
                        <div className='fact-content-area'>
                        <div className='d-flex align-items-center justify-content-center'>
                        <span >
                            <AnimatedNumbers
                                animateToNumber={12000}
                                fontStyle={{ fontSize:30,fontWeight:800,color:'white',lineHeight:1,}}
                                configs={[
                                    {
                                        mass: 1,
                                        tension: 220,
                                        friction: 100,
                                    },
                                    {
                                        mass: 1,
                                        tension: 180,
                                        friction: 130,
                                    },
                                    { mass: 1, tension: 280, friction: 90 },
                                    {
                                        mass: 1,
                                        tension: 180,
                                        friction: 135,
                                    },
                                    { mass: 1, tension: 280, friction: 90 },
                                ]}
                            ></AnimatedNumbers>
                        </span>
                        <h3>+</h3>
                       </div>
                            <p>Happy Patients</p>
                        </div>
                    </div>
                </div>    
            </div>
        </div>       
    </div>
    );
};

export default FactArea;