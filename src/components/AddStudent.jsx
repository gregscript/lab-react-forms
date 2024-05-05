import { useState } from "react";

function AddStudent (props) {

    const [fullName, setFullName] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [email, setEmail] = useState("");
    const [program, setProgram] = useState("");
    const [graduationYear, setGraduationYear] = useState(2023);
    const [hasGraduated, setGraduated] = useState(false);
  
    const handleNameInput = (e) => setFullName(e.target.value)
    const handleImageInput = (e) => setImageURL(e.target.value);
    const handlePhoneInput = (e) => setPhoneNo(e.target.value);
    const handleEmailInput = (e) => setEmail(e.target.value);
    const handleProgramInput = (e) => setProgram(e.target.value)
    const handleGraduationYearInput = (e) => setGraduationYear(e.target.value);
    const handleHasGraduatedInput = (e) => setGraduated(e.target.checked);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newStudent = {
          fullName: fullName,
          email: email,
          phone: phoneNo,
          program: program,
          image: imageURL,
          graduationYear: graduationYear,
          graduated: hasGraduated
        }
        
        props.handleAddStudent(newStudent);
    
        // clear form 
        setFullName("");
        setImageURL("");
        setPhoneNo("");
        setEmail("");
        setProgram("");
        setGraduationYear(2023);
        setGraduated(false);
    
      }

    return(

          <form onSubmit={handleSubmit}>
          <span>Add a Student</span>
          <div>
            <label>
              Full Name
              <input name="fullName" type="text" value={fullName} onChange={handleNameInput} placeholder="Full Name" />
            </label>
  
            <label>
              Profile Image
              <input name="image" type="url" value={imageURL} onChange={handleImageInput} placeholder="Profile Image" />
            </label>
  
            <label>
              Phone
              <input name="phone" type="tel" value={phoneNo} onChange={handlePhoneInput} onplaceholder="Phone" />
            </label>
  
            <label>
              Email
              <input name="email" type="email" value={email} onChange={handleEmailInput} placeholder="Email" />
            </label>
          </div>
  
          <div>
            <label>
              Program
              <select name="program" value={program} onChange={handleProgramInput}>
                <option value="">-- None --</option>
                <option value="Web Dev">Web Dev</option>
                <option value="UXUI">UXUI</option>
                <option value="Data">Data</option>
              </select>
            </label>
  
            <label>
              Graduation Year
              <input
                name="graduationYear"
                type="number"
                value={graduationYear}
                onChange={handleGraduationYearInput}
                placeholder="Graduation Year"
                minLength={4}
                maxLength={4}
                min={2023}
                max={2030}
              />
            </label>
  
            <label>
              Graduated
              <input name="graduated" type="checkbox" checked={hasGraduated} onChange={handleHasGraduatedInput}/>
            </label>
  
            <button type="submit">Add Student</button>
          </div>
  
        </form>
    )

}

export default AddStudent;