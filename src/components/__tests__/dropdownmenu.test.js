import {render, screen, cleanup} from '@testing-library/react'
import DropDownMenu from '../DropDownMenu';

test('renders drop down component', ()=>{
    render(<DropDownMenu/>)
    const dropDownElement = screen.getByTestId('dropdown-1')
    expect (dropDownElement).toBeInTheDocument()
    expect (dropDownElement).toHaveTextContent('F.I.R.E StrategyLean')
})

test('renders drop down text content test', ()=>{
    render(<DropDownMenu/>)
    const dropDownElement = screen.getByTestId('dropdown-1')
    expect (dropDownElement).toHaveTextContent('F.I.R.E StrategyLean')
})
