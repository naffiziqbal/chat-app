import './Login.css'
const Login = () => {
    return (
        <div className="min-h-screen relative bg-primary">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-auto bg-background shadow-2xl p-5 rounded-md">
                <h3 className='text-primary font-extrabold text-center text-3xl my-4'>Login </h3>
                <hr className='w-1/2 text-accent mx-auto' />
                <form className="flex flex-col leading-10">
                    <div className="form_control">
                        <label htmlFor="email">
                            <span>Email</span>
                        </label>
                        <input type="email" />
                    </div>
                    <div className='form_control'>
                        <label htmlFor="password">
                            <span>Password</span>
                        </label>
                        <input type="password" />
                    </div>
                    <button className='p-2 border-accent border mt-12 rounded-full font-bold w-1/2 mx-auto hover:bg-primary text-primary hover:text-white duration-300' type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
