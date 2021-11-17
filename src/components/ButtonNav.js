const ButtonNav = ({type, text, disabledState}) => {
    return (
        //https://sebhastian.com/react-disable-button/
        <button type={type} disabled={disabledState} onClick={() => {
            console.log(text);}
        }>
            {text}
        </button>
    )
};

export default ButtonNav;
