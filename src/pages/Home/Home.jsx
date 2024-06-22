import React from 'react';
import Banner from '../../components/Banner/Banner';
import { TbBrandJavascript } from "react-icons/tb";
import { LiaFigma } from "react-icons/lia";
import { TbSeo } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import './Home.scss';

function Home() {
    return (
        <div className="home">
            <Banner />
            <section className="competences-section">
                <h1>Mes Compétences</h1>
                <ul className="competences-list">
                    <li>
                        <FaHtml5 className="icon html-icon" />
                        <p>HTML</p>
                    </li>
                    <li>
                        <FaCss3 className="icon css-icon" />
                        <p>CSS</p>
                    </li>
                    <li>
                        <FaSass className="icon sass-icon" />
                        <p>SCSS</p>
                    </li>
                    <li>
                        <LiaFigma className='icon figma-icon' />
                        <p>Figma</p>
                    </li>
                    <li>
                        <TbBrandJavascript className="icon js-icon" />
                        <p>JavaScript</p>
                    </li>
                    <li>
                        <FaReact className="icon react-icon" />
                        <p>React</p>
                    </li>
                    <li>
                        <TbSeo className="icon seo-icon" />
                        <p>SEO</p>
                    </li>
                </ul>
            </section>
        </div>
    );
}

export default Home;
