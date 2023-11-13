import Footer from "./components/footer";
import Header from "./components/header";
import AddExpense from "./pages/add-expense";
import Home from "./pages/home";
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/add-expense" exact element={<AddExpense/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
