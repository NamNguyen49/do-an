'use client';

import React from 'react';
import Image from 'next/image';
import UserLayout from '../components/Layout/UserLayout';
import { ConfigProvider } from 'antd';
import { Button, Card } from 'antd';
const { Meta } = Card;
import UserHeader from '../components/UserHeader';

const Experience = () => {
    return (
        <main >
            <ConfigProvider>
                <UserLayout 
                    userHeader={<UserHeader />}
                    content={
                        <p>Experience1</p>                  
                } />
            </ConfigProvider>
        </main>

    );
};

export default Experience;