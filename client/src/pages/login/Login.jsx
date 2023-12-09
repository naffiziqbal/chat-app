import Swal from 'sweetalert2';
import { APIs } from '../../utils/APIs';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        try {
            const { data } = await APIs.loginUser({ email, password })
            console.log(data)
            if (data?.success) {
                localStorage.setItem('loggedInUser', data?.data?._id)
                Swal.fire({
                    title: data?.message,
                    timer: 2000,
                    icon: "success"
                })
                navigate('/')
            }

        } catch (error) {
            Swal.fire({
                title: "No User Found",
                timer: 2000,
                icon: "error"

            })
        }
    }


    console.log("s")
    return (
        <div className="min-h-screen relative bg-primary">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-1/2 w-96 h-auto bg-background shadow-2xl p-5 rounded-md">
                    <h3 className='text-primary font-extrabold text-center text-3xl my-4'>Login </h3>
                    <hr className='w-1/2 text-accent mx-auto' />
                    <form onSubmit={handleFormSubmit} className="flex flex-col ">
                        <div className="form_control">
                            <label htmlFor="email">
                                <span>Email</span>
                            </label>
                            <input type="email" name='email' />
                        </div>
                        <div className='form_control'>
                            <label htmlFor="password">
                                <span>Password</span>
                            </label>
                            <input type="password" name='password' />
                        </div>
                        <button className='p-2 border-accent border mt-12 rounded-full font-bold w-1/2 mx-auto hover:bg-primary text-primary hover:text-white duration-300' type="submit">Submit</button>
                        <hr className='text-accent my-5 mx-auto w-1/2' />
                    </form>
                    <p>Don&apos;t have any account? <Link to={'/signup'}><strong>Sign up</strong></Link></p>
                </div>
            </div>
    );
};

export default Login;
