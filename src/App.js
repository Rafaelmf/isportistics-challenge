import React from 'react';
import { Layout, Avatar } from 'antd';
import './App.css';
import isportisticsLogo from './img/logo.png';

import MainPage from './view/MainPage';
import HeaderForm from './components/HeaderForm/HeaderForm';

const { Header, Content, Footer } = Layout;

const App = () => (
  <div className="app-container">
    <Layout className="layout">
      <Header className="app-header">
        <img
          className="img-logo"
          src={isportisticsLogo}
          alt="isportisticsLogo"
        />
        <HeaderForm className="header-form" />
        <Avatar className="header-avatar" size={50} icon="user" />
      </Header>
      <Content className="antd-content">
        <MainPage />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        isportistics challenge ©2020 Created by Rafael Freitas
      </Footer>
    </Layout>
  </div>
);

export default App;
