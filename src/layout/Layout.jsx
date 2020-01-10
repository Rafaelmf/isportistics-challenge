import React, { Component } from 'react';
import { Layout, Avatar } from 'antd';
import HeaderForm from '../components/HeaderForm/HeaderForm';
import isportisticsLogo from '../img/logo.png';
import './Layout.css';
// import { Container } from './styles';

export default class layout extends Component {
  render() {
    const { Header, Content, Footer } = Layout;
    const { children } = this.props;

    return (
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
            <div className="content-children">{children}</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            isportistics challenge ©2020 Created by Rafael Freitas
          </Footer>
        </Layout>
      </div>
    );
  }
}
