import { NewNote } from '../pages/NewNote';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Details } from '../pages/Details';
import { Route, Routes } from 'react-router-dom';


export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/newnote' element={<NewNote />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/details/:id' element={<Details />}/>
        </Routes>
    )
}