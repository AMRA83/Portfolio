import React, { useEffect, useState } from 'react';
import Thumb from '../../components/Thumb/Thumb';
import './Projects.scss';
import projectsData from '../../projectsData/projectsData.json';  // Importez les données du fichier JSON

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);  // Utilisez les données importées
    }, []);

    return (
        <section className='section-projets'>
            <h2>Mes projets</h2>
            <div className='section-thumbs'>
                {projects.map((projet) => (
                    <Thumb key={projet.id} projet={projet} />
                ))}
            </div>
        </section>
    );
}

export default Projects;
