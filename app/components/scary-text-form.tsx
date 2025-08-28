"use client";
import { generateCreepyText } from '@/functions/scary-text-generator';
import { styleMap } from '@/lib/creepy-letters'
import { Copy, CopyIcon, Zap } from 'lucide-react'
import React, { useState } from 'react'

const ScaryTextForm = () => {
      const [input, setInput] = useState("");
      const [copiedOutput, setCopiedOutput] = useState(false);

      const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const handleStyleChange = (style: string) => {
    if (selectedStyles.includes(style)) {
      setSelectedStyles(selectedStyles.filter((s) => s !== style));
    } else {
      setSelectedStyles([...selectedStyles, style]);
    }   
    }

  const output = generateCreepyText(input, selectedStyles);
  return (
    < div className="w-full  flex flex-col items-center gap-6">
    
        {/* Form */}
      <form className="w-full max-w-5xl p-6 rounded-2xl shadow-lg border border-neutral-800">
        <label className="block text-gray-600 mb-2 text-lg">Enter Your Text</label>
        <textarea
          value={input}
          rows={3}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something scary..."
          className="w-full p-3 rounded-lg  border  text-gray-800 mb-4"
        />

        <label className="block text-gray-600 mb-2 text-lg">Select Style</label>
           <div className="mb-6">
       
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 ">
          {Object.keys(styleMap).map((style) => (
            <label
              key={style}
              className={`flex items-start p-3 rounded-lg border cursor-pointer transition-colors ${
                selectedStyles.includes(style)
                  ? 'bg-[#5a4631] border-[#5a4631] text-gray-100 '
                  : 'bg-[#e6d9c9] border-gray-300 text-gray-900 hover:bg-gray-750'
              }`}
            >
              <input
                type="checkbox"
                checked={selectedStyles.includes(style)}
                onChange={() => handleStyleChange(style)}
                className="mt-1 mr-3 text-red-500 focus:ring-red-500"
              />
              <div>
                <div className="font-medium ">{style}</div>
              </div>
            </label>
          ))}
        </div>
      </div>
      </form>

      {/* Output Preview */}
      <div className="w-full max-w-5xl mt-6  border  p-6 rounded-2xl shadow-xl">
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className='flex items-center gap-2'>
            <Zap size={20} className="text-yellow-400" />
          <h2 className="text-xl font-semibold">Generated Scary Text</h2>
          </div>
            <Copy
                size={24}
                onClick={() => {
                navigator.clipboard.writeText(output);
                setCopiedOutput(true);
                setTimeout(() => setCopiedOutput(false), 2000);
                }}
                                className={` cursor-pointer  ${copiedOutput ? 'text-green-500' : 'text-gray-600 hover:text-gray-900' }`}

            />
        </div>
        <p className="text-2xl break-words leading-relaxed text-red-400">
          {output || "👻 Start typing above..."}
        </p>
      </div>
    
    </div>
  )
}

export default ScaryTextForm