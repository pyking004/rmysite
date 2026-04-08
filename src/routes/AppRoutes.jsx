import { BrowserRouter,Routes,Route } from "react-router-dom";

import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import Dashboard from '../pages/student/Dashboard';
import Courses from '../pages/student/Courses';
import CourseDetails from '../pages/student/CourseDetails';
import AdminDashboard from '../pages/admin/AdminDashboard';

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/course/:cid" element={<CourseDetails />} />
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;