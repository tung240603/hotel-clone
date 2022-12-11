import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
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
import ManageRoom from './pages/Admin/Content/Room/ManageRoom';
import EditProfile from './pages/UserProfile/component/EditProfile/EditProfile';
import UserInfor from './pages/UserProfile/component/UserInfor/UserInfor';
import MyBooking from './pages/UserProfile/component/MyBooking/MyBooking';
import ManageRoomType from './pages/Admin/Content/RoomType/ManageRoomType';
import AdminBooking from './pages/Admin/Content/Booking/Booking';
import Regulation from './pages/Admin/Content/Regulation/Regulation';

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
                    <Route
                        path="/User"
                        element={
                            <DefaultLayout>
                                <Profile />
                            </DefaultLayout>
                        }
                    >
                        <Route index element={<UserInfor />} />
                        <Route path="/User/Edit-Profile" element={<EditProfile />} />
                        <Route path="/User/My-Booking" element={<MyBooking />} />
                    </Route>

                    <Route path="/roombook/:id/:fromdate/:todate" element={<Booking />} />

                    <Route path="/admins" element={<Admin />}>
                        <Route index path="/admins/dashboard" element={<AdminDashBoard />} />
                        <Route path="/admins/manage-users" element={<ManageUser />} />
                        <Route path="/admins/manage-rooms" element={<ManageRoom />} />
                        <Route path="/admins/manage-room-types" element={<ManageRoomType />} />
                        <Route path="/admins/manage-booking" element={<AdminBooking />} />
                        <Route path="/admins/change-regulations" element={<Regulation />} />
                    </Route>
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
