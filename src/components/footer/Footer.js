import React from 'react';

function Footer({title}) {
  const currentYear = new Date().getFullYear();
  return (<div>
    <span data-testid="footer-copy">{`Copyright ${currentYear}`}</span>
    <span data-testid="footer-title">{title}</span>
  </div>)
}

export default Footer;