import React from 'react';
import './Footer.scss';

import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

function Footer() {
    return (
        <section className="section-footer">

            <div className="social-links">

                <a href="https://github.com/AMRA83" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='icon' />
                </a>
                <a href="https://www.linkedin.com/in/amra-mesanovic-b52574106/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='icon' />
                </a>
                <a href="mailto:amra.mesanovic@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className='icon' />
                </a>
            </div>
            <p>Copyright © 2024 Amra Mesanovic</p>
        </section>
    );
}

export default Footer;
