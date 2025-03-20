import React, { useState } from 'react';
import { URL } from '../../constants/constants';

const GetRecipe = () => {
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question) {
      alert('Please enter a food name!');
      return;
    }

    const payload = {
      contents: [{
        parts: [{
          text: `Give me the recipe and ingredients for making ${question}. Only give recipes and ingredients. If someone asks a random question, return "No result found."`
        }]
      }]
    };

    setLoading(true);
    setResult('');

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.candidates && data.candidates.length > 0) {
        const recipeText = data.candidates[0].content.parts[0].text;
        setResult(recipeText);
      } else {
        setResult('No result found.');
      }
    } catch (err) {
      console.error('Error fetching recipe:', err);
      setResult('Failed to fetch recipe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FF8C00] to-[#FF4500] flex flex-col items-center justify-center p-8 relative overflow-hidden">

      <p className="text-white text-center text-lg font-light mb-8 max-w-2xl">
        🌟 Take the help of AI to explore quick and delicious recipes for your favorite dishes. 
        Just enter a food name and let AI guide you!
      </p>

      <div className="absolute top-[-10%] left-[-20%] w-[350px] h-[350px] bg-white/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-[-10%] right-[-20%] w-[400px] h-[400px] bg-orange-600/20 rounded-full blur-[150px]"></div>

      <div className="bg-white/20 backdrop-blur-lg shadow-2xl rounded-xl overflow-hidden w-full max-w-4xl flex border-[1px] border-white/30">

        <div className="hidden md:flex flex-col justify-center items-center w-2/5 bg-gradient-to-t from-[#FF6347] to-[#FF4500] text-white p-10 relative">
          <div className="absolute top-[-40px] left-[-40px] w-[100px] h-[100px] bg-white/20 rounded-full blur-3xl"></div>
          <h1 className="text-5xl font-bold mb-4">🍳 Recipe Finder</h1>
          <p className="text-center text-lg font-light opacity-90">
            Discover tasty recipes in just one click!
          </p>
        </div>

        <div className="w-full md:w-3/5 p-8 space-y-6">
          <h2 className="text-4xl font-bold text-white text-center mb-4">Get Your Recipe</h2>

          <div className="relative">
            <input
              type="text"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              className="w-full p-4 border border-white/40 rounded-lg bg-white/10 backdrop-blur-md text-white placeholder-white/60 focus:outline-none focus:ring-4 focus:ring-orange-500 focus:ring-opacity-50 text-lg"
              placeholder="What's cooking? (e.g., Chai)"
            />
            <div className="absolute right-4 top-4 text-white/60">🔍</div>
          </div>

          <button
            onClick={askQuestion}
            className={`w-full py-4 rounded-lg text-white font-bold text-lg 
              ${loading ? 'bg-orange-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'}
              transition duration-300 flex items-center justify-center gap-2 shadow-md`}
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                Searching Recipe...
              </>
            ) : (
              'Get Recipe'
            )}
          </button>

          {result && (
            <div 
              className="mt-6 max-h-60 p-4 bg-white/20 backdrop-blur-md border-l-4 border-orange-500 rounded-lg shadow-md overflow-y-auto text-white"
              style={{ maxHeight: '300px', overflowY: 'auto' }}  
            >
              <h3 className="text-2xl font-semibold mb-2">🍲 Recipe:</h3>
              <p className="text-lg whitespace-pre-line">{result}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetRecipe;
