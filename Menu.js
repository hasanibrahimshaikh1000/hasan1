import React from 'react';
function Menu() {
return (
<div className="menu-body" data-testid="menu-content">
<div className="company-content">
<a href="#">HSN Cars & Automobiles</a>
</div>
<div className="navbar-content" id="navbarNav">
<ul className="navbar-content-items">
<li className="nav-item">
<a className="nav-link" href="#">Home</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">About Us</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Vehicles</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Services</a>
</li>
<li className="nav-item">
<a className="nav-link" href="#">Contact Us</a>
</li>
</ul>
</div>
</div>
);
}
export default Menu;