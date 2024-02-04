import { useDispatch } from "react-redux"
import { addAction, minusAction } from "../../redux/action"

function Counter() {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => { dispatch(addAction()) }}> addEvent+</button>
            <button onClick={() => { dispatch(minusAction()) }}> dimEvent-</button>
        </div>
    )
}

export default Counter
