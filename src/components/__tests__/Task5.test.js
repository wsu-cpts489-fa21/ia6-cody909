import App from '../App.js'
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it('menu button, search button, and profile picture hidden when on login page', () => {

    const {queryByTestId} = render(<App />)
    expect(queryByTestId('profileBtn')).toBeFalsy();
    expect(queryByTestId('searchBtn')).toBeFalsy();
    expect(queryByTestId('menuBtn')).toBeFalsy();
})

it('menu button, search button, and profile picture hidden when on login page', () => {

    const {getByTestId, queryByTestId} = render(<App />)
    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');
    const loginBtn = getByTestId('loginBtn');

    emailInput.value = "Cody@gmail.com"
    passwordInput.value = "PassworD123"
    loginBtn.click();

    const profileBtn = getByTestId('profileBtn');
    const menuBtn = getByTestId('menuBtn');
    const searchBtn = getByTestId('searchBtn1');

    fireEvent.click(profileBtn);
    const settingsPage = getByTestId('settingsPage');
    expect(settingsPage).toBeInTheDocument();

    expect(profileBtn).not.toBeInTheDocument();
    expect(searchBtn).not.toBeInTheDocument();
    expect(menuBtn).not.toBeInTheDocument();
})

it('search button disbaled when menu open', () => {

    const {getByTestId} = render(<App />)
    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');
    const loginBtn = getByTestId('loginBtn');

    emailInput.value = "Cody@gmail.com"
    passwordInput.value = "PassworD123"
    loginBtn.click();
    const menuBtn = getByTestId('menuBtn')
    const searchBtn = getByTestId('searchBtn');
    const profileBtn = getByTestId('profileBtn');
    expect(menuBtn).toBeInTheDocument();
    menuBtn.click();
    const sideMenu = getByTestId('sideMenu')
    expect(sideMenu).toBeInTheDocument();
    expect(searchBtn).toHaveClass('disabled');
    expect(profileBtn).toHaveClass('disabled');
})

