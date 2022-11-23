import UploadPage from '../src/presentation/pages/UploadPage.js';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import { MemoryRouter } from 'react-router-dom'
import  userEvent  from '@testing-library/user-event'



test("Button Has Rendered", () => {
    render(<UploadPage/>);
    const buttonElement = screen.queryByTestId('button-test') 
    expect(buttonElement).toBeInTheDocument;
})

test("SidebarDots Have Rendered", () => {
    render(<UploadPage/>);
    const sidebarElement = screen.queryByTestId('sidebar-upload')
    expect(sidebarElement).toBeInTheDocument();
})

test("SidebarDots Has Correct Active", () => {
    render(<UploadPage/>);
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
    const SubmitButton = screen.queryByTestId('button-test')
    const TestLink = SubmitButton.firstChild.nodeName 

    const apiInput = screen.getByPlaceholderText("API Key")
    const verInput = screen.getByPlaceholderText("Version ID")

    expect(apiInput).toHaveValue("");
    expect(verInput).toHaveValue("");

    expect(TestLink).toEqual("SPAN")

    });

test("Check Submit Button Enabled", () => {
    render(<MemoryRouter><UploadPage/></MemoryRouter>);
    const SubmitButton = screen.queryByTestId('button-test')
    const TestLink = SubmitButton.firstChild.nodeName 

    const apiInput = screen.getByPlaceholderText("API Key")
    const verInput = screen.getByPlaceholderText("Version ID")

    expect(apiInput).toHaveValue("");
    expect(verInput).toHaveValue("");

    expect(TestLink).toEqual("SPAN")

    fireEvent.change(apiInput, {target: {value: 'test1'}})
    fireEvent.change(verInput, {target: {value: 'test2'}})
    expect(apiInput).toHaveValue("test1");
    expect(verInput).toHaveValue("test2");
    
    // const EnabledLink = SubmitButton.children.item(0).getAttribute('href')
    const EnabledLink = SubmitButton.children.item(0).getAttribute('href')
    expect(EnabledLink).toEqual("/mainpage")

    
})

test("Check Title Render", () => {
    render(<UploadPage/>);
    const Title = screen.queryByText("Submit Your Information Below")
    expect(Title).toBeInTheDocument()

    const TitleClass = Title.getAttribute('class')
    expect(TitleClass).toEqual("text-center")
})

test("Check API Input", async() => {
    render(<UploadPage/>);

    const apiInput = screen.getByPlaceholderText("API Key")
    await userEvent.type(apiInput, 'test1')
    expect(apiInput).toHaveValue("test1");
})

test("Check Version Input", async() => {
    render(<UploadPage/>);

    const verInput = screen.getByPlaceholderText("Version ID")
    await userEvent.type(verInput, 'test2')
    expect(verInput).toHaveValue("test2");
})