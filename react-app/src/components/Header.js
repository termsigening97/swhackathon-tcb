import "./default.css"
import Welcome from "./Welcome"
import Community from "./Community"

function Header(props) {
    if (props.isauthed)
        return (
            <div className="default">
                <Community user={props.user}/>
            </div>
        );
    else
        return (
            <div className="default">
                <Welcome />
            </div>
        );
}

export default Header;