import { Link } from "react-router-dom"

export const Auth = ({tyes}: "signup" | "signin") =>{
    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
            <div className="text-3xl font-extrabold">
                Create an account
            </div>
            <div className="text-salte-400 ">
                Already have an account?
                <Link className="pl-2 underline" to={"/signin"}>Login</Link>
            </div>
            </div>
        </div>
    </div>

}