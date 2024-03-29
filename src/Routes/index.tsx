import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from '../Components/Navbar';
import NotFound from "../Components/NotFound";
import Countries from "../Pages/Api/Countries";
import Example from "../Pages/Api/Example";
import LoginPage from '../Pages/Auth/Login';
import SignupPage from "../Pages/Auth/Signup";
import ResetPasswordPage from "../Pages/Auth/PasswordReset";

function AppRoutes() {

  return (
<>
<Navbar/>
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/update-password" element={<ResetPasswordPage/>}/>
            <Route path="/example" element={<Example/>}/>
            <Route path="/countries" element={<Countries/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
</>
  );
}

export default AppRoutes;