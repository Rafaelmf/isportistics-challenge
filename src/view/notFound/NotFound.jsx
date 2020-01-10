import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

// Created this default page when none of the routes URL were satiesfied
const Home = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, this page is unavailable."
    extra={
      <Link to="/">
        <Button type="primary">Back to Home page</Button>
      </Link>
    }
  />
);

export default Home;
