import { useState } from "react";
import confetti from 'canvas-confetti';
import fetchRandomFact from "./Service/fetchFact";
import FactDisplay from "./Components/FactDisplay";
import FactButton from "./Components/FactButton";

function App() {

  const [fact, setFact] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const triggerConfetti = () => {
    const colors = ['#9333ea', '#db2777', '#ffffff'];
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors,
    });
  };

  const handleGetFact = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const newFact = await fetchRandomFact();
      setFact(newFact);
      triggerConfetti();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 flex flex-col items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8 border-4 border-purple-200 transition-transform duration-300 hover:scale-[1.01]">
          <header className="mb-8 text-center relative">
            <div className="flex justify-center mb-4">
              <div
                className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300"
              >
                <div className="w-18 h-18 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                  <img src="/intern.jpg " alt="" className="w-full h-full scale-150" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              CatFactz
            </h1>
            <p className="text-gray-600 text-lg">Discover Purr-fectly Interesting Cat Facts! 🐱</p>
          </header>

          <div className="mb-8 transform hover:scale-[1.02] transition-transform duration-300">
            <FactDisplay fact={fact} error={error} />
          </div>

          <div className="flex justify-center">
            <FactButton onClick={handleGetFact} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
