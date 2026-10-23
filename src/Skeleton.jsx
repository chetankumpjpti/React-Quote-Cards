function QuoteSkeleton() {
    return (
        <div className="rounded-2xl border border-purple-500/20 bg-[#171126] p-7 shadow-lg shadow-purple-950/20">

            <div className="mb-6 flex items-center gap-3">
                <div className="h-10 w-10 animate-pulse rounded-xl bg-purple-500/20"></div>

                <div>
                    <div className="mb-2 h-4 w-24 animate-pulse rounded bg-purple-400/20"></div>
                    <div className="h-3 w-32 animate-pulse rounded bg-gray-700"></div>
                </div>
            </div>

            <div className="mb-7 space-y-3">
                <div className="h-4 w-full animate-pulse rounded bg-gray-700"></div>
                <div className="h-4 w-full animate-pulse rounded bg-gray-700"></div>
                <div className="h-4 w-3/4 animate-pulse rounded bg-gray-700"></div>
            </div>

            <div className="flex items-center justify-between border-t border-purple-500/20 pt-5">
                <div>
                    <div className="mb-2 h-3 w-16 animate-pulse rounded bg-gray-700"></div>
                    <div className="h-4 w-24 animate-pulse rounded bg-purple-400/20"></div>
                </div>

                <div className="h-9 w-28 animate-pulse rounded-full bg-purple-500/20"></div>
            </div>

        </div>
    );
}

export default QuoteSkeleton;