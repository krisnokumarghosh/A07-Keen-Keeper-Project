import React from 'react';
import footerLogo from "../../assets/logo-xl.png";
import instaImg from "../../assets/instagram.png";
import fbImg from "../../assets/facebook.png";
import xImg from "../../assets/twitter.png";

const Footer = () => {
    return (
        <div className='bg-[#244D3F] mt-20 min-h-103.25 pt-20 pb-7.5 '>
            <div className='container mx-auto'>
                <img src={footerLogo} className='mx-auto h-8 md:h-12.5' alt="" />
                <p className='text-white/60 text-center mt-4 text-[13px] md:text-[16px] w-75 mx-auto md:w-full md:mx-0'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='font-semibold text-white text-[20px] text-center mt-5'>Social Links</p>
                <div className='flex justify-center gap-3 mt-3'>
                    <img src={instaImg} alt="" />
                    <img src={fbImg} alt="" />
                    <img src={xImg} alt="" />
                </div>
                <div className='mt-10 pl-4 md:pl-0  border-t border-white/10 pt-7.5 md:flex justify-between items-center'>
                    <p className='text-[#FAFAFA]/70 mb-3 md:mb-0'>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='md:flex gap-4 items-center space'>
                        <p className='text-[#FAFAFA]/70'>Privacy Policy</p>
                        <p className='text-[#FAFAFA]/70'> Terms of Service</p>
                        <p className='text-[#FAFAFA]/70'>Cookies</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;