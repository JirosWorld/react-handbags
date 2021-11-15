const ButtonNav = ({type, text}) => {
    return (
        <button type={type} onClick={() => {
            console.log(text);}
        }>
            {text}
        </button>
    )
};

export default ButtonNav;