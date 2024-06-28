import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import './Thumb.scss';
import IconComponent from '../../components/IconComponent/IconComponent'

const images = import.meta.glob('../../images/*.{webp,png,jpg,jpeg,svg}');

function Thumb({ projet }) {
    const [imagePath, setImagePath] = useState('');

    useEffect(() => {
        const loadImage = async () => {
            for (const path in images) {
                if (path.includes(projet.thumb)) {
                    const module = await images[path]();
                    setImagePath(module.default);
                    break;
                }
            }
        };
        loadImage();
    }, [projet.thumb]);



    return (
        <Link to={'/project/' + projet.id}>
            <div className='thumb'>
                <div
                    className='card-img'
                    style={{ backgroundImage: `url(${imagePath})` }}>
                </div>
                <div className='card-texte'>
                    <h3 className='title'>{projet.thumbTitle}</h3>
                    <p className='explication'>{projet.explication}</p>
                    <div className='tags'>
                        {projet.tags.map((tag, index) => {
                            if (tag && tag.title) {
                                return <IconComponent key={index} title={tag.title} />;
                            } else {
                                console.error('Tag mal formaté à l\'index', index, ':', tag);
                                return null;
                            }
                        })}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Thumb;
