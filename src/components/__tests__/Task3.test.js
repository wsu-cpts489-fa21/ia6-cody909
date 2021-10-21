import App from '../App.js'
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it('search box appears and disappears', () => {

    const {getByTestId} = render(<App />)
    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');
    const loginBtn = getByTestId('loginBtn');

    emailInput.value = "Cody@gmail.com"
    passwordInput.value = "PassworD123"
    loginBtn.click();

    const searchBtn = getByTestId('searchBtn1');
    fireEvent.click(searchBtn)
    const searchBox = getByTestId('searchBox');
    expect(searchBox).toBeInTheDocument();
    fireEvent.click(searchBtn)
    expect(searchBox).not.toBeInTheDocument();
})