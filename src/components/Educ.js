import "./Educ.css";
import Nemsu from "../img/nemsu_logo.png";
function Educ() {
    return (
        <div className="Educ" id="educ">
            <h2>My Education</h2>
            <section>
                <img src={Nemsu} alt="nemsu_logo"/>
                <div className="educ_details">
                    <h3>I'm from</h3>
                    <h1>North Eastern Mindanao State University</h1>
                    <h3>Formerly Surigao del Sur State University</h3>
                    <h3>A Bachelor of Science in Computer Science student</h3>
                </div>
            </section>
        </div>
    )
}

export default Educ;