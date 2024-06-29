
const Contact = () => {
  return (
    <div className="contact m-5 p-5 items-center  justify-center flex flex-col border-green-400 border-solid">
     <p className="text-center text-2xl font-mono">Contact me </p>
     <input type="text" className="w-6/12 h-3/12 m-10 p-10 border border-black border-solid "
placeholder="message"></input>

     <input type="text" className="w-6/12 h-3/12 m-10 p-10 border border-black " placeholder="Name"></input>
     <button  className="w-2/12 h-2/12 m-10 p-10 border border-orange-300 bg-orange-400 text-white">submit</button>
     </div>
     
  )
}

export default Contact