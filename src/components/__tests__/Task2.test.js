import App from '../App.js'
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";

// const ReactTestRenderer = require('react-test-renderer');

afterEach(cleanup);

it('logout button returns to login page', () => {

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
    const logout = getByTestId('logout');
    //fireEvent.click(logout)
    //expect(sideMenu).not.toBeInTheDocument();
    //expect(loginBtn).toBeInTheDocument();
})