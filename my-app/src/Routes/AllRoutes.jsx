import {Routes,Route} from "react-router-dom"
import { GetTrial } from "../Components/GetTrial"
import Home from "../Components/Home"
export default function AllRoutes(){

    return<Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/getTrial" element={<GetTrial/>}/>
    </Routes>
}