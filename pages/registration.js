import React, { useState } from 'react'
// import regcss from '../public/registrationcss.css'

const Registration = () => {
  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[phone, setPhone] = useState();
  const[roll, setRoll] = useState('');
  const[section, setSection] = useState('');
  const[gender, setGender] = useState('male_hc');
  const[password, setPassword] = useState('');

  const valuechange =(e)=>{
    if (e.target.name == 'name') {
      setName(e.target.value)
    }
    if (e.target.name == 'email') {
      setEmail(e.target.value)
    }
    if (e.target.name == 'phone') {
      setPhone(e.target.value)
    }
    if (e.target.name == 'roll') {
      setRoll(e.target.value)
    }
    if (e.target.name == 'section') {
      setSection(e.target.value)
    }
    if (e.target.name == 'gender') {
      setGender(e.target.value)
    }
    if (e.target.name == 'password') {
      setPassword(e.target.value)
    }
  }


const submitFormData = async(e)=>{
  e.preventDefault()
  const data = {name, email, phone, roll, section, gender, password}
  console.log(data);
  let res = await fetch(`http://localhost:3000/api/reg`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  let response = await res.json()
  console.log(response);
  setPassword('')
}



  return (
    <>
      <div>
        <h2 className='text-center text-yellow-600' >Registration form by: <span className='text-red-500 text-lg font'>Nitish Jha</span>
        </h2>
      </div><br />


      <form onSubmit={submitFormData} className="to-blue-700 text-center text-blue-800" >
        <label>Full Name:</label><br />
        <input onChange={valuechange} value={name} className='w-auto border-violet-900 border-solid border-2 rounded-lg' type="text" id="name" name="name" /><br />
        <label>Enter Your Email:</label><br />
        <input onChange={valuechange} value={email} className='border-violet-900 border-solid border-2 rounded-lg' type="email" id="email" name="email" /><br />
        <label>Contact No: </label><br />
        <input onChange={valuechange} value={phone} className='border-violet-900 border-solid border-2 rounded-lg' type="number" id="mobno" name="phone" /><br />
        <label>Roll No:</label><br />
        <input onChange={valuechange} value={roll} className='border-violet-900 border-solid border-2 rounded-lg' type="text" id="roll" name="roll" /><br /><br />

        <label for="Section">Section:</label><br />
        <select onChange={valuechange} value={section} className='border-violet-900 border-solid border-2 rounded-lg'  id="Section" name="section">
          <option value="Sec A">Sec A</option>
          <option value="Sec B">Sec B</option>
          <option value="Sec C">Sec C</option>
          <option value="Sec D">Sec D</option>
        </select><br /><br />


        <label>Gender:</label>
        <label for="male">Male</label>         
        <input className='border-violet-900 border-solid border-2 rounded-lg' type="radio" id="male" name="gender" value={gender}/>
        <label for="female">Female</label>
        <input className='border-violet-900 border-solid border-2 rounded-lg' type="radio" id="female" name="gender" value={gender}/><br />
        
        <label>Password :</label><br />
        <input onChange={valuechange} value={password} className='border-violet-900 border-solid border-2 rounded-lg' type="password" id="password" name="password" /><br /><br />
        <button className='border-violet-900 border-solid border-2 rounded-lg px-6 bg-slate-100 hover:bg-neutral-500' type="submit" value="Submit"> Submit</button>

      </form>

    </>
  )
}

export default Registration