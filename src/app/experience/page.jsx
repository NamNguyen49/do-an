'use client';

import React from 'react';
import Image from 'next/image';
import { ConfigProvider } from 'antd';
import { Button, Card } from 'antd';
const { Meta } = Card;
import UserCVBuilderHeader from '../components/UserCVBuilderHeader';
import UserCVBuilderLayout from '../components/Layout/UseCVBuilderLayout';
import ExperienceForm from '../components/Form/ExperienceForm';

const Experience = () => {
    return (
        <main >
            <ConfigProvider>
                <UserCVBuilderLayout
                    userHeader={<UserCVBuilderHeader />}
                    content={
                        <div className="flex h-screen">
                        <div className="w-1/3  flex flex-col justify-center items-center">
                            <div className="h-1/3">
                                <p>
                                    <a href="https://app.rezi.ai/dashboard/resume/jnB6pSiIUsbkyJXK4HG8/experience?wvideo=fo7dvqzmxu">
                                        <img
                                            src="https://embed-ssl.wistia.com/deliveries/8dad09e9908219fa4e652dd01ca44c9e.jpg?image_play_button_size=2x&amp;image_crop_resized=960x540&amp;image_play_button=1&amp;image_play_button_color=ebeaede0"
                                            width="400"
                                            height="225"
                                            style={{ width: '400px', height: '225px' }}
                                            alt="Video Thumbnail"
                                        />
                                    </a>
                                </p>
                            </div>
                    
                            <div className="h-2/3">

                            Your Experiences...
                            </div>
                        </div>
                    
                        <div className="w-2/3  flex flex-col items-start">
                            <ExperienceForm />
                        </div>
                    </div>
                    } />
            </ConfigProvider>
        </main>

    );
};

export default Experience;