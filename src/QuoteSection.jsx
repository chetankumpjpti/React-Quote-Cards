import { useEffect, useState } from "react";
import QuoteCard from "./QuoteCard";
import Skeleton from "./Skeleton"
import axios from "axios";

function QuoteSection() {
    const [quote, setQuote] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)


    function fetchQuote(){
        axios.get("https://dummyjson.com/quotes").then(
            (response)=>{
                setQuote(response.data.quotes)
            }
        ).catch(
            (error)=>{
                setError(true)
            }
        ).finally(
            ()=>{
                setLoading(false)
            }
        )
    }

    useEffect(()=>{
        fetchQuote()
    }, [])

    
    if(error){
        return <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
    <h2 className="text-2xl font-bold text-white">
        Oops! Something went wrong
    </h2>

    <p className="text-gray-400">
        Unable to load quotes. Please try again.
    </p>

    <button
        onClick={fetchQuote}
        className="rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-600 px-8 py-3 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-500/50"
    >
        ↻ Retry
    </button>
</div>
    }

    return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-purple-950 to-gray-950 px-8 py-12">
        <h1 className="mb-10 text-center text-4xl font-bold text-purple-300">Daily Inspiration</h1>
        <div className="grid grid-cols-3 gap-6">
        
        {
            loading
            ?
            [2,4,2,3,5,6,4].map(()=>{
                return <Skeleton />
            })
            
            :
            quote.map((data) => {
                return <QuoteCard key={data.id} quote={data} />;
            })
            }
            </div>
            </div>
            );
        }

export default QuoteSection;