import React from 'react'
import './Footer.css'
import SubHeading from '../../constants/subHeading/SubHeading'
import { FaFacebookF ,FaInstagram ,FaTwitter } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='footer-section'>
        <div className='footer-newsletter'>
            <SubHeading text="Newletter" />
            <h1 className='headtext__cormorant'  >Subscribe To Our Newsletter</h1>
            <p className='p__opensans' style={{ marginBottom : '2rem' }} >And never miss latest Updates!</p>
            <form>
                <input type="email" placeholder='Email Adress'/>
                <button>Subscribe</button>
            </form>
        </div>

        <div className='footer-infos'>
            <div className='footer-infos-left-side' >
                <h2 className='p__cormorant' >Contact Us</h2>
                <p style={{color: 'gray'}}>Algeria, Medea , Welcome All</p>
                <p style={{color: 'gray'}}>+1 012345678</p>
                <p style={{color: 'gray'}}>+1 987456321</p>
            </div>
            <div className='footer-infos-center-side'>
                <h1 className='headtext__cormorant' style={{fontSize : '40px'}} >GERICHT</h1>
                <SubHeading text="The best way to find ur Restaurant  and eat a good food"  />
                <div className='footer-infos-center-side-icons'>
                    <FaFacebookF style={{fontSize: '26px' , cursor:'pointer' , color: 'white'}} />
                    <FaInstagram style={{marginLeft :'1rem' , marginRight :'1rem' ,fontSize: '26px' , cursor:'pointer' , color: 'white'}} />
                    <FaTwitter style={{ fontSize: '26px' , cursor:'pointer' , color: 'white'}} />

                </div>
            </div>
            <div className='footer-infos-right-side' >
                <h2 className='p__cormorant' >Working Hours</h2>
                <p style={{color: 'gray'}} >Monday-Friday :</p>
                <p style={{color: 'gray'}}>08:00 am -12:00 am</p>
                <p style={{color: 'gray'}}>Saturday-Sunday :</p>
                <p style={{color: 'gray'}}>07:00 am -11:00 am</p>
            </div>

        </div>

        <div className='footer-copy-right'>
            <p className='p__cormorant' >Copy-right-ProfeSSoR-Abdelbasset-2022</p>

        </div>
        
    </footer>
  )
}

export default Footer