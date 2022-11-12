import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

//component
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Profile from './pages/UserProfile/Profile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RoomsScreen from './pages/RoomScreen/RoomScreen';
import DetailRoom from './pages/DetailRoom/DetailRoom';
import Booking from './pages/Booking/Booking';
import NotFound from './components/NotFound/NotFound';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import Admin from './pages/Admin/Admin';
import AdminDashBoard from './pages/Admin/Content/DashBoard';
import ManageUser from './pages/Admin/Content/User/ManageUser';
import Edit_profile from './pages/UserProfile/component/Edit_profile/Edit_profile';
import User_infor from './pages/UserProfile/component/User_infor/User_infor';
import My_booking from './pages/UserProfile/component/My_booking/My_booking';
import ManageRoom from './pages/Admin/Content/Room/ManageRoom';

function App() {
    return (
        <BrowserRouter>
            <ToastContainer />
            <Routes>
                <Route
                    path="/"
                    element={
                        <DefaultLayout>
                            <Home />
                        </DefaultLayout>
                    }
                ></Route>

                <Route
                    path="/rooms"
                    element={
                        <DefaultLayout>
                            <RoomsScreen />
                        </DefaultLayout>
                    }
                />

                <Route
                    path="/room/:id"
                    element={
                        <DefaultLayout>
                            <DetailRoom />
                        </DefaultLayout>
                    }
                />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                <Route path="/" element={<PrivateRoute />}>
                    <Route path="/User" element={<Profile />}>
                        <Route index element={<User_infor />} />
                        <Route path="/User/Edit-Profile" element={<Edit_profile />} />
                        <Route path="/User/My-Booking" element={<My_booking />} />
                    </Route>

                    <Route path="/roombook/:id/:fromdate/:todate" element={<Booking />} />

                    <Route path="/admins" element={<Admin />}>
                        <Route index element={<AdminDashBoard />} />
                        <Route path="/admins/manage-users" element={<ManageUser />} />
                        <Route path="/admins/manage-rooms" element={<ManageRoom />} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
