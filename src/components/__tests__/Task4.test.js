import App from '../App.js'
import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it('settings dialog cancel button', () => {

    const {getByTestId} = render(<App />)
    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');
    const loginBtn = getByTestId('loginBtn');

    emailInput.value = "Cody@gmail.com"
    passwordInput.value = "PassworD123"
    loginBtn.click();

    profileBtn = getByTestId('profileBtn');
    fireEvent.click(profileBtn);
    const settingsPage = getByTestId('settingsPage');
    const cancelBtn = getByTestId('cancelBtn');
    expect(settingsPage).toBeInTheDocument();
    cancelBtn.click()
    expect(settingsPage).not.toBeInTheDocument();
})

it('settings dialog save button', () => {

    const {getByTestId} = render(<App />)
    const emailInput = getByTestId('emailInput');
    const passwordInput = getByTestId('passwordInput');
    const loginBtn = getByTestId('loginBtn');

    emailInput.value = "Cody@gmail.com"
    passwordInput.value = "PassworD123"
    loginBtn.click();

    profileBtn = getByTestId('profileBtn');
    fireEvent.click(profileBtn);
    const settingsPage = getByTestId('settingsPage');
    const saveBtn = getByTestId('saveBtn');
    expect(settingsPage).toBeInTheDocument();
    saveBtn.click()
    expect(settingsPage).not.toBeInTheDocument();
})
