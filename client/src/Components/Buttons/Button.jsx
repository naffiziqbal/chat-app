
const Button = ({ data, buttonEvent }) => {
    return (
        <div>
            <button onClick={buttonEvent} className='bg-accent p-2 text-white rounded-sm w-full'>{data}</button>

        </div>
    );
};

export default Button;
