import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


test("Should load contact us component", () => {
    render(<Contact />)

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})

test("Should load Button inside contact us component", () => {
    render(<Contact />)

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
})

test("Should load input name inside contact us component", () => {
    render(<Contact />)

    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
})

test("Should load two input boxes inside contact us component", () => {
    render(<Contact />)

    const inputBoxs = screen.getAllByRole("textbox");
    expect(inputBoxs.length).toBe(2);
})