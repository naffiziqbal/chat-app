import { APIs } from '../../utils/APIs';
import './Signup.css'
const Signup = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        const user = { name, email, password }
        console.log(user)
        const response = APIs.signUpUser(user)
        response.then(data => console.log(data.data.data))
        console.log(response)
    }
    return (
        <div className="min-h-screen relative bg-primary">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-1/2 w-96 h-auto bg-background shadow-2xl p-5 rounded-md">
                <h3 className='text-primary font-extrabold text-center text-3xl my-4'>Sign Up </h3>
                <hr className='w-1/2 text-accent mx-auto' />
                <form onSubmit={handleSubmit} className="flex flex-col" >
                    <div className="form_control">
                        <label htmlFor="name">
                            <span>Name</span>
                        </label>
                        <input type="text" name='name' />
                    </div>
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
                </form>
            </div>
        </div>
    );
};

export default Signup;
