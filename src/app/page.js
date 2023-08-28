'use client'; // If used in Pages Router, is no need to add this line

import React from 'react';
import UserLayout from './components/Layout/UserLayout';
import { ConfigProvider } from 'antd';
import { Button, Card } from 'antd';
const { Meta } = Card;


import Header from './components/Header';
const Home = () => {
    return (
        <main >
            <ConfigProvider>
                <UserLayout content={


                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt="example" src="https://photos.pinksale.finance/file/pinksale-logo-upload/1692701716873-e9b5323edab631aa000eabb7a8512a33.PNG" />}
                    >
                        <Meta title="Pham Viet Thuan Thien - CV" description="cv" />
                    </Card>

                } />
            </ConfigProvider>
        </main>

    );
};

export default Home;
