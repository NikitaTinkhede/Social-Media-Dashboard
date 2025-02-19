import React from 'react';
import './styles/YouTube.css';
import YoutubeChart1 from './YoutubeChart1';
import YoutubeChart2 from './YoutubeChart2';

function YouTube() {
    return (
        <div id='youtube'>
           
            <div className='container-fluid bg-light d-flex align-items-center justify-content-center p-3'>
                <img src='../assests/youtube3.png' alt='no img' className='img-fluid' style={{ height: '80px' }} />
                <h1 id='head' className='ms-2'><b>YouTube</b></h1>
            </div>

          
            <div className='container-fluid d-flex flex-wrap justify-content-center mt-2'>
                
                <div className='stats-card'>
                    <p className='fw-bold fs-5 mb-0'>YOUTUBE</p>
                    <div className='d-flex align-items-center'>
                        <img src='../assests/youtube3.png' className='img-fluid' style={{ height: '70px' }} />
                        <div className='ms-3'>
                            <h2>120.6k</h2>
                            <p>Followers</p>
                        </div>
                    </div>
                </div>

            
                <div className='stats-card'>
                    <div className='d-flex align-items-center'>
                        <img src='../assests/youtube2.png' className='img-fluid' style={{ height: '40px' }} />
                        <div className='ms-3'>
                            <h3>20,154</h3>
                            <p className='mb-0'>Followers</p>
                            <p>462%+ This week</p>
                        </div>
                    </div>
                </div>

              
                <div className='stats-card'>
                    <div className='d-flex align-items-center'>
                        <img src='../assests/youtube.png' className='img-fluid' style={{ height: '60px' }} />
                        <div className='ms-3'>
                            <h3>1,73,035</h3>
                            <p className='mb-0'>Account Reached</p>
                            <p>58%+ This week</p>
                        </div>
                    </div>
                </div>

               
                <div className='stats-card'>
                    <div className='d-flex align-items-center'>
                        <img src='../assests/youtube1.png' className='img-fluid' style={{ height: '50px' }} />
                        <div className='ms-3'>
                            <h3>62,986</h3>
                            <p className='mb-0'>People Engaged</p>
                            <p>462%+ This week</p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className='container-fluid row mt-3 '>
                <div className='col-lg-7 col-md-12 chart-container'>
                    <h4 className='bg-danger text-white p-2 text-center'>Monthly View</h4>
                    <YoutubeChart2 />
                </div>

                <div className='col-lg-4 col-md-12 chart-container '>
                    <h4 className='bg-danger text-white p-2 text-center'>Engagement Distribution</h4>
                    <YoutubeChart1 />
                </div>
            </div>

            
            <div className='container-fluid d-flex flex-wrap justify-content-center text-center mt-3'>
                <div className='analytics-card'>
                    <h4 className='analytics-header'>Traffic Source</h4>
                    <ul className='list-group'>
                        <li className='list-group-item'>YouTube Advertising</li>
                        <li className='list-group-item'>Unknown Embedded Player</li>
                        <li className='list-group-item'>Unknown-Direct</li>
                        <li className='list-group-item'>External Website</li>
                        <li className='list-group-item'>YouTube Suggested Video</li>
                    </ul>
                </div>

                <div className='analytics-card'>
                    <h4 className='analytics-header'>Views</h4>
                    <ul className='list-group'>
                        <li className='list-group-item'>15,850 (90%)</li>
                        <li className='list-group-item'>356 (2.5%)</li>
                        <li className='list-group-item'>320 (2.6%)</li>
                        <li className='list-group-item'>92 (0.5%)</li>
                        <li className='list-group-item'>86 (1.4%)</li>
                    </ul>
                </div>

                <div className='analytics-card'>
                    <h4 className='analytics-header'>Estimated Minutes</h4>
                    <ul className='list-group'>
                        <li className='list-group-item'>8,850 (96%)</li>
                        <li className='list-group-item'>656 (4.5%)</li>
                        <li className='list-group-item'>420 (2.6%)</li>
                        <li className='list-group-item'>90 (1.5%)</li>
                        <li className='list-group-item'>86 (1.4%)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default YouTube;
