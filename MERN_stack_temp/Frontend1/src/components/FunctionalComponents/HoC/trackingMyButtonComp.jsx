import Button from "./Button"

const trackingMyButtonComp = (Component) => {
    return (props)=>{
        const handleClick=()=>{
            alert("The tracking info on Clicking this Button",props.trackingInfo.CustID)
        }
        return(
            <form onClick={handleClick}>
                Email: <input type="text" /> <br />
                Password: <input type="password" /> <br />
                <Component {...props} />
            </form>
        )
  }
}

export default trackingMyButtonComp
