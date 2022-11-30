import EndPage from '../src/presentation/pages/EndPage.js';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

test("Checkmark SVG Has Rendered", () => {
    render(<EndPage/>);
    const SVG = screen.queryByTestId('svg-container')
    expect(SVG).toBeInTheDocument();
})