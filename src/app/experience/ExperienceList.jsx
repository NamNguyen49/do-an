import React from 'react';
import ExperienceItem from './ExperienceItem';
import ExperienceActions from './ExperienceActions';

const ExperienceList = ({ experiences }) => {
    return (
        <div>
            {experiences.map((experience, index) => (
                <div key={index}>
                    <ExperienceItem title={experience.title} company={experience.company} />
                    <ExperienceActions />
                </div>
            ))}
        </div>
    );
};

export default ExperienceList;