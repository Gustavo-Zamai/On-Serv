import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Landing from "./pages/Landing";
import WorkersList from "./pages/WorkersList";
import WorkerForm from "./pages/WorkerForm";
import CustomerForm from "./pages/CustomerForm";
import LoginPage from "./pages/LoginPage";

function RoutesPath () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/workers"  element={<WorkersList/>}/>
                <Route path="/worker-form" element={<WorkerForm/>}/>
                <Route path="/customer-form" element={<CustomerForm/>}/>
                <Route path="/login" element={<LoginPage/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesPath;