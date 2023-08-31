import React from 'react';
import EducationItem from './EducationItem';
import EducationActions from './EducationActions';

const EducationList = ({ educations }) => {
    return (
        <div>
            {educations.map((education, index) => (
                <div key={index}>
                    <EducationItem title={education.title} company={education.company} />
                    <EducationActions />
                </div>
            ))}
        </div>
    );
};

export default EducationList;