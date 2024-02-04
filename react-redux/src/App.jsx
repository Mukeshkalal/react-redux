import { Provider } from "react-redux"
import Counter from "./components/Counter"
import Header from "./components/Header"
import store from './redux/store'
function App() {

  return (
    <Provider store={store}>
      <Header />
      <Counter />
    </Provider>
  )
}

export default App
