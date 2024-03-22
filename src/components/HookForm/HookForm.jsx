import useInputState from "../../hooks/useInputState";


const HookForm = () => {
    
    // const [name, handelNameChange] = useInputState('Rajoni')
    const handelEmail = useInputState('Rojoni@Sojoni.go')

    const handelSubmit = e => {
        e.preventDefault();
        console.log('Form Data :', handelEmail.value)
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                {/* <input value={name} onChange={handelNameChange} type="text" name="name" /> */}
                <br />
                <input {...handelEmail} type="email" name="email" id="" />
                <br />
                <input type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;