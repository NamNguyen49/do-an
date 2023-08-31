import React from 'react';
import { Button } from 'antd';
const EducationActions = () => {
    return (
        <div>
            <div className="experience-actions">
                <button className="experience-edit">EDIT</button>
                <button className="experience-hide">DELETE</button>
                <button className="experience-hide">HIDE</button>


            </div>
            <div className="experience-actions" >
                <Button type="primary w-full" style={{ backgroundColor: 'rgb(77, 112, 235)' }}>
                    CREATE NEW EDUCATION
                </Button>
            </div>
        </div>


    );
};

export default EducationActions;