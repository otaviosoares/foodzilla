import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

export default () => (
  <Navbar brand='Foodzilla' right>
    <NavItem href='get-started.html'>Getting started</NavItem>
    <NavItem href='components.html'>Components</NavItem>
  </Navbar>
)