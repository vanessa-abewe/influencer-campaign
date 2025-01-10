

export default function Home() {
  return (
    <div className="relative grid grid-rows-[1fr_1fr_1fr] items-center justify-items-center h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     
      <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1]">
        
        <div className="absolute top-10 left-[5%] w-24 h-24 bg-blue-200 rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute top-[20%] right-[15%] w-32 h-32 bg-green-200 rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute top-[40%] left-[35%] w-20 h-20 bg-yellow-200 rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute top-[30%] right-[25%] w-40 h-2 bg-red-200 opacity-80 animate-pulse"></div>
        <div className="absolute top-[60%] left-[15%] w-16 h-16 bg-purple-500 opacity-60 rotate-45"></div>
        <div className="absolute top-[15%] left-[80%] w-24 h-24 bg-pink-200 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute top-[50%] right-[10%] w-20 h-20 bg-indigo-200 opacity-60 rotate-12"></div>
        <div className="absolute top-[70%] left-[50%] w-28 h-28 bg-teal-200 rounded-full opacity-75 animate-pulse"></div>
      </div>
    
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-2xl w-full">
        <h1 className="text-3xl font-semibold text-blue-900 mb-6">Campaign Summary</h1>
        <p className="text-lg text-gray-700 text-center sm:text-left">
          Our recent campaign focused on promoting sustainable living practices. Over the past month, we engaged with
          over 50,000 users, sharing educational content about reducing carbon footprints. The results have been
          overwhelmingly positive, with a substantial increase in user participation and awareness. Stay tuned for more
          exciting updates!
        </p>

        
        <div className="w-24 h-24 bg-purple-500 opacity-60 rotate-45 mb-10 mt-8"></div>
      </main>
    </div>
  );
}
