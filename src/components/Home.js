import React from 'react';
import Banner from '../images/banner.png'

const Home = () => {
    return (
        <div className='home-section'>
        <div className='home-banner border-bottom border-success'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-7'>
                        <img className='img-fluid' src={Banner} />
                    </div>
                    <div className='col-md-5 d-flex justify-content-start align-items-center'>
                        <div className='content'>
                            <h1 className='text-success'>Discover a limitless world of learning</h1>
                            <p>Review important concepts and explore new topics—the options are endless with Bezkoder !!!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='footer bg-dark mt-4 text-light p-3'>
            <footer>
                <h3>Top companies choose <span className='text-success'>Bezkoder Business</span> to build in-demand career skills.</h3>
                <p>&copy; {new Date().getFullYear()} Bezkoder, Inc.</p>
            </footer>
        </div>
    </div>
    
            
    )
}

export default Home;


