import Input from "../components/Input";

const LoginPage = () => {
    return ( <main className="flex flex-col gap-20">
        <p className="text-gray-50 text-lg"><span className="font-extrabold italic text-gray-300">Sign / login</span> with your <span className="font-extrabold italic text-gray-300">deets</span> to track your <span className="font-extrabold italic text-gray-300">feats</span>!</p>
        <form action="" className="flex flex-col gap-6">
            <Input label="Email Address" type="email" placeholder="Enter your email address" />
            <Input label="Password" type="password" placeholder="Enter your password" />
            <button type="submit" className="bg-linear-to-br from-sky-400 to-fuchsia-400 w-28 py-2 rounded-sm hover:from-fuchsia-400 hover:to-sky-400 focus:ring-3 focus:ring-amber-300 outline-none hover:text-gray-50">Go to Todos</button>
        </form>
    </main> );
}
 
export default LoginPage;