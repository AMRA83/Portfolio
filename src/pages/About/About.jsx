import React from 'react';
import './About.scss';


function About() {
    return (
        <>
            <section className="about-section">
                <h1>A propos de moi</h1>

                <p>
                    Mère de deux garçons, curieuse et toujours prête à apprendre quelque chose de nouveau, je m'adapte rapidement. Dans la vie, je suis guidée par la devise <strong>'Rien n'est impossible !'</strong>.
                </p>
                <p>
                    Après avoir terminé mes études de chimie (bac +6, master : chimie analytique) à Sarajevo (Bosnie-Herzégovine),
                    j'ai commencé à travailler dans un laboratoire d'analyse de la qualité de l'eau, des aliments et des objets d'usage courant.
                    Après 18 mois, je suis venue en France, où j'ai appris la langue française et commencé à travailler comme assistante maternelle.
                    Après 10 ans d'expérience dans le travail avec les enfants, j'ai décidé de changer de métier.
                </p>
                <p>
                    Toujours passionnée par les Lego, j'ai trouvé un lien entre la programmation et les Lego.
                    Actuellement en cours d'une formation intensive d'intégrateur web à temps plein chez OpenClassrooms. Cette formation, entièrement à distance, m'a permis d'explorer en profondeur l'intégration de sites web dynamiques avec React, Redux, ainsi que l'optimisation, le SEO et le débogage. Durant ce parcours, j'ai eu l'opportunité de collaborer avec des mentors experts dans leur domaine, ce qui a enrichi mon expérience et accéléré mon apprentissage. À travers douze projets professionnalisants, j'ai développé une solide expertise en gestion de projet web, de la conception au déploiement.
                </p>
                <p>
                    Je tiens à remercier les mentors et les evaluateurs pour leur bienveillance et leur professionalisme.
                </p>
            </section>
            <section className='loisirs-section'>
                <h1>Loisirs</h1>
                <ul>
                    <li>
                        <h2>Lecture</h2>
                        <p>J'adore plonger dans les univers des livres et découvrir de nouvelles histoires et perspectives.</p>
                    </li>
                    <li>
                        <h2>Jeux de construction</h2>
                        <p>Je prends plaisir à construire et créer, que ce soit avec des LEGO ou d'autres matériaux.</p>
                    </li>
                    <li>
                        <h2>Balade en nature </h2>
                        <p>J'aime passer du temps à l'extérieur, me promener dans la nature et profiter de l'air frais.</p>
                    </li>
                </ul>
            </section>

        </>

    );
}

export default About;
