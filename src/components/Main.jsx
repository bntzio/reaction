const React = require('react');

const Welcome = require('Welcome');
const Button = require('Button');

var Main = () => {
  return (
    <div className="main-container">
      <Welcome />
      <Button>Read the docs</Button>
    </div>
  );
};

module.exports = Main;
