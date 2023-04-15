import { useEffect, useState } from "react";
import './form.css'
const Form = () => {
    const [valorInput1, setValorInput1] = useState(0);
    const [valorInput2, setValorInput2] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
    const [errorState, setErrorState] = useState(false);
    const [result, setResult] = useState();
    useEffect(() => {}, [])
    
    function calcular() {
        const a = parseInt(valorInput1);
        const b = parseInt(valorInput2);
        const imc = a / (b**2);
        if (imc > 0) {
            setResult(`Resultado: ${imc}`);
        } else {
            setErrorMessage('Digite valores válidos');
            setErrorState(true);
        }
    }

    return (
        <form className="form">
            <label className="form_label" htmlFor="input-number1">Digite a altura em metros:</label>
            <input required className="form_input" id="input-number1" name="number1" type="text" onChange={e => setValorInput1(e.target.value)}/>

            <label className="form_label" htmlFor="input-number2">Digite a peso em quilos:</label>
            <input required className="form_input" id="input-number2" name="number2" type="text" onChange={e => setValorInput2(e.target.value)}/>

            <button className="form_button" type="button" onClick={calcular}>Calcular</button>

            <div className="form_result">
                <span>{errorState ? errorMessage : result}</span>
            </div>
        </form>
    )
}

export default Form