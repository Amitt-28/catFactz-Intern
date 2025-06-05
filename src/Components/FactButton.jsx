import { PawPrint as Paw } from 'lucide-react';


const FactButton = ({ onClick, isLoading }) => {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      className="flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
      aria-label="Fetch a random cat fact"
    >
      {isLoading ? (
        <>
          <Paw className="w-6 h-6 animate-bounce" />
          <span>Fetching...</span>
        </>
      ) : (
        <>
          <Paw className="w-6 h-6" />
          <span>Get Cat Fact</span>
        </>
      )}
    </button>
  );
};

export default FactButton;