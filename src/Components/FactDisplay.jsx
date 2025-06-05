
const FactDisplay = ({ fact, error }) => {
  if (error) {
    return (
      <div className="p-8 bg-red-50 border-2 border-red-200 rounded-2xl shadow-inner animate-fade-in">
        <p className="text-red-600 text-center">{error}</p>
      </div>
    );
  }

  if (!fact) {
    return (
      <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100 rounded-2xl shadow-inner">
        <p className="text-center text-purple-600 italic">
          Click the paw button below to discover an amazing cat fact! 🐱
        </p>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-100 rounded-2xl shadow-inner animate-fade-in">
      <p className="text-gray-800 leading-relaxed text-lg text-center">
        {fact}
      </p>
    </div>
  );
};

export default FactDisplay;