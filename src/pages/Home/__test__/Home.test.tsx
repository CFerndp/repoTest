import {describe, expect, test} from "vitest";
import {render, screen} from "@testing-library/react";
import Home from "../Home.tsx";
import {BrowserRouter} from "react-router-dom";
import userEvent from "@testing-library/user-event";


describe('Given Home Page component', ()=>{
    describe('When it is setted properly', ()=>{
        test('Then it is ok rendered',async  ()=>{
            const component = render(<Home />, {wrapper: BrowserRouter});
            expect(component).toMatchSnapshot()
        })
    })

    describe('When the user clicks on next button', ()=>{
        test('Then the user goes to the next page',async  ()=>{
             render(<Home />, {wrapper: BrowserRouter});
             const user = userEvent.setup()

            await user.click(screen.getByTestId('button-next-page'))

        })
    })
})
