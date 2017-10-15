import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import ROUTES from './config/routes'
import {
  Navigation,
  NavigationSection,
  NavigationItem,
} from './components/Navigation'
import './styles/utils.css'
import './styles/app.css'

class App extends Component {
  render() {
    const routes = ROUTES.map(({ friendlyName, ...rest }) => (
      <Route key={rest.path} {...rest} />
    ))
    const navItems = ROUTES.map(route => {
      if (!route.friendlyName) return null
      return (
        <NavigationItem key={route.path} to={route.path}>
          {route.friendlyName}
        </NavigationItem>
      )
    })
    return (
      <div className="app">
        <div className="u-960-container">
          <Navigation>
            <NavigationSection>
              <NavigationItem to="/" isBrand>
                RMS
              </NavigationItem>
            </NavigationSection>

            <NavigationSection>{navItems}</NavigationSection>
          </Navigation>
          <div className="app-container">
            <Switch>{routes}</Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default App
