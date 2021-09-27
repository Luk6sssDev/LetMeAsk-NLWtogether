/*
type ButtonProps = {
    children?: string; // o ponto de interrogação diz que a propriedade do objeto é opcional
}

exemplo de tipagem

let vem de let it chance

// Função de diminuir a contagem 
export function ButtonDecrement() {

    const [value, setValue] = useState(0)

    function decrement() {
        setValue(value - 1);
    }

    return (

        <button onClick={decrement}>
            {value}
        </button>
    )

}
*/

import { ButtonHTMLAttributes } from 'react'
import '../styles/button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutLined?: boolean
};

export function Button({ isOutLined = false, ...props }: ButtonProps) {
    return (
        <button
            className={`button ${isOutLined ? 'outlined' : ' '}`}
            {...props}
        />
    )
}




