import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../../../Image/Home/blog-1.jpg';
import blog2 from '../../../Image/Home/blog-2.jpg';
import blog3 from '../../../Image/Home/blog-3.jpg';

const Blog = () => {
    return (
        <div className='py-5'>
            <div className="container">
                <div className='text-center'>
                    <h3 className='fw-bold'>Latest from our blog</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue quis augue ornare, eget faucibus <br /> felis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="row mt-5">
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className='h-100 card card_content'>
                            <img className='img-fluid' src={blog1} alt="" />
                            <div className='p-3'>
                                <div><Link to="">MEDICAL CARE</Link></div>
                              <h5 className='mt-2'> <Link className='fw-bold' to="" style={{color:"black",textDecoration:'none'}}>Good Health Habits Can Help Stop Germs</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className='h-100 card card_content'>
                        <img className='img-fluid' src={blog2} alt="" />
                            <div className='p-3'>
                                <div><Link to="">MEDICAL CARE</Link></div>
                              <h5 className='mt-2'> <Link className='fw-bold' to="" style={{color:"black",textDecoration:'none'}}>Good Health Habits Can Help Stop Germs</Link></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className='h-100 card card_content'>
                        <img className='img-fluid' src={blog3} alt="" /><img src="" alt="" />
                            <div className='p-3'>
                                <div><Link to="">MEDICAL CARE</Link></div>
                              <h5 className='mt-2'> <Link className='fw-bold' to="" style={{color:"black",textDecoration:'none'}}>Good Health Habits Can Help Stop Germs</Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-5'>
                    <button className='doctor_btn'>More News</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;