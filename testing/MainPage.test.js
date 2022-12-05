// /**
//  * @jest-environment jsdom
//  */

//  import MainPage from '../src/presentation/pages/MainPage.js';
//  import { render, screen, cleanup, fireEvent } from '@testing-library/react';
//  import '@testing-library/jest-dom/extend-expect'
//  import { MemoryRouter, Router } from 'react-router-dom'
//  import  userEvent  from '@testing-library/user-event'
//  import { createMemoryHistory } from "history";



 
//  const intents = {"Option A": ["veggie", "cheese", "order"], "Option B": ["order", "pizza", "veggie"]}

//  jest.mock('../src/presentation/pages/MainPage.js', () => ({
//     bestIntents: intents,
//     currentOption: "Option A",
//     currentIntents: intents["Option A"],
// }))

//  test("Help & Re-Upload Button Have Rendered", () => {
//     // const history = createMemoryHistory();
//     // const state = {bestIntents: intents, currentOption: "Option A",  currentIntents: intents["Option A"]}
//     // history.push("/mainpage", state);
//     render(<MemoryRouter history={history}><MainPage/></MemoryRouter>);
    
//     const HelpPageButton = screen.getByTestId('help-button')
//     const UploadPageButton = screen.getByTestId('upload-button') 
//     expect(HelpPageButton).toBeInTheDocument;
//     expect(UploadPageButton).toBeInTheDocument;

// })