import logo from './logo.svg';
import './App.css';
import AuthPage from './pages/AuthPage/Auth.component';
import {BrowserRouter,Route,Routes} from'react-router-dom'
import RecordData from './RecordData/RecordData.component';
import RecordList from './RecordsList/RecordsList.component';

function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AuthPage/>}/>
      <Route path='/record-data' element={<RecordData/>}/>
      <Route path='/record-list' element={<RecordList/>}/>


    </Routes>
    </BrowserRouter>
  )
}

export default App;
