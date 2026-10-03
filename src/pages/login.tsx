import { useNavigate } from "react-router";
import Field from "../components/ui/field";

export default function Login(){
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="border rounded-2xl bg-amber-950 border-amber-800 p-20">
                <div className="flex flex-col items-center w-full gap-2">
                    <p className="text-6xl mb-10">Login</p>
                    <Field type="email" />
                    <Field type="password" />
                    <button onClick={()=> navigate("/")}>Login</button>
                </div>
            </div>
        </div>
    )
};