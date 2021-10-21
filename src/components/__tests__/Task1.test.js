import App from '../App.js'
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";

// const ReactTestRenderer = require('react-test-renderer');

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div)
})

it('side menu opens and closes when clicking on menu button', () => {

    const {getByTestId} = render(<App />)
    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');
    const loginBtn = getByTestId('loginBtn');

    emailInput.value = "Cody@gmail.com"
    passwordInput.value = "PassworD123"
    loginBtn.click();
    const menuBtn = getByTestId('menuBtn')
    expect(menuBtn).toBeInTheDocument();
    menuBtn.click();
    const sideMenu = getByTestId('sideMenu')
    expect(sideMenu).toBeInTheDocument();
    menuBtn.click();
    expect(sideMenu).toBeNaN
})

it('side closes with click outside of menu area', () => {

    const {getByTestId} = render(<App />)
    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');
    const loginBtn = getByTestId('loginBtn');

    emailInput.value = "Cody@gmail.com"
    passwordInput.value = "PassworD123"
    loginBtn.click();
    const menuBtn = getByTestId('menuBtn')
    const profileBtn = getByTestId('profileBtn');
    expect(menuBtn).toBeInTheDocument();
    menuBtn.click();
    const sideMenu = getByTestId('sideMenu')
    expect(sideMenu).toBeInTheDocument();
    profileBtn.click();
    expect(sideMenu).toBeNaN
})
it('side menu keyboard functionality - escape key', () => {

    const {getByTestId} = render(<App />)
    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');
    const loginBtn = getByTestId('loginBtn');

    emailInput.value = "Cody@gmail.com"
    passwordInput.value = "PassworD123"

    loginBtn.click();

    const menuBtn = getByTestId('menuBtn')
    expect(menuBtn).toBeInTheDocument();

    menuBtn.click();
    const sideMenu = getByTestId('sideMenu')
    expect(sideMenu).toBeInTheDocument();

    fireEvent.keyDown(sideMenu, {key: 'Escape'})
    expect(sideMenu).toBeNaN
})

it('side menu keyboard functionality - arrows and letters', () => {

    const {getByTestId} = render(<App />)
    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');
    const loginBtn = getByTestId('loginBtn');

    emailInput.value = "Cody@gmail.com"
    passwordInput.value = "PassworD123"

    loginBtn.click();

    const menuBtn = getByTestId('menuBtn')
    expect(menuBtn).toBeInTheDocument();

    menuBtn.click();
    const sideMenu = getByTestId('sideMenu')
    expect(sideMenu).toBeInTheDocument();

    const settings = getByTestId('settings');
    const about = getByTestId('about');
    const logout = getByTestId('logout');
    settings.click();
    fireEvent.keyDown(sideMenu, {key: 'a'})
    expect(about).toHaveFocus()
    fireEvent.keyDown(sideMenu, {key: 's'})
    expect(settings).toHaveFocus()
    fireEvent.keyDown(sideMenu, {key: 'l'})
    expect(logout).toHaveFocus()
    fireEvent.keyDown(sideMenu, {key: 'ArrowDown'})
    expect(settings).toHaveFocus() 
    fireEvent.keyDown(sideMenu, {key: 'ArrowUp'})
    expect(logout).toHaveFocus() 
})
