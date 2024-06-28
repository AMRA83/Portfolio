
import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';

const IconComponent = ({ title }) => {
    switch (title.toLowerCase()) {
        case 'html':
            return <FaHtml5 />;
        case 'css':
            return <FaCss3Alt />;
        case 'javascript':
            return <TbBrandJavascript />;
        case 'react':
            return <FaReact />;
        default:
            return null;
    }
};

export default IconComponent;
