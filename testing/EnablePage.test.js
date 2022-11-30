import EnablePage from '../src/presentation/pages/EnablePage.js';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

test("EnablePage Sidebar Dots Have Rendered", () => {
    render(<MemoryRouter> <EnablePage/> </MemoryRouter>);
    const sidebarElement = screen.queryByTestId('sidebar-upload')
    expect(sidebarElement).toBeInTheDocument();

})

test("EnablePage Sidebar Dots Have Correct Active", () => {
    render(<MemoryRouter> <EnablePage/> </MemoryRouter>);
    const SidebarElement = screen.queryByTestId('sidebar-upload');
    expect(SidebarElement).toBeInTheDocument();
    expect(SidebarElement.hasChildNodes).toBeTruthy();

    const ActiveDot = SidebarElement.children.item(0) 
    expect(ActiveDot.getAttribute('class')).toBe('active');
    expect(ActiveDot).toBeInTheDocument();

})