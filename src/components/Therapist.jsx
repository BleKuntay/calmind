/* eslint-disable react/prop-types */
const Therapist = (props) => {
    return(
		<div className="h-screen">
		<div className="flex flex-col items-center w-[400px] p-7 bg-white text-black">
			<img src={props.doctor_url} alt="" className="w-[100%] bg-inherits mb-5" />
			<h2 className="bg-inherit text-[30px] font-semibold">Dr. {props.name}</h2>
			<div className="bg-inherit flex flex-row justify-center gap-1">
				<img src="src\assets\star.svg" alt="" className="bg-inherit w-6" />
				<p className="bg-inherit">{props.rate}/5</p>
			</div>
			<p className="bg-inherit w-[90%] text-center mt-5">{props.description}</p>
			<button className="w-28 py-1 mt-5 text-[#118AB2] text-center btn-border rounded-3xl hover:bg-[#118AB2] hover:text-white transition-colors duration-300">
				Chat Now
			</button>
		</div>
		</div>
    )
}

export default Therapist