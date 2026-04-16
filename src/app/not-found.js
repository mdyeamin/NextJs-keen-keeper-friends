"use client";

const notFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4 w-full max-w-2xl mx-auto text-center">
      {/* Animated 404 Section */}
      <div className="relative mb-8 flex items-center justify-center">
        {/* Floating 404 Background */}
        <h1 className="text-[120px] md:text-[150px] font-black text-slate-200/60 leading-none select-none animate-bounce [animation-duration:3s]">
          404
        </h1>

        {/* Center Icon with Pulse Effect */}
        <div className="absolute flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-100 rounded-full blur-xl animate-pulse"></div>
            <div className="relative w-24 h-24 bg-white rounded-3xl flex items-center justify-center border border-slate-100 shadow-2xl rotate-6 group-hover:rotate-0 transition-transform duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-12 h-12 text-emerald-500 animate-spin-slow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10">
        <h3 className="text-3xl font-black text-slate-800 mb-3 tracking-tight">
          No Records Found
        </h3>
        <p className="text-slate-500 font-medium max-w-sm mx-auto leading-relaxed mb-10">
          Oops! The records you&apos;re looking for aren&apos;t here. Try going
          back or refreshing the page.
        </p>
      </div>

      {/* Action Buttons Group */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
        {/* Go Back Button */}
        <button
          onClick={() => window.history.back()}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 border-2 border-slate-100 rounded-2xl font-bold text-sm hover:border-slate-200 hover:bg-slate-50 transition-all duration-300 active:scale-95 shadow-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Go Back
        </button>

        {/* Refresh Button */}
        <button
          onClick={() => window.location.reload()}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#244d3f] text-white rounded-2xl font-bold text-sm hover:bg-[#1a3d32] transition-all duration-300 active:scale-95 shadow-lg shadow-emerald-900/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
          Refresh View
        </button>
      </div>
    </div>
  );
};

export default notFound;
