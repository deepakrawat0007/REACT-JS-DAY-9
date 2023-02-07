import { useState } from "react";
import "./toggle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const ToggleTheme = () => {

    const [sun, setSun] = useState(true)

    const handleChange = () => {
        if (sun) {
            setSun(false)
        } else {
            setSun(true)
        }
    }

    return (
        <div className={sun ? "wrapper-light" : "wrapper-dark"}>
            <div className="btns">
                <button onClick={handleChange}> {sun ? <FontAwesomeIcon icon={faSun} size="3x" color="yellow" /> : <FontAwesomeIcon icon={faMoon} size="3x" color="whitesmoke" />}</button>
                <div className="para">
                    <p>{sun ? "Its a Light Theme!!" : "Its a Dark Theme!!"}</p>
                </div>
                <div>
                    <p>Credits:Deepak Rawat</p>
                    <p>Copyright:2023</p>
                </div>

            </div>

        </div>
    )

}

export default ToggleTheme;
