import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import Cart from "../Cart"

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    })
)

it("should load restaurant menu component", async () => {
    await act(async() => render (
        <BrowserRouter>
        <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
        </Provider>
        </BrowserRouter>
    ))

    const accordianHeader = screen.getByText("Desserts (2)");
    fireEvent.click(accordianHeader)

    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(2)

    const addBtns = screen.getAllByRole("button", {name: "ADD"})
    fireEvent.click(addBtns[0])

    const cartItems = screen.getByText("Cart(1)");
    expect(cartItems).toBeInTheDocument()

    const cartFoodItems = screen.getAllByTestId("cartfoodItems");
    expect(cartFoodItems.length).toBe(1)

    const clearCartBtn = screen.getByRole("button", {name: "Clear Cart"})
    fireEvent.click(clearCartBtn)
    expect(clearCartBtn.length).toBe()
    const clearCartText = screen.getByText("Your Cart is Empty")
    expect(clearCartText).toBeInTheDocument()


})