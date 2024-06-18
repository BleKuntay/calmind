import {NavLink} from 'react-router-dom'


import MotivationQuoteGenerator from "../components/MotivationQuoteGenerator"

const Motivation = () => {
    return (
        <div className="motivation mt-8">
            <h3 className="text-white text-[35px]">Tell me what you are feeling right now</h3>
            <img src="src\assets\emojis.png" alt="emojis" className="h-auto w-[323px] my-3"/>
            <div className="relative">
                <textarea 
                className="motivation-textarea w-[855px] h-[415px] mt-2 text-[25px] text-white" 
                placeholder="Write your feelings here..."></textarea>
                <img src="src\assets\emojis2.png" alt="emojis" className="absolute right-[-125px] top-4 w-[177px] h-auto bg-transparent"/>
            </div>
            <MotivationQuoteGenerator />
            <div className="flex flex-row justify-center items-center gap-20">
                <div className="flex flex-col justify-center items-center gap-5">
                    <h2 className="text-white text-center w-[458px] text-[35px]">Tweets that are relevant to how you feel right now</h2>
                    <NavLink to='/talk-mind'>
                        <button className='see-details-btn btn w-[125px] h-[40px] '>Try Me!</button>
                    </NavLink>
                </div>
                <img src="src\assets\motivation-img1.png" alt="" className="w-[600px] h-[auto]"/>
            </div>
        </div>
        
    )
}

export default Motivation