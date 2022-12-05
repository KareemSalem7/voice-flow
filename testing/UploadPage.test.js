/**
 * @jest-environment jsdom
 */

import UploadPage from '../src/presentation/pages/UploadPage.js';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import  userEvent  from '@testing-library/user-event'



test("Button Has Rendered", () => {
    render(<MemoryRouter><UploadPage/></MemoryRouter>);
    const buttonElement = screen.queryByTestId('button-test') 
    expect(buttonElement).toBeInTheDocument;
})

test("SidebarDots Have Rendered", () => {
    render(<MemoryRouter><UploadPage/></MemoryRouter>);
    const sidebarElement = screen.queryByTestId('sidebar-upload')
    expect(sidebarElement).toBeInTheDocument();
})

test("SidebarDots Has Correct Active", () => {
    render(<MemoryRouter><UploadPage/></MemoryRouter>);
    const SidebarElement = screen.queryByTestId('sidebar-upload');
    expect(SidebarElement).toBeInTheDocument();
    expect(SidebarElement.hasChildNodes).toBeTruthy();
    const SidebarChildrenDivCotainer = SidebarElement.children.item(0)
    const ActiveSpan = SidebarChildrenDivCotainer.children.item(1)
    expect(ActiveSpan).toHaveClass('active');
    const ActiveDot = screen.queryByTestId('active-dot');
    expect(ActiveDot).toBeInTheDocument();

})

test("Check Textbox Input", async() => {
    render(<MemoryRouter><UploadPage/></MemoryRouter>); 

    const apiInput = screen.getByPlaceholderText("API Key")
    const verInput = screen.getByPlaceholderText("Version ID")

    expect(apiInput).toHaveValue("");
    expect(verInput).toHaveValue("");
      

    fireEvent.change(apiInput, {target: {value: 'test1'}})
    expect(apiInput).toHaveValue('test1')
    expect(verInput).toHaveValue("");

    });

test("Check Submit Button Disabled", () => {
    render(<MemoryRouter><UploadPage/></MemoryRouter>);
    const SubmitButton = screen.queryByTestId('disabled-link')
    expect(SubmitButton).toBeInTheDocument
    const fullElement = SubmitButton.outerHTML

    const apiInput = screen.getByPlaceholderText("API Key")
    const verInput = screen.getByPlaceholderText("Version ID")

    expect(apiInput).toHaveValue("");
    expect(verInput).toHaveValue("");

    expect(fullElement).toEqual("<span data-testid=\"disabled-link\"> Submit Now!</span>")

    });

test("Check Submit Button Enabled", () => {
    render(<MemoryRouter><UploadPage/></MemoryRouter>);

    const apiInput = screen.getByPlaceholderText("API Key")
    const verInput = screen.getByPlaceholderText("Version ID")
    const SubmitButton = screen.getByTestId("submit-button")

    expect(apiInput).toHaveValue("");
    expect(verInput).toHaveValue("");
    expect(SubmitButton).toContainHTML('<span data-testid="disabled-link"> Submit Now!</span>')


    fireEvent.change(apiInput, {target: {value: 'test1'}})
    fireEvent.change(verInput, {target: {value: 'test2'}})
    expect(apiInput).toHaveValue("test1");
    expect(verInput).toHaveValue("test2");
    expect(SubmitButton).toContainHTML('<a class="link" data-testid="enabled-link" href="/"><span color="white"> Submit Now!</span></a>')   
})

test("Check Title Render", () => {
    render(<MemoryRouter><UploadPage/></MemoryRouter>);
    const Title = screen.queryByText("Submit Your Information Below")
    expect(Title).toBeInTheDocument()

    const TitleClass = Title.getAttribute('class')
    expect(TitleClass).toEqual("text-center")
})

test("Check API Input", async() => {
    render(<MemoryRouter><UploadPage/></MemoryRouter>);

    const apiInput = screen.getByPlaceholderText("API Key")
    await userEvent.type(apiInput, 'test1')
    expect(apiInput).toHaveValue("test1");
})

test("Check Version Input", async() => {
    render(<MemoryRouter><UploadPage/></MemoryRouter>);

    const verInput = screen.getByPlaceholderText("Version ID")
    await userEvent.type(verInput, 'test2')
    expect(verInput).toHaveValue("test2");
})