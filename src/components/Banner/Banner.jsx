import React from 'react';
import './Banner.scss';
import imageBanner from './imageBanner.webp'
function Banner() {
    return (
        <section className="section-presentation">

            <div className='titre'>
                <h1>Portfolio d'Amra MESANOVIC</h1>
                <div className='presentation-paragr'>
                    <p>Bienvenue sur mon portfolio où je présente les projets réalisés au cours de ma formation d'intégratrice web chez OpenClassrooms. </p>
                    <p> Vous y découvrirez également mon parcours professionnel ainsi qu'une description personnelle. </p>
                    <p>Bonne visite ! </p>
                </div>
            </div>
            <img src={imageBanner} alt="" className="presentation-img" />

        </section>
    );
}

export default Banner;