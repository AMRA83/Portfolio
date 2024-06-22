import React from 'react';
import { useParams } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import './ProjectDetail.scss';

import cover1 from '../../images/booki-projet.webp';
import cover2 from '../../images/ohmyFood.webp';
import cover3 from '../../images/sophie-bluel.webp';
import cover4 from '../../images/kaza.webp';
import cover5 from '../../images/carducci-projet.webp';
import cover6 from '../../images/bank-tree.webp';

function ProjectDetail({ projets }) {
    const { id } = useParams();
    const projet = projets.find((p) => p.id === id);

    if (!projet) {
        return <div>Projet non trouvé</div>;
    }

    const getIcon = (title) => {
        switch (title.toLowerCase()) {
            case 'html':
                return <FaHtml5 key={title} />;
            case 'css':
                return <FaCss3Alt key={title} />;
            case 'javascript':
                return <TbBrandJavascript key={title} />;
            case 'react':
                return <FaReact key={title} />;
            default:
                return null;
        }
    };

    const getImagePath = (cover) => {
        switch (cover) {
            case 'booki-projet.webp':
                return cover1;
            case 'ohmyFood.webp':
                return cover2;
            case 'sophie-bluel.webp':
                return cover3;
            case 'kaza.webp':
                return cover4;
            case 'carducci-projet.webp':
                return cover5;
            case 'bank-tree.webp':
                return cover6;
            default:
                return '';
        }
    };

    return (
        <div className='project-detail'>
            <div className='banner' style={{ backgroundImage: `url(${getImagePath(projet.cover)})` }}>
                <h2 className='title'>{projet.title}</h2>
            </div>
            <div className='content'>
                <p>{projet.description}</p>
                <div className='links'>
                    {projet.linkPage && <a href={projet.linkPage}><FaLinkedin /> Voir le projet</a>}
                    {projet.linkGithub && <a href={projet.linkGithub}><FaGithub /> Voir sur Github</a>}
                </div>
                <div className='tags'>
                    {projet.tags.map((tag, index) => (
                        <span key={index} className='icon'>{getIcon(tag.title)}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
