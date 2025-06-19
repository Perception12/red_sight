
const SkeletonCard = ( ) => (
  <div className="bg-white shadow rounded-lg p-4 max-w-[360px] animate-pulse">
    <div className="bg-gray-300 h-48 w-full rounded mb-4" />
    <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
    <div className="h-4 bg-gray-300 rounded w-1/2 mb-2" />
    <div className="h-4 bg-gray-300 rounded w-1/3" />
  </div>
);

export default SkeletonCard;