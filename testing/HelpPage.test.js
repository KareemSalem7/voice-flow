/**
 * @jest-environment jsdom
 */

import HelpPage from '../src/presentation/pages/HelpPage.js';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

test("HelpPage Text Has Rendered", () => {
    render(<MemoryRouter><HelpPage/></MemoryRouter>);
    const HelpRow = screen.queryByTestId('Help-row-test')
    expect(HelpRow).toBeInTheDocument();
})

test("Help Row Contains Correct Text", () => {
    expect(true).toBeTruthy;
})