import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import RoomList from "../components/RoomList";
import Facilities1 from '../components/Facilities';
import FooterPage from '../components/Footer';
import Navbar1 from '../components/UserNav';
import Banner from '../components/Banner';
import Loader from '../components/Loader'; // Import the Loader component

function Home() {
  const [roomDataArray, setRoomDataArray] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const data = (await axios.post("/api/rooms/getallrooms")).data;
        setRoomDataArray(data);
      } catch (error) {
        console.error('Error fetching room data:', error);
      } finally {
        setLoading(false); // Set loading to false whether successful or not
      }
    };

    fetchRoomData();
  }, []);

  return (
    <>
      <Navbar1 />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Hero>
            <Header
              title="Business Class Luxury"
              subtitle="Immerse Yourself in the essence of business-class luxury with our royal hospitality. Experience the perfect blend of comfort, convenience, and professionalism."
            >
              <Link to="/allrooms" className="btn btn-primary1" >
                our rooms
              </Link>
            </Header>
          </Hero>
          <Banner />
          <About />
          <div style={{ height: "90vh", backgroundColor: "#F0F1F3" }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className='ml-5 mt-5' style={{ fontSize: "24px", fontWeight: "bold" }}>Explore Our Rooms</div>
              <Link to='/allrooms'>
                <button
                  type='button'
                  style={{
                    backgroundColor: '#A9822D',
                    color: 'white',
                    padding: '8px 15px',
                    borderRadius: '5px',
                    border: '1px solid #3498db',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    borderColor: '#A9822D',
                    fontSize: '15px',
                    marginLeft: '1050px',
                    marginTop: '50px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = '#A9822D';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#A9822D';
                    e.target.style.color = 'white';
                  }}
                >
                  View All Rooms
                </button>
              </Link>
            </div>
            <RoomList roomDataArray={roomDataArray} />
          </div>
          <Facilities1 />
          <FooterPage />
        </>
      )}
    </>
  );
}

export default Home;
