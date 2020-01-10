import React from 'react';
import { Layout } from 'antd';
import './App.css';
import isportisticsLogo from './img/logo.png';
import MainPage from './view/MainPage';

const { Header, Content, Footer } = Layout;

const App = () => (
  <div className="app-container">
    <Layout className="layout">
      <Header>
        <img
          className="img-logo"
          src={isportisticsLogo}
          alt="isportisticsLogo"
        />
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
