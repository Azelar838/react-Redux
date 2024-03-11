import ResetPassword from "../../../Components/Auth/PasswordReset";
import Signup from "../../../Components/Auth/Signup";
import Header from "../../../Components/Header";

export default function ResetPasswordPage(){
    return(
        <>
        <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
            <Header
              heading="Signup to create an account"
              paragraph="Already have an account? "
              linkName="Login"
              linkUrl="/"
            />
            <ResetPassword/>
            </div>
         </div>
        </>
    )
}
