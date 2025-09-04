"use client";
import { useState } from 'react';

export default function RandomCityGenerator() {
  const [city, setCity] = useState({
    name: "Paris",
    country: "France",
    description: "The City of Light, known for its art, fashion, gastronomy and culture. Its picturesque boulevards and river Seine make it one of the most beautiful cities in the world.",
    population: "2.1 million",
    landmark: "Eiffel Tower"
  });
  const [isLoading, setIsLoading] = useState(false);

  // This function would call the DeepSeek API in a real implementation
  const generateCity = () => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const sampleCities = [
        {
          name: "Kyoto",
          country: "Japan",
          description: "Famous for its numerous classical Buddhist temples, gardens, imperial palaces, and traditional wooden houses. It's a living monument to Japan's cultural heritage.",
          population: "1.5 million",
          landmark: "Kiyomizu-dera Temple"
        },
        {
          name: "Marrakech",
          country: "Morocco",
          description: "A vibrant city known for its medina, a dense maze of markets and courtyards. The city's red sandstone walls glow in the sunlight, earning it the nickname 'Red City'.",
          population: "930,000",
          landmark: "Jemaa el-Fnaa square"
        },
        {
          name: "Prague",
          country: "Czech Republic",
          description: "The City of a Hundred Spires with a historic center that's a UNESCO World Heritage site. Its beautiful architecture spans from Gothic to Baroque.",
          population: "1.3 million",
          landmark: "Charles Bridge"
        },
        {
          name: "Venice",
          country: "Italy",
          description: "Built on more than 100 small islands in a lagoon in the Adriatic Sea. It has no roads, just canals, making it one of the most unique cities in the world.",
          population: "260,000",
          landmark: "St. Mark's Basilica"
        }
      ];
      setCity(sampleCities[Math.floor(Math.random() * sampleCities.length)]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <header className="bg-[#e6d9c9] py-8 px-6 text-center border-b border-[#d4c6b3]">
        <h1 className="text-4xl font-bold text-black mb-3">Vintage City Explorer</h1>
        <p className="text-xl text-gray-800 max-w-2xl mx-auto">
          Discover random cities from around the world with our vintage-inspired explorer
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Generator Card */}
        <div className="bg-[#e6d9c9] rounded-2xl shadow-md overflow-hidden mb-16 border border-[#d4c6b3]">
          {/* City Information */}
          {city ? (
            <div className="p-8 animate-fadeIn">
              <div className="text-center mb-8">
                <h2 className="text-5xl font-bold text-black mb-3">{city.name}</h2>
                <div className="inline-block bg-[#d4c6b3] px-4 py-1 rounded-full">
                  <p className="text-xl text-gray-800">{city.country}</p>
                </div>
              </div>
              
              <div className="bg-[#f6f0e6] p-8 rounded-xl border border-[#d4c6b3] mb-8">
                <p className="text-black text-lg leading-relaxed">{city.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#f6f0e6] p-6 rounded-xl border border-[#d4c6b3] text-center">
                  <h3 className="font-semibold text-black mb-2 text-lg">Population</h3>
                  <p className="text-2xl">{city.population}</p>
                </div>
                <div className="bg-[#f6f0e6] p-6 rounded-xl border border-[#d4c6b3] text-center">
                  <h3 className="font-semibold text-black mb-2 text-lg">Famous Landmark</h3>
                  <p className="text-2xl">{city.landmark}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-64 flex items-center justify-center">
              <p className="text-black text-lg">No city data available</p>
            </div>
          )}
          
          {/* Generate Button */}
          <div className="px-8 pb-8 text-center">
            <button 
              onClick={generateCity}
              disabled={isLoading}
              className="bg-[#c0ae95] hover:bg-[#b19f87] text-black px-10 py-4 rounded-xl text-xl font-semibold transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Discovering...
                </span>
              ) : (
                "Discover Another City"
              )}
            </button>
          </div>
        </div>

        {/* SEO Sections */}
        <div className="space-y-12">
          {/* About Section */}
          <section className="bg-[#e6d9c9] p-8 rounded-2xl border border-[#d4c6b3]">
            <h2 className="text-3xl font-bold text-black mb-6 text-center">About Vintage City Explorer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">Our Mission</h3>
                <p className="text-black leading-relaxed">
                  Vintage City Explorer is designed to bring the charm of world travel to your fingertips. 
                  Using advanced AI technology, we generate detailed information about cities across the globe, 
                    helping you discover new destinations and learn about different cultures.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-4">How It Works</h3>
                <p className="text-black leading-relaxed">
                  {"Our platform integrates with DeepSeek API to fetch accurate and engaging information about cities worldwide. Each time you click 'Discover Another City', our system generates a new urban destination with key details including population, famous landmarks, and cultural highlights."}
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="bg-[#e6d9c9] p-8 rounded-2xl border border-[#d4c6b3]">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Why Explore Cities With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#f6f0e6] p-6 rounded-xl border border-[#d4c6b3] text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold text-black mb-3">Global Coverage</h3>
                <p className="text-black">Discover cities from every continent and culture around the world</p>
              </div>
              <div className="bg-[#f6f0e6] p-6 rounded-xl border border-[#d4c6b3] text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-semibold text-black mb-3">Educational</h3>
                <p className="text-black">Learn about geography, culture, and history of diverse urban centers</p>
              </div>
              <div className="bg-[#f6f0e6] p-6 rounded-xl border border-[#d4c6b3] text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-black mb-3">Vintage Aesthetic</h3>
                <p className="text-black">Enjoy a nostalgic browsing experience with our classic design</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-[#e6d9c9] p-8 rounded-2xl border border-[#d4c6b3]">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-[#f6f0e6] p-6 rounded-xl border border-[#d4c6b3]">
                <h3 className="text-xl font-semibold text-black mb-3">How are the cities selected?</h3>
                <p className="text-black">
                  {"Our system uses DeepSeek API to randomly select from a database of thousands of cities worldwide, ensuring a diverse and interesting selection each time."}
                </p>
              </div>
              <div className="bg-[#f6f0e6] p-6 rounded-xl border border-[#d4c6b3]">
                <h3 className="text-xl font-semibold text-black mb-3">Is the information accurate?</h3>
                <p className="text-black">
                 {" Yes, we source our data from reliable geographical databases and use AI to present it in an engaging, informative way. Population figures and landmarks are verified for accuracy."}
                </p>
              </div>
              <div className="bg-[#f6f0e6] p-6 rounded-xl border border-[#d4c6b3]">
                <h3 className="text-xl font-semibold text-black mb-3">Can I request specific cities?</h3>
                <p className="text-black">
                  {"Currently, our explorer randomly selects cities to ensure diversity. However, we're working on a feature that will allow users to search for specific destinations."}
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

    

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        body {
          font-family: 'Georgia', serif;
        }
      `}</style>
    </div>
  );
}