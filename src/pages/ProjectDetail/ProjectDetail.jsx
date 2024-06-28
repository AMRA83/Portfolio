import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaReact, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import './ProjectDetail.scss';
import projectsData from '../../projectsData/projectsData.json';
import IconComponent from '../../components/IconComponent/IconComponent'
// Importez les images directement
import bookiProjet from '../../images/booki-projet.webp';
import ohmyFood from '../../images/ohmyFood.webp';
import sophieBluel from '../../images/sophie-bluel.webp';
import kaza from '../../images/kaza.webp';
import carducciProjet from '../../images/carducci-projet.webp';
import bankTree from '../../images/bank-tree.webp';

function ProjectDetail() {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [image, setImage] = useState(null);

    // Mappez les images importées avec les projets
    const imagesMap = {
        'booki-projet.webp': bookiProjet,
        'ohmyFood.webp': ohmyFood,
        'sophie-bluel.webp': sophieBluel,
        'kaza.webp': kaza,
        'carducci-projet.webp': carducciProjet,
        'bank-tree.webp': bankTree,
    };

    useEffect(() => {
        const selectedProject = projectsData.find(p => p.id === id);
        if (selectedProject) {
            setProject(selectedProject);
            setImage(imagesMap[selectedProject.thumb]); // Utilisez le thumb pour accéder à l'image
        }
    }, [id]);

    if (!project) {
        return <div>Projet non trouvé</div>;
    }


    return (
        <div className='project-detail'>
            <div className='banner' style={{ backgroundImage: `url(${image})` }}>
                <h2 className='title'>{project.title}</h2>
            </div>
            <div className='content'>
                <p>{project.description}</p>
                <div className='links'>
                    {project.linkGithub && <a href={project.linkGithub}><FaGithub /> Voir sur Github</a>}
                </div>
                <div className='tags'>
                    {project.tags.map((tag, index) => (
                        <span key={index} className='icon'><IconComponent title={tag.title} /></span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectDetail;
