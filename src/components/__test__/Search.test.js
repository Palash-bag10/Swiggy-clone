const { render, screen, fireEvent } = require("@testing-library/react")
const { default: Body } = require("../Body")
import { act } from "react-dom/test-utils"
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA)
        }
    })
})

it("Should search res list for pizza input", async() => {
    
    await act(async () => render( 
        <BrowserRouter>
            <Body /> 
        </BrowserRouter>
    ))

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(9);
    
    const searchBtn = screen.getByRole("button", {name: "Search"});

    const searchInput = screen.getByTestId("searchInput")
    
    fireEvent.change(searchInput, { target: {value: "pizza" }});

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard")

    expect(cardsAfterSearch.length).toBe(1);

})