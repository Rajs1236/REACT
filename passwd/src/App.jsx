import { useState, useCallback, useEffect, useRef } from 'react'
// usestate hook ko ose kr rha hu m yha p
function App() {
  const [length, setlength] = useState(8);
  const [Numberallowed, setNumber] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState("");
  //ref hook use kr rhe h import kia use ref taki jo select ki h uska reference de pau
  //isse mujhe selected text ache s dikhane m help hogi
  const passwordref = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "asdfghjklASDFGHJKL"
    if (Numberallowed) str += "0123456789"
     if (charallowed) str += "!@#$%^&*()-=[]{}~`"
    for (let i = 0; i < length; i++) {
      let element = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(element);

    }
    setpassword(pass)

  }, [length, Numberallowed, charallowed, setpassword])//setpassword optimization
  //k lie dia h
  // passwordgenerator();
  ///another //useeffect hook
  const copyPasswordToClipBoard = useCallback(() =>//callback m vo dala jiski values change ho rahi h
  {
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0, 101);
    // taki jitna generate hua h utna hi select krna h
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {//jab page load hota h tab first time p y call hota h agr kabhi depedencies m kuch
    //change hota h to y re run ho jaega
    passwordgenerator()
  }, [length, Numberallowed, charallowed, passwordgenerator])///dependencies m agr password de deta to wo hi infinite loop m chala jata 
  //pr agr passwordgenerator denge to sahi s chalega
  return (
    <>
      <div className='w-full max-w-md mx-auto shaddow-md rounded-lg px-4 my-8 text-black bg-gray-700'>
        <h1>PASSWORD GENERATOR</h1> <div className='w-full max-w-md mx-auto shaddow-md rounded-lg px-4 my-8 text-black bg-gray-700'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordref}
          /><br></br><br></br>
          <button onClick={copyPasswordToClipBoard} className='outline-none bg-white text-black hover:bg-sky-700'>Copy</button>
        </div>
        <div className="flextext-smgap-x-2">
          <div className="flexitems-centergap-x-1">
            <input type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setlength(e.target.value)
              }}
            />
            <label>length:{length}</label>

            <div className="flexitems-centergap-x-1">
              <input
                type="checkbox"
                defaultChecked={Numberallowed}
                id="numberInput"
                onChange={() => {
                  setNumber((prev) => !prev);
                }}

              />
              <label htmlFor='numberInput'>Numbers</label>
              <br></br>
              <input
                type="checkbox"
                defaultChecked={charallowed}
                id="charInput"
                onChange={() => {
                  setNumber((prev) => !prev);
                }}

              />
              <label htmlFor='numberInput'>char</label>
            </div></div>
        </div>

      </div>
    </>
  )
}

export default App

