import {Routes,Route} from 'react-router-dom'
import Home from '../Component/SignIn'
import Dashboard from '../Component/Dashboard'
export default function Routing(){
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Dashboard' element={<Dashboard/>}/>
            </Routes>
        </div>
    )
}
