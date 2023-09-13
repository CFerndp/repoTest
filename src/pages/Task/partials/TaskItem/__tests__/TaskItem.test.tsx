import {describe, expect, test} from "vitest";
import {render, screen} from "@testing-library/react";
import TaskItem from "../TaskItem.tsx";

describe('Given TaskItem component', ()=>{
    describe('When it is setted properly', ()=>{
        test('Then it is on the screen',async  ()=>{
            render(<TaskItem task={{_id: '12345', name: 'Tarea 1', done: false}} />);
            expect(await screen.findByTestId('task-item-2345')).toBeInTheDocument();
        })

        test('Then it is ok rendered',async  ()=>{
            const component = render(<TaskItem task={{_id: '12345', name: 'Tarea 1', done: false}} />);
            expect(component).toMatchSnapshot()
        })
    })
})
