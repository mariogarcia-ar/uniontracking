import React, { useReducer, useEffect, useRef, useState } from 'react';
// import React, { useEffect, useRef, useState } from 'react';   
import './Members.css';
import Select from "../App/Select";

import { addMember, titleGetAll, genderGetAll , ethnicityGetAll, positionGetAll, sickplanGetAll} from '../../services/api';

const formReducer = (state, event) => { //<^>
  return {
    ...state,
    [event.name]: event.value
  }
 }


export default function Preferences() {

  const [titles, setTitles] = useState([]);
  const [genders, setGenders] = useState([]);
  const [ethnicities, setEthnicities] = useState([]);
  const [positions, setPositions] = useState([]);
  const [sickplans, setSickplans] = useState([]);
  

  const [formData, setFormData] = useReducer(formReducer, {
    "first_name": "",
    "last_name": "",
    "middle_name": "",
    "employee_number": "",
    "home_phone": "",
    "cell_phone": "",
    "web_active": "",
    "suffix": "",
    "retire_date": "",
    "rdray": "",
    "department": "",
    "unit": "",
    "title_id": "",
    "gender_id": "",
    "ethnicity_id": "",
    "union_membership_status_id": 0,
    "employ_date": "2022-01-01",
    "social_security_number": "",
    "email": "",
    "birth_date": "",
    "iaff_member_number": "",
    "join_date": "",
    "sick_plan_id": 0,
    "address_line_1": "",
    "address_line_2": "",
    "city": "",
    "zip_code": "",
    "state": "",
    "position_id": "",
    "status_id": "",
    "station_id": "",
    "base_hour_id": "",
    "member_id": "",
    "badge_number": "",
    "promo_date": "",
    "salary_review_date": "",
    "benefit_date": "",
    "termination_date": "",
    "batallion_number": "",
    "shift": "",
    "budget_position": "",
    "grade": "",
    "class": "",
    "hourly_rate": ""
  });
  const [submitting, setSubmitting] = useState(false);

  const mounted = useRef(true);
  
  //const handleSubmit = event => {
  const handleSubmit = async event => {
    event.preventDefault();
    setSubmitting(true);
    
    // console.log(formData);
    const res = await addMember(formData);
    if(res.code == 200){
      alert('Member created '+res.data.id);
    }else{
      alert('Error: '+res.message);
    }
    // console.log(res);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000)
  }
  
  useEffect(() => {
    if(titles.length)  return;
    titleGetAll().then(res => { setTitles(res.data)}); 
  }, [titles])    

  useEffect(() => {
      if(genders.length)  return;
      if(genders.length == 0) genderGetAll().then(res => {setGenders(res.data)})
  }, [genders])    

  useEffect(() => {
    if(ethnicities.length)  return;
    if(ethnicities.length == 0) ethnicityGetAll().then(res => {setEthnicities(res.data)})
  }, [ethnicities])    

  useEffect(() => {
    if(positions.length)  return;
    if(positions.length == 0) positionGetAll().then(res => { setPositions(res.data)})
  }, [positions])    

  useEffect(() => {
    if(sickplans.length)  return;
    if(sickplans.length == 0) sickplanGetAll().then(res => { setSickplans(res.data)})
  }, [sickplans])    


  const handleChange = event => {
    // console.log(event);
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }
  const handleOnClose = event => {
    event.stopPropagation();
    event.preventDefault();
    alert('Close it');
  }

  return (
    <form onSubmit={handleSubmit}>

      {submitting &&       
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}><strong>{name}</strong>:{value.toString()}</li>
            ))}
          </ul>
        </div>  
      }

      <div className='members_wrapper'>
        <div className='row'>
        <div className='column'>
            <h2>Personal Info</h2>
            <div>
              <label><p>Title</p><Select nameDefault="Select a title" name='title_id' options={titles}   onChange={handleChange} idKey="id" nameKey="name"/></label>
              <label><p>Last Name <span>*</span></p><input type="text"  name="last_name" placeholder='Last Name' required    onChange={handleChange} /></label>
              <label><p>First Name <span>*</span></p><input type="text" name="first_name"  placeholder='First Name' required    onChange={handleChange} /></label>
              <label><p>Middle Name </p><input type="text" name="middle_name"  placeholder='Middle Name'     onChange={handleChange} /></label>
              
              <label className="fullw"><p>Suffix (Type in custom suffix)</p><input type="text" name="suffix" placeholder='Suffix'   onChange={handleChange}/></label>
              <label className="fullw"><p>Address (1)</p><input type="text" name="address_line_1" placeholder='Address (1)'   onChange={handleChange}/></label>
              <label className="fullw"><p>Address (2)</p><input type="text" name="address_line_2" placeholder='Address (1)'   onChange={handleChange}/></label>
              
              <label><p>Zip Code</p><input type="text" name="zip_code"  placeholder='Zip Code'     onChange={handleChange} /></label>
              <label><p>State</p><input type="text" name="state"  placeholder='State'     onChange={handleChange} /></label>
              
              <label><p>City</p><input type="text" name="city"  placeholder='City'     onChange={handleChange} /></label>
              <label><p>Social Security #<span>*</span></p><input type="text" name="social_security_number" required pattern="\d{3}\d{2}\d{4}"  placeholder='Social Security #'     onChange={handleChange} /></label>
              
              <label><p>Employee Number</p><input type="text" name="employee_number"  placeholder='Employee Number'     onChange={handleChange} /></label>
              <label><p>IAFF# <span>*</span></p><input type="text" name="iaff_member_number"  placeholder='IAFF #'   required  onChange={handleChange} /></label>
 
            </div>
          </div>


          <div className='column'>
            <h2>Member Status</h2>
            <div>
                
                <label><input type="checkbox" name="union_membership_status_id" value="12"  onChange={handleChange}/><p>Initiated <span>*</span></p></label>
                <label><input type="checkbox" name="union_membership_status_id" value="13"  onChange={handleChange}/><p>Transferred in <span>*</span></p></label>
            </div>

            <h2>Demographics</h2>
            <div>
              <label><p>Date of Birth <span>*</span></p><input type="date" name="birth_date"  placeholder='YY/mm/dd' required    onChange={handleChange} /></label>
              <label><p>Join Date <span>*</span></p><input type="date" name="join_date"  placeholder='YY/mm/dd' required    onChange={handleChange} /></label>
              <label><p>Gender</p><Select nameDefault="Select a Gender" name='gender_id' options={genders}   onChange={handleChange} idKey="id" nameKey="name"/></label>
              <label><p>Race</p><Select nameDefault="Select a Race" name='ethnicity_id' options={ethnicities}   onChange={handleChange} idKey="id" nameKey="name"/></label>
            </div>


            <h2>Job Info</h2>
            <div>
              <label><p>Original Hire <span>*</span></p><input type="text" name="original_hire"  placeholder='' required    onChange={handleChange} /></label>
              <label><p>Badge #</p><input type="text" name="badge_number"  placeholder='Badged #'     onChange={handleChange} /></label>
              <label className="fullw"><p>Position</p><Select nameDefault="Select a Position" name='position_id' options={positions}   onChange={handleChange} idKey="id" nameKey="name"/></label>
              <label className="fullw"><p>Sick Plan<span>*</span></p><Select nameDefault="Select a Sick Plan" name='sick_plan_id' options={sickplans}  required onChange={handleChange} idKey="id" nameKey="name"/></label>
            </div>

            <h2>Contact Details</h2>
            <div>
              <label><p>Home Phone</p><input type="tel" name="home_phone"  placeholder='Home Phone'  pattern="[1][0-9]{9}"   onChange={handleChange} /></label>
              <label><p>Cell Phone</p><input type="tel" name="cell_phone"  placeholder='Cell Phone'     onChange={handleChange} /></label>
              
              <label className="fullw"><p>Email Address<span>*</span></p><input type="email" name="email"  placeholder='Email Address' required    onChange={handleChange} /></label>
              

            </div>

            
            <div>
                <label><button type="submit" id="create" disabled={submitting}>Create</button></label>
                <label><button onClick={handleOnClose} id="close">Close</button></label>              
            </div>
            
          </div>
        </div>
      </div>
    </form>
  );
}
