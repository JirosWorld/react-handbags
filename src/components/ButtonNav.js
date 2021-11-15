const ButtonNav = (props) => {
    return (
        <button type={props.type} onClick={() => {
            console.log(props.text);}
        }>
            {props.text}
        </button>
    )
};

export default ButtonNav;