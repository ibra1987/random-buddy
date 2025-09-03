"use client";

import { useState, useEffect, useRef } from "react";

export default function RandomNameWheelGenerator() {
  const [spinning, setSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [winner, setWinner] = useState<string | null>(null);
  const [names, setNames] = useState<string[]>(["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank"]);
  const [nameInput, setNameInput] = useState("");
  const [error, setError] = useState("");
  const [isClient, setIsClient] = useState(false);
  const rotationRef = useRef(0);

  useEffect(() => {
    setIsClient(true);
    setNameInput(names.join(", "));
  }, []);

  // Update name input field
  const handleNameInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNameInput(e.target.value);
  };

  // Process comma-separated names
  const processNames = () => {
    setError("");
    
    if (!nameInput.trim()) {
      setError("Please enter at least one name");
      return;
    }

    const nameArray = nameInput
      .split(',')
      .map(name => name.trim())
      .filter(name => name !== "");
    
    if (nameArray.length < 2) {
      setError("Please enter at least 2 names separated by commas");
      return;
    }

    setNames(nameArray);
    setWinner(null);
    setRotation(0);
    rotationRef.current = 0;
  };

  // Shuffle names randomly
  const shuffleNames = () => {
    if (names.length < 2) return;
    
    const shuffledNames = [...names];
    for (let i = shuffledNames.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledNames[i], shuffledNames[j]] = [shuffledNames[j], shuffledNames[i]];
    }
    
    setNames(shuffledNames);
    setWinner(null);
  };

  const spinWheel = () => {
    if (spinning || names.length < 2) return;

    setSpinning(true);
    setWinner(null);

    // Add extra rotations for spinning effect
    const extraRotations = 5;
    const extraDegrees = 360 * extraRotations;
    
    // Calculate a random stopping position (in degrees)
    const randomStop = Math.floor(Math.random() * 360);
    
    // Total rotation is the current rotation plus extra rotations plus the random stop position
    const totalRotation = rotationRef.current + extraDegrees + randomStop;
    
    setRotation(totalRotation);
    rotationRef.current = totalRotation;

    setTimeout(() => {
      setSpinning(false);
      
      // Calculate which segment the pointer is pointing to
      // The pointer is at the top (0 degrees), so we need to adjust for the rotation
      const normalizedRotation = totalRotation % 360;
      
      // Calculate the size of each segment in degrees
      const segmentSize = 360 / names.length;
      
      // Determine which segment the pointer is in
      const pointerPosition = (360 - normalizedRotation) % 360;
      const winnerIndex = Math.floor(pointerPosition / segmentSize) % names.length;
      
      setWinner(names[winnerIndex]);
    }, 5000); // match transition duration
  };

  // Generate colors for the wheel slices
  const generateSliceColors = (count: number) => {
    const baseColors = [
      "#5a4631", "#6b5a4d", "#7d6e63", "#8f8278", 
      "#a1968d", "#b3aaa3", "#c5beb8", "#d7d2ce"
    ];
    
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(baseColors[i % baseColors.length]);
    }
    return colors;
  };

  const sliceColors = generateSliceColors(names.length);

  // Pre-calculate SVG paths to avoid floating point differences
  const getSlicePath = (index: number, total: number) => {
    const sliceAngle = 360 / total;
    const startAngle = index * sliceAngle;
    const endAngle = (index + 1) * sliceAngle;
    
    // Convert angles to radians
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;
    
    // Calculate coordinates for the slice
    const x1 = 50 + 50 * Math.sin(startAngleRad);
    const y1 = 50 - 50 * Math.cos(startAngleRad);
    const x2 = 50 + 50 * Math.sin(endAngleRad);
    const y2 = 50 - 50 * Math.cos(endAngleRad);
    
    // Large arc flag (1 if angle is greater than 180)
    const largeArcFlag = sliceAngle > 180 ? 1 : 0;
    
    // Round coordinates to avoid floating point precision issues
    return `M50,50 L${x1.toFixed(6)},${y1.toFixed(6)} A50,50 0 ${largeArcFlag},1 ${x2.toFixed(6)},${y2.toFixed(6)} Z`;
  };

  // Calculate text position with proper skew adjustment
  const getTextPosition = (index: number, total: number) => {
    const sliceAngle = 360 / total;
    const startAngle = index * sliceAngle;
    const endAngle = (index + 1) * sliceAngle;
    const middleAngle = (startAngle + endAngle) / 2;
    
    // Convert angles to radians
    const middleAngleRad = (middleAngle * Math.PI) / 180;
    
    // Position text along the radius
    const textRadius = 35; // Distance from center
    
    return {
      x: 50 + textRadius * Math.sin(middleAngleRad),
      y: 50 - textRadius * Math.cos(middleAngleRad),
      rotation: middleAngle,
      skew: 0 // SVG doesn't support skew the same way as CSS
    };
  };

  // Calculate optimal font size based on name length and number of names
  const getFontSize = (name: string, totalNames: number) => {
    const baseSize = 4;
    const lengthFactor = Math.max(1, name.length / 6);
    const countFactor = Math.max(1, totalNames / 6);
    
    return Math.max(2, baseSize / (lengthFactor * countFactor));
  };

  if (!isClient) {
    return (
      <div
        className="flex flex-col items-center space-y-6 p-6 rounded-xl shadow-lg max-w-6xl mx-auto mt-10"
        style={{ backgroundColor: "#f6f0e6" }}
      >
        <div className="w-96 h-96 lg:w-[36rem] lg:h-[36rem] flex items-center justify-center">
          <div className="text-lg" style={{ color: "#5a4631" }}>Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col items-center space-y-6 p-6  max-w-5xl mx-auto mt-10"
      style={{ backgroundColor: "#f6f0e6" }}
    >
      <h1 className="text-5xl font-bold" style={{ color: "#5a4631" }}>
        Name Wheel Generator
      </h1>
      
      {/* Name Input Section */}
      
      <div className="w-full max-w-5xl bg-[#e6d9c9] border-black/10 border rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-2" style={{ color: "#5a4631" }}>
          Enter names (comma-separated)
        </h2>
        
        <textarea
          value={nameInput}
          onChange={handleNameInputChange}
          placeholder="Alice, Bob, Charlie, Diana, Eve, Frank"
          className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5a4631] resize-none text-lg"
          style={{ borderColor: "#5a4631", minHeight: "120px" }}
          rows={3}
        />
        
        {error && (
          <p className="text-red-500 text-base mt-2">{error}</p>
        )}
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
          <span className="text-base" style={{ color: "#5a4631" }}>
            {names.length} names added
          </span>
          <div className="flex gap-3">
            <button
              onClick={processNames}
              className="px-5 py-3 rounded-lg text-base font-semibold"
              style={{ backgroundColor: "#5a4631", color: "#f6f0e6" }}
            >
              Update Names
            </button>
            <button
              onClick={shuffleNames}
              disabled={names.length < 2}
              className="px-5 py-3 rounded-lg text-base font-semibold"
              style={{ 
                backgroundColor: names.length < 2 ? "#6b5a4d" : "#7d6e63", 
                color: "#f6f0e6",
                opacity: names.length < 2 ? 0.7 : 1
              }}
            >
              Shuffle Names
            </button>
          </div>
        </div>
      </div>

      {/* Wheel Container */}
      <div className="relative w-96 h-96 md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[36rem] xl:w-[40rem] xl:h-[40rem] flex items-center justify-center">
        {/* Pointer - Fixed at the top */}
        <div className="absolute top-0 left-1/2 rotate-180 -translate-x-1/2 z-20">
          <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[40px] border-l-transparent border-r-transparent border-b-[#d4a373] drop-shadow-lg"></div>
          <div className="w-7 h-7 rounded-full mx-auto -mt-1" style={{ backgroundColor: "#d4a373" }}></div>
        </div>
        
        {/* Wheel */}
        <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] xl:w-[36rem] xl:h-[36rem] rounded-full border-8 border-[#5a4631] shadow-xl overflow-hidden">
          {names.length > 0 ? (
            <div
              className="w-full h-full transition-transform duration-[5000ms] ease-out"
              style={{
                transform: `rotate(${rotation}deg)`,
              }}
            >
              {/* Wheel Sectors */}
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                {names.map((name, i) => {
                  const path = getSlicePath(i, names.length);
                  const textPos = getTextPosition(i, names.length);
                  const fontSize = getFontSize(name, names.length);
                  
                  return (
                    <g key={i}>
                      <path
                        d={path}
                        fill={sliceColors[i]}
                      />
                      <text
                        x={textPos.x}
                        y={textPos.y}
                        textAnchor="middle"
                        fill="#f6f0e6"
                        fontSize={fontSize}
                        fontWeight="bold"
                        transform={`rotate(${textPos.rotation}, ${textPos.x}, ${textPos.y}) skewZ(${textPos.skew})`}
                        className="select-none"
                      >
                        {name}
                      </text>
                    </g>
                  );
                })}
                {/* Center circle */}
                <circle cx="50" cy="50" r="14" fill="#d4a373" stroke="#5a4631" strokeWidth="3" />
              </svg>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: "#6b5a4d" }}>
              <p className="text-center p-4 text-base" style={{ color: "#f6f0e6" }}>
                Add at least 2 names to spin the wheel
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Spin Button */}
      <button
        onClick={spinWheel}
        disabled={spinning || names.length < 2}
        className="px-10 py-4 rounded-xl text-xl font-semibold shadow-md transition duration-300 w-full max-w-2xl"
        style={{
          backgroundColor: spinning || names.length < 2 ? "#6b5a4d" : "#5a4631",
          color: "#f6f0e6",
          opacity: spinning || names.length < 2 ? 0.7 : 1,
        }}
      >
        {spinning ? "Spinning..." : names.length < 2 ? "Add more names" : "Spin the Wheel"}
      </button>

      {/* Winner */}
      {winner && (
        <div
          className="text-5xl font-bold mt-6 p-4 rounded-lg shadow-md w-full max-w-2xl text-center"
          style={{ color: "#5a4631", backgroundColor: "#d4a373" }}
        >
          🎉 Winner: <span className="underline">{winner}</span>
        </div>
      )}

      {/* Instructions */}
      <div className="text-base mt-4 text-center max-w-2xl" style={{ color: "#5a4631" }}>
        <p>The pointer is fixed at the top of the wheel.</p>
        <p>After spinning, the name pointed to will be selected as the winner.</p>
      </div>
    </div>
  );
}