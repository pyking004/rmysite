import { BrowserRouter, Routes, Route } from "react-router-dom";

//authentication pages
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
//student pages
import Dashboard from '../pages/student/Dashboard';
import Courses from '../pages/student/Courses';
import CourseDetails from '../pages/student/CourseDetails';
//other pages
import AdminDashboard from '../pages/admin/AdminDashboard';
//layouts
import StudentLayout from "../layouts/StudentLayout";
//trainer pages
import TrainerDashboard from '../pages/trainer/TrainerDashboard';

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
                {/* Student Layout */}
                <Route path="/student" element={<StudentLayout />}>
                    <Route  path="dashboard" element={<Dashboard />} />
                    <Route  path="courses" element={<Courses />} />
                    <Route  path="course/:cid" element={<CourseDetails />} />
                </Route>
                {/* trainer  */}
                <Route path="/trainer" element={<TrainerDashboard />} />
                {/* Admin Dashboard */}
                <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;