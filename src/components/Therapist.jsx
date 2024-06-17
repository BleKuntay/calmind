/* eslint-disable react/prop-types */
const Therapist = (props) => {
    return(
			<div className='therapist-card w-[95%%] h-[172px] bg-[#1E1E1E] '>
				<img src="src\assets\user.png" alt="" className='h-[125px] bg-transparent mx-20'/>
				<div className="bg-transparent">
					<h5 className="text-white bg-transparent text-xl font-bold">dr. {props.name}</h5>
					<img src="src\assets\star.png" alt=""className="w-[2rem] bg-transparent py-3 mx-3"/>
					<button className="w-[77px] chat-btn bg-white font-semibold">Chat</button>
				</div>
			</div>
    )
}

export default Therapist