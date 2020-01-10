import React, { Component } from 'react';
import Title from '../components/Title';
import ResultTable from '../components/ResultTable';
import ChartRepresentation from '../components/ChartRepresentation';
import './MainPage.css';

export default class MainPage extends Component {
  render() {
    return (
      <div className="main-page-container">
        <div className="title">
          <Title />
        </div>
        <div className="table">
          <ResultTable />
        </div>
        <div className="chart">
          <ChartRepresentation />
        </div>
      </div>
    );
  }
}
