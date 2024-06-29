import Body from '../Body';
import { render, screen, waitFor, act, fireEvent } from "@testing-library/react";
import MOCK_DATA from "../mocks/ResListMOCK.json";
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    });
});

it("should render the body component with search", async () => {
    await act(async () => render(<BrowserRouter><Body /></BrowserRouter>));
    
    // Print the DOM to see if the button is rendered correctly
    screen.debug();

    await waitFor(() => {
        const searchBtn = screen.getByRole("button", { name: "Search" });
      const searchInput = screen.getByTestId("searchInput");
      fireEvent.change(searchInput, {target : {value: "burger"} });
      fireEvent.click(searchInput);

        expect(searchBtn).toBeInTheDocument();

        const cards = screen.getAllByTestId("resCard");
        expect(cards.length).toBe(2);

    });
});
