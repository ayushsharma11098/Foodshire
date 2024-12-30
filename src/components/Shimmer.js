const Shimmer = () => {
    return (
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(270px,_1fr))] gap-6 p-8 bg-gray-50 animate-pulse">
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col space-y-4"
          >
            {/* Thumbnail */}
            <div className="w-full h-40 bg-gray-200 rounded-md"></div>
            {/* Title Placeholder */}
            <div className="w-3/4 h-5 bg-gray-200 rounded"></div>
            <div className="w-1/2 h-5 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
  