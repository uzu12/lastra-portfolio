import "./Certificates.css";
import Cert1 from "../img/cert1.jpg";
import Cert2 from "../img/cert2.jpg";

function Certificates(){
    return (
        <div className="Cert" id="cert">
            <h2>Certificates</h2>
            <div className="certs">
                <section>
                    <img src={Cert1} alt="cert1"/>
                    <h3>On-The-Job-Training</h3>
                </section>
                <section>
                    <img src={Cert2} alt="cert2"/>
                    <h3>Mobile Application Development Training Workshop</h3>
                </section>
            </div>
        </div>
    )
}

export default Certificates;
