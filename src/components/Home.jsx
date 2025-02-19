import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Home.css';
import { FaSearch } from 'react-icons/fa';
// import InstaStories from './InstaStories';
import { Link } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            navigate("/"); 
        }
    }, [navigate]);

    
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        navigate("/");
    };

    return (
        <div>
            <div className='main '>
                {/* Navbar */}
                <nav className="nv1 navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#">Sociallytics</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="mainnav collapse navbar-collapse">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/socialmedia">Social Media Activity</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">Contact Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/setting">Settings</Link>
                                </li>
                            </ul>

                            <form className="d-flex bar">
                                <input className="srch form-control" type="search" placeholder="Search" aria-label="Search" />
                                <FaSearch className="icon-1" />
                            </form>

                            {/* Logout Button */}
                            <button className="btn btn-danger ms-3" onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </nav>

                <div className='main-home' style={pages.div}>

{/* left page */}
<div id='left' style={pages.content}>
    <div className='justify-content-center mt-5 p-5 ms-3'>
        <h1 className='text-dark'>Admin DashBoard
            <br />
            UI Kit
        </h1>

        <div className='box ms-2 mt-4 text-start'>
            
                <li className="li-font"><span class="icon"></span>Social Media Tracking</li>
                <li className="li-font"><span class="icon"></span>Multiple Interactive Components</li>
                <li className="li-font"><span class="icon"></span>Network</li>
                <li className="li-font"><span class="icon"></span>Performance Metrics</li>
                <li className="li-font"><span class="icon"></span>Improved Engagement</li>
         
        </div>


    </div>
</div>

{/* right page */}
<div className='images' style={pages.Img} >
    <div style={pages.box}>
        <img src="../assests/image1.png" alt="Image 1" style={pages.image1} />
        <img src="../assests/image2.png" alt="Image 2"  style={pages.image2} />
        <img src="../assests/image3.png" alt="Image 3"  style={pages.image3}/>
    </div>
</div>


                 </div>
               
            </div>
        </div>
    );
}



   

const styles = {
    main: {
        backgroundColor: 'pink'
    },
    navbar: {
        backgroundColor: '#333',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
    },
    logo: {
        fontSize: '10px',
        fontWeight: 'bold',
    },
    searchContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
    },
    searchInput: {
        height: '30px',
        marginLeft: '100px',
        padding: '5px',
        borderRadius: '15px',
        border: '2px solid blue',
        outline: 'none',
    },

    // searchInput:{
    //     border: 2px solid blue;
    // },

    searchButton: {
        padding: '5px 10px',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    navItems: {
        display: 'flex',
        gap: '20px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px',
    },

    // searchProfile:{
    //     border:'none',
    //     background:'none'
    // },

    searchImg: {
        // display:'flex',
        height: '60px',
        marginRight:'5px'
    }
};


// const pages = {
//     div: {
//         width: '100%',
//         height: '600px',
//         backgroundColor: 'gray',

//     },

//     content: {
//         width: '40%',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center'
//         // display: flex;
//     },
    // const pages = {
    //     div: {
    //         width: '100%',
    //         height: '600px',
    //         backgroundColor: 'gray',
    //         display: 'flex',
    //         justifyContent: 'space-between',
    //         alignItems: 'center',
    //         padding: '20px'
    //     },
    
    //     content: {
    //         width: '40%',
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center'
    //     },
    
    //     Img: {
    //         width: '40%',
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center'
    //     },
    
    //     box: {
    //         display: 'flex',
    //         flexDirection: 'column',  // Stack images vertically
    //         alignItems: 'center',
    //         gap: '15px',  // Space between images
    //     },
    
    //     image1: {
    //         width: '250px',  // Adjust as needed
    //         height: 'auto',
    //     },
    
    //     image2: {
    //         width: '250px',
    //         height: 'auto',
    //     },
    
    //     image3: {
    //         width: '250px',
    //         height: 'auto',
    //     }
    // };
    const pages = {
        div: {
            width: '100%',
            height: '100%',
            backgroundColor: '#4423c7ba',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px'
        },
    
        content: {
            width: '40%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            

            
        },
    
        Img: {
            width: '40%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'  
        },
    
        box: {
            display: 'flex',
            flexDirection: 'column',  
            alignItems: 'center',
            position: 'relative',
            gap: '0px',  
        },
    
        image1: {
            width: '520px',  
            height: 'auto',
            position: 'absolute',
            top: '0',
            left: '0',
            zIndex: '3',
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',  
            borderRadius: '12px',
        },
    
        image2: {
            width: '520px',  
            height: 'auto',
            position: 'absolute',
            top: '70px',  
            left: '30px', 
            zIndex: '2',
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
            borderRadius: '12px',
        },
    
        image3: {
            width: '520px',  
            height: 'auto',
            position: 'absolute',
            top: '140px',  
            left: '60px',  
            zIndex: '1',
            boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
            borderRadius: '12px',
        }
    };
    
    


export default Home;



