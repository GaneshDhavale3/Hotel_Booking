import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState ,useEffect} from 'react';
import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";
import './Register.css';

function UserReg() {

    // const [firstname, setFirstname] = useState('')
    // const [lastname, setLastname] = useState('')
    // const [gender, setGender] = useState('')
    // const [contact, setContact] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [cpwd, setCpwd]=useState('')

    const initialValues= { firstname:"", lastname:"", gender:"", contact:"",email:"", password:"", cpwd:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };


                            
    

    const HandleSubmit = (e) =>{
       
      
        // const user = { firstname, lastname, gender, contact, email, password }
        // console.log(user);
        // fetch("http://localhost:8080/user/add", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify(user)
        // }).then(() => {
        //     console.log("new user added")
        // })

        e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);

       
        
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
          errors.fistname = "Username is required!";
        }
        if(values.contact.length !== 10){
          errors.contact ="Mobile number must cantain 10 digits";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }

        if(values.password !== values.cpwd){
            errors.cpwd="password and Conirm password does not match";
        }
        
        return errors;
      };
    





    return (
        <div>

        <Navbar />
        <div className="bg-style">
           
      <div >
      <form onSubmit={HandleSubmit}>    
        <div className="row justify-content-center pt-5" >
            <div className="col-sm-6" >
            
            <div className="heading"><h2>Create Account</h2></div>
                <div className="card p-4" className="form-style">
                    
                    <div className="form-group" >
                        <label>First Name</label>
                        <input required type="text" className="form-control" 
                            onChange={handleChange} value={formValues.firstname} id="firstname" name="firstname" />
                            <p>{formErrors.firstname}</p>
                       
                    </div>


                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" className="form-control"  
                            onChange={handleChange} value={formValues.lastname} id="lastname" name="lastname" required />
                             <p>{formErrors.lastname}</p>
                    
                    </div>
                   
                    <div className="form-group">
                        <label>Gender</label>&nbsp;&nbsp;&nbsp;

                        <input type="radio"
                            id="Male" name="gender" value="Male" onChange={handleChange}  required /><label>Male</label>&nbsp;&nbsp;&nbsp;

                        <input type="radio"
                            id="Female" name="gender" value="Female" onChange={handleChange}  required /> <label>Female</label>
                        
                                        
                    </div>
                   

                    <div className="form-group">
                        <label>Contact Number</label>
                        <input type="tel" className="form-control" 
                               onChange={handleChange} value={formValues.contact} id="contact" name="contact" required />
                        <p class="text-danger">{formErrors.contact}</p>
                        
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="example@gmail.com" 
                            onChange={handleChange} value={formValues.email} id="email" name="email" required />
                         <p class="text-danger">{formErrors.email}</p>               
                    </div>


                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input type="password" className="form-control"  
                           onChange={handleChange} value={formValues.password} id="password" name="password" required />
                       
                    </div>

                    <div className="form-group mt-3">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control"
                            onChange={handleChange} value={formValues.cpwd} id="cpwd" name="cpwd" required />
                        <p class="text-danger">{formErrors.cpwd}</p>
                    </div>

                    <div><br/></div>
                    
                    <button type="submit" class="btn btn-primary">Sign Up</button>
                    
                </div>
            </div>
        </div>
        </form>
        </div>
        </div>
        <Footer/>
        </div>
    )
}

export default UserReg;