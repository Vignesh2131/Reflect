import { Calendar } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative container mx-auto px-4 pt-16 pb-16">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-7xl lg:text-8xl mb-6 gradient-title">
          Your Space to Reflect. <br/> Your Story to tell
        </h1>
        <p className="text-lg md:text-xl text-orange-800 mb-8">
          Capture your thoughs, track your moods, and reflect on your journey
          in a beautiful, secure space.
        </p>
        <div className="relative">
          <div/>
          <div className="bg-white rounded-2xl p-4 max-full mx-auto">
            <div className="border-b border-orange-100 pb-4 mb-4 flex items-center justify-between">
              <Calendar className="h-5 w-5 text-orange-600" />
              <span className="text-orange-900 font-medium">
                Today&rsquo;s Entry
              </span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
