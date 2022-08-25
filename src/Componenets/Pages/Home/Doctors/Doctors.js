import React from 'react';
import { Link } from 'react-router-dom';
import dr1 from '../../../Image/Home/Dr-1.jpg';
import dr2 from '../../../Image/Home/Dr-2.jpg';
import dr3 from '../../../Image/Home/Dr-3.jpg';
import dr4 from '../../../Image/Home/Dr-4.jpg';
import dr5 from '../../../Image/Home/Dr-5.jpg';
import dr6 from '../../../Image/Home/Dr-6.jpg';
import dr7 from '../../../Image/Home/Dr-7.jpg';
import dr8 from '../../../Image/Home/Dr-8.jpg';
import dr9 from '../../../Image/Home/Dr-9.jpg';
import { GoPrimitiveDot } from "react-icons/go";
import './Doctors.css'

const Doctors = () => {
    return (
        <div className='doctor_section'>
            <div className="container">
                <div className='text-center'>
                    <h3 className='fw-bold'>Our Medical Experts</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue quis augue ornare, eget faucibus <br /> felis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="row gx-4 gy-5 mt-3">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className=' h-100 card card_content'>
                            <img className='img-fluid' src={dr1} alt="" />
                            <div className='doctor_content px-3 pt-3 pb-4'>
                                <Link to="/" >Pediatric Neurologist | শিশু নিউরোলজি বিশেষজ্ঞ</Link>
                                <h5>Prof. Dr. Selina Husna Banu</h5>
                                <p>MBBS, DCH, PhD (UCL)</p>
                                <h6>Head of the Department</h6>
                                <h6>Department of Neurology & Development</h6>
                                <h4>Dr. M. R. Khan Shishu (Child) Hospital and ICH</h4>
                                <div className='mt-4'>
                                    <small>Next Serial Available (until now):</small>
                                    <div className='d-flex align-items-center'>
                                        <div><GoPrimitiveDot style={{ color: '#66C468', }} /></div>
                                        <div><span className='fw-bold' style={{ color: '#66C468' }}>Today</span></div>
                                    </div>
                                </div>
                                <button className='appoinment_btn'>make appoinment</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 ">
                        <div className=' h-100 card card_content'>
                            <img className='img-fluid' src={dr2} alt="" />
                            <div className='doctor_content px-3 pt-3 pb-4'>
                                <Link to="/">Pediatric Neurologist | শিশু নিউরোলজি বিশেষজ্ঞ</Link>
                                <h5>Prof. Dr. Selina Husna Banu</h5>
                                <p>MBBS, DCH, PhD (UCL)</p>
                                <h6>Head of the Department</h6>
                                <h6>Department of Neurology & Development</h6>
                                <h4>Dr. M. R. Khan Shishu (Child) Hospital and ICH</h4>
                                <div className='mt-4'>
                                    <small>Next Serial Available (until now):</small>
                                    <div className='d-flex align-items-center'>
                                        <div><GoPrimitiveDot style={{ color: '#66C468', }} /></div>
                                        <div><span className='fw-bold' style={{ color: '#66C468' }}>Today</span></div>
                                    </div>
                                </div>
                                <button className='appoinment_btn'>make appoinment</button>
                            </div>
                        </div>
                    </div>
                    {/* ---------=========------- */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className=' h-100 card card_content'>
                            <img className='img-fluid' src={dr3} alt="" />
                            <div className='doctor_content px-3 pt-3 pb-4'>
                                <Link to="/">Pediatric Neurologist | শিশু নিউরোলজি বিশেষজ্ঞ</Link>
                                <h5>Prof. Dr. Selina Husna Banu</h5>
                                <p>MBBS, DCH, PhD (UCL)</p>
                                <h6>Head of the Department</h6>
                                <h6>Department of Neurology & Development</h6>
                                <h4>Dr. M. R. Khan Shishu (Child) Hospital and ICH</h4>
                                <div className='mt-4'>
                                    <small>Next Serial Available (until now):</small>
                                    <div className='d-flex align-items-center'>
                                        <div><GoPrimitiveDot style={{ color: '#66C468', }} /></div>
                                        <div><span className='fw-bold' style={{ color: '#66C468' }}>Today</span></div>
                                    </div>
                                </div>
                                <button className='appoinment_btn'>make appoinment</button>
                            </div>
                        </div>
                    </div>
                    {/* ---------=========------- */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className=' h-100 card card_content'>
                            <img className='img-fluid' src={dr4} alt="" />
                            <div className='doctor_content px-3 pt-3 pb-4'>
                                <Link to="/">Pediatric Neurologist | শিশু নিউরোলজি বিশেষজ্ঞ</Link>
                                <h5>Prof. Dr. Selina Husna Banu</h5>
                                <p>MBBS, DCH, PhD (UCL)</p>
                                <h6>Head of the Department</h6>
                                <h6>Department of Neurology & Development</h6>
                                <h4>Dr. M. R. Khan Shishu (Child) Hospital and ICH</h4>
                                <div className='mt-4'>
                                    <small>Next Serial Available (until now):</small>
                                    <div className='d-flex align-items-center'>
                                        <div><GoPrimitiveDot style={{ color: '#66C468', }} /></div>
                                        <div><span className='fw-bold' style={{ color: '#66C468' }}>Today</span></div>
                                    </div>
                                </div>
                                <button className='appoinment_btn'>make appoinment</button>
                            </div>
                        </div>
                    </div>
                    {/* ---------=========------- */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className=' h-100 card card_content'>
                            <img className='img-fluid' src={dr5} alt="" />
                            <div className='doctor_content px-3 pt-3 pb-4'>
                                <Link to="/">Pediatric Neurologist | শিশু নিউরোলজি বিশেষজ্ঞ</Link>
                                <h5>Prof. Dr. Selina Husna Banu</h5>
                                <p>MBBS, DCH, PhD (UCL)</p>
                                <h6>Head of the Department</h6>
                                <h6>Department of Neurology & Development</h6>
                                <h4>Dr. M. R. Khan Shishu (Child) Hospital and ICH</h4>
                                <div className='mt-4'>
                                    <small>Next Serial Available (until now):</small>
                                    <div className='d-flex align-items-center'>
                                        <div><GoPrimitiveDot style={{ color: '#66C468', }} /></div>
                                        <div><span className='fw-bold' style={{ color: '#66C468' }}>Today</span></div>
                                    </div>
                                </div>
                                <button className='appoinment_btn'>make appoinment</button>
                            </div>
                        </div>
                    </div>
                    {/* ---------=========------- */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className=' h-100 card card_content'>
                            <img className='img-fluid' src={dr6} alt="" />
                            <div className='doctor_content px-3 pt-3 pb-4'>
                                <Link to="/">Pediatric Neurologist | শিশু নিউরোলজি বিশেষজ্ঞ</Link>
                                <h5>Prof. Dr. Selina Husna Banu</h5>
                                <p>MBBS, DCH, PhD (UCL)</p>
                                <h6>Head of the Department</h6>
                                <h6>Department of Neurology & Development</h6>
                                <h4>Dr. M. R. Khan Shishu (Child) Hospital and ICH</h4>
                                <div className='mt-4'>
                                    <small>Next Serial Available (until now):</small>
                                    <div className='d-flex align-items-center'>
                                        <div><GoPrimitiveDot style={{ color: '#66C468', }} /></div>
                                        <div><span className='fw-bold' style={{ color: '#66C468' }}>Today</span></div>
                                    </div>
                                </div>
                                <button className='appoinment_btn'>make appoinment</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <button className='doctor_btn'>see more doctor</button>
                </div>
            </div>
        </div>
    );
};

export default Doctors;