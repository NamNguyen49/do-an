'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ConfigProvider } from 'antd';
import { Button, Card } from 'antd';
const { Meta } = Card;
import UserCVBuilderHeader from '../components/UserCVBuilderHeader';
import UserCVBuilderLayout from '../components/Layout/UseCVBuilderLayout';
import ExperienceForm from '../components/Form/ExperienceForm';
import "../experience/experience.css";

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

                                <div className=" experience-container h-2/3">
                                    <div className="experience-header">
                                        Your Experiences
                                        <span className="toggle1">&#9660;</span>
                                    </div>
                                    <div >
                                        <div className="experience-item">
                                            <div className="experience-title">Product Manager Intern</div>
                                            <div className="experience-company">Holistics</div>
                                        </div>
                                        <div className="experience-item">
                                            <div className="experience-actions">
                                                <button className="experience-edit">EDIT</button>
                                                <button className="experience-delete">DELETE</button>
                                                <button className="experience-hide">HIDE</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="experience-item">
                                            <div className="experience-title">Product Development Trainee</div>
                                            <div className="experience-company">MoMo</div>
                                        </div>
                                        <div className="experience-item">
                                            <div className="experience-actions">
                                                <button className="experience-edit">EDIT</button>
                                                <button className="experience-delete">DELETE</button>
                                                <button className="experience-hide">HIDE</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="experience-item">
                                            <div className="experience-title">Nation Website and Data Infrastructure Manager</div>
                                            <div className="experience-company">AIESES</div>
                                        </div>
                                        <div className="experience-item">
                                            <div className="experience-actions">
                                                <button className="experience-edit">EDIT</button>
                                                <button className="experience-delete">DELETE</button>
                                                <button className="experience-hide">HIDE</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2 cursor-pointer" >
                                        <span className="text-sm">Sort by date</span>
                                        <label class="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" class="sr-only peer" checked />
                                            <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>

                                    </div>
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