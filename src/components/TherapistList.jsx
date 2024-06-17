import Therapist from "./Therapist"

const TherapistList = () => {
    return (
        <div className="therapist-list -">
            <h1 className="text-white justify-center text-[48px] font-bold text-center">Therapist List</h1>
            <Therapist name="John Doe"/>
            <Therapist name="Jane Smith"/>
            <Therapist name="Alex Brown"/>
            <Therapist name="Mark Lee"/>
            <div className="relative h-auto pb-3 mb-3">
                <button className="mb-3 absolute left-[37.5%] w-[290px] chat-btn bg-white font-semibold text-xl">Show More</button>
            </div>
        </div>
    )
}

export default TherapistList