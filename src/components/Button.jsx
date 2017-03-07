const React = require('react');

const Button = ({ children }) => {
  return (
    <div>
      <a className="main-container-button" href="https:/github.com/bntzio/reaction#readme">{children}</a>
      <p className="main-container-version">v. 0.2.0</p>
    </div>
  );
};

module.exports = Button;
