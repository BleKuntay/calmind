import MainSection from "../components/MainSection"
import TherapistList from "../components/TherapistList"

const TalkTherapy = () => {
    console.log('TalkTherapy component rendered');
    return(
        <div className="talk-therapy">
            <MainSection />
            <TherapistList />
        </div>
    )
}

export default TalkTherapy