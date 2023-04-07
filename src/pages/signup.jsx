import { useState, useEffect } from "react";
import "./index.css";

export const Signup = () => {
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [error, setError] = useState("");

    const submit = async (e) => {
        e.preventDefault();

        if(error ===""){
            alert("okay");
        }
    }

    useEffect(()=>{
        if(password !== confirmpassword) 
            setError("Password and comfirmation must match!");
        else setError("");
      }, [password, confirmpassword])
      
    return (
        <div className="signupbody">
            <div className="signupcontainer">
                <div>
                    <div className="logo">
                        <img src="./img/logo.PNG" alt="" className="nav-logo"/>
                        <h1>TrandingPlace</h1>
                    </div>
                    <div className="title">
                        <p>Register</p>
                        <div>
                            or
                            <a href = "/login" > log in</a>
                        </div>
                    </div>
                </div>
                
                <h1 className="error">{error}</h1>

                <div>
                    <form action="" method="" onSubmit={submit}>
                        <div className="form-field">
                            <input type="email" id="emailaddress" name="emailaddress" placeholder="Email Address" className="form-field-input" autoFocus autoComplete="false" required></input>
                        </div>

                        <div className="form-field">
                            <input type="text" id="username" name="username" placeholder="User Name" className="form-field-input" autoFocus autoComplete="false" required></input>
                        </div>

                        <div className="form-field">
                            <input type="password" id="password" name="password" placeholder="Password" className="form-field-input" onChange={(e) => setpassword(e.target.value)} required></input>
                        </div>

                        <div className="form-field">
                            <input type="password" id="confirmpassword" name="confirmpassword" placeholder="Confirm Password" className="form-field-input" onChange={ (e) => setconfirmpassword(e.target.value)} required></input>
                        </div>

                        <div className="button-wrapper">
                            <input className="button-property" tabIndex={3} id="login" name="login" type="submit" value={"Register"}></input>
                        </div>
                        
                        <div className="term">
                            <span>
                                By registering, you agree to the 
                                <a tabIndex={4} href="" >Term Of Use</a>
                                and
                                <a tabIndex={4} href="" >Privacy Policy</a>
                                .  If you live in the US you'll also be subscribed to The Market Sum and The Express newsletters.

                            </span>
                        </div>

                        <div className="return-to-landingpage">
                            <span>
                                <a href="/">
                                    {"< back"}
                                </a>
                            </span>
                        </div>
                        <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response" value="03AKH6MRESD27BSTaIQOWTdWeIblj8nPmfOEH57KlrxcDfuCL7yTIXXpK9wQfRR_AX_NxgpYjKGO-YpfTmdqy3a-XJTt8c2bXUqhW9r2sACd_dWiiHPDF3drkj-ZiZOp6qZEmdr5W34JuKKmN1F9WntTaSyiEECMA6nBGSPu14Ds-CWb6IH17EprgVSrasHMiWfffjwwyBwkZFQ_m5dXj6Jb3adHuT8tvRJrI9rGYtNEHIhwt_zHQ4vJUxgRzisPnS3zLEaiiSkWPTIflasOtG2dpsi0rZt5o8HjEuG4FvSZS8Y6UnNSEJEjO472-uh_gqPiTdoWb5lBuqY4NtL0XJNBg6kXXv83RCXT5mJNoWiFbzE6tOrSnifv2jvEkiUWigjC6Vld0GKdnCN-UHs1kNqqw203Y1nqavX8Hwxm3K49nqXSO1Kw_exEjf8H_2cvQfa1flpgFflk4WFpjx7-cotKpk26ICgQisqDaudN55Krxic2sejqFckwMF3-7vFp7CGU1xFdfTiM7hPi_RFLEFzemEqnE1FfISTQ"></input>
                    </form>
                </div>
            </div>
        </div>
    )
}