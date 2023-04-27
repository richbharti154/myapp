import {Routes,Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import SignIn from '../Pages/SignIn/SignIn'
export default function Routing(){
    return(
        <div>
            <Routes>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/' element={<SignIn/>}/>
            </Routes>
        </div>
    )
}
