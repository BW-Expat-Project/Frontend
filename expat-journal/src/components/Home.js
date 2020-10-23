import React from 'react';

const Home =(props) => {
  const routeToDashboard = event => {
    event.preventDefault();
    props.history.push('/post-list');
  };

  return (
    <div className="home-wrapper">
      <img
        className="home-image"
        src="https://images.unsplash.com/photo-1576896087828-2361d37079a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt=""
      />
      <button onClick={routeToDashboard} className="md-button shop-button">
        Dashboard!
      </button>
    </div>
  );
}

export default Home;
