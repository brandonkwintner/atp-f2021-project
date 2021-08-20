import {render, screen, cleanup} from '@testing-library/react'
import MoneyCard from '../MoneyCard'

test('renders money card component', ()=>{
    render(<MoneyCard amount={0} type="lean"/>)
    const dropDownElement = screen.getByTestId('moneycard-1')
    expect (dropDownElement).toBeInTheDocument()
})

test('proper money card amount', ()=>{
    render(<MoneyCard amount={0} type="lean"/>)
    const dropDownElement = screen.getByTestId('moneycard-1')
    expect (dropDownElement).toHaveTextContent('lean$0')
})

test('proper money card title', ()=>{
    render(<MoneyCard amount={0} type="tester"/>)
    const dropDownElement = screen.getByTestId('moneycard-1')
    expect (dropDownElement).toHaveTextContent('tester$0')
})