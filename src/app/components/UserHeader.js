import React from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const UserHeader = () => {
  const items = [
    {
      label: 'Resume',
      key: 'mail',
      // icon: <MailOutlined />,
    },
    {
      label: 'Cover letter',
      key: 'app',
      // icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: 'Resignation letters',
      key: 'app',
      // icon: <AppstoreOutlined />,
      disabled: true,
    }
   
  ];

  const onClick = (e) => {
    console.log('click ', e);
    // Handle menu item click event here
  };

  return (
    <div>
      <Menu onClick={onClick} mode="horizontal" items={items} />
    </div>
  );
};

export default UserHeader;