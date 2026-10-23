
function QuoteCard({ quote }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-purple-500/20 bg-[#171126] p-7 text-white shadow-lg shadow-purple-950/20 transition-all duration-300 hover:-translate-y-2 hover:border-purple-400/60 hover:shadow-xl hover:shadow-purple-900/30">

            <div className="absolute left-0 top-0 h-1 w-full bg-linear-to-r from-violet-600 via-fuchsia-400 to-purple-600"></div>

            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/15 text-xl text-purple-300">
                        ✦
                    </div>

                    <div>
                        <h2 className="font-semibold text-white">
                            Daily Quote
                        </h2>
                        <p className="text-xs text-gray-400">
                            A thought to remember
                        </p>
                    </div>
                </div>

                <span className="text-3xl text-purple-400/70">
                    ❝
                </span>
            </div>

            <p className="mb-7 h-40 text-lg leading-8 text-gray-200">
                {quote.quote}
            </p>

            <div className="flex items-center justify-between border-t border-purple-500/20 pt-5">
                <div>
                    <p className="text-xs  uppercase tracking-widest text-gray-500">
                        Quote by
                    </p>
                    <h3 className="mt-1 font-semibold text-purple-300">
                        {quote.author}
                    </h3>
                </div>

                <div className="rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
                    Inspiration ✨
                </div>
            </div>

        </div>
    );
}

export default QuoteCard;