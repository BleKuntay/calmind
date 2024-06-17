import { useState } from "react";

const quotes = [
    "Keep trying, and you will be there.",
    "Believe in yourself and all that you are.",
    "Every day is a second chance.",
    "You are stronger than you think.",
    "Your limitation—it's only your imagination."
];

    const MotivationQuoteGenerator = () => {
        const [quote, setQuote] = useState(quotes[0])

        const generateQuote = () => {
            const randomIndex = Math.floor(Math.random() * quotes.length)
            setQuote(quotes[randomIndex])
        };

    return (
        <>
            <button onClick={generateQuote}>Generate</button>
            <h2>Motivation For You</h2>
            <p>{quote}</p>
        </>
    )
}


export default MotivationQuoteGenerator