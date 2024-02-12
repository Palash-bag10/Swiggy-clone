import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("Should render Restaurant Card component with Props Data", () => {

    render(<RestaurantCard resObj={MOCK_DATA}/>)

    const name = screen.getByText("Domino's Pizza");

    expect(name).toBeInTheDocument();
})