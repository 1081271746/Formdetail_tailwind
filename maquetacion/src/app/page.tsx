export default function Home() {
  return (
    <div className="min-h-screen bg-orange-500 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        
        <div className="relative">
          
          <div className="absolute top-0 left-20 w-6 h-3 bg-orange-500 rounded-b-full z-10"></div>

          <div className="absolute bottom-0 left-20 w-6 h-3 bg-orange-500 rounded-t-full z-10"></div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex relative">
            <div className="flex-1 p-6">
              <div className="flex gap-6">
                {/* QR Code */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=BOM-AMS-NIKITA-SHARMA-4A"
                      alt="QR Code"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-gray-500 text-sm">Mumbai,</div>
                      <div className="text-gray-500 text-sm">India</div>
                      <div className="text-3xl font-bold text-gray-900">BOM</div>
                      <div className="text-gray-500 text-sm">1:50 AM</div>
                    </div>

                    
                    <div className="flex-1 flex items-center justify-center relative">
                      <div className="absolute left-0 right-0 flex items-center">
                        {/* Líneas punteadas hacia la izquierda */}
                        <div className="flex-1 border-t-2 border-dotted border-gray-300"></div>

                        
                        <div className="flex-1 border-t-2 border-dotted border-gray-300 mr-8"></div>
                      </div>
                      <div className="ml-12 mr-2 text-gray-600">
                        <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                        </svg>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-gray-500 text-sm">Amsterdam,</div>
                      <div className="text-gray-500 text-sm">Netherlands</div>
                      <div className="text-3xl font-bold text-gray-900">AMS</div>
                      <div className="text-gray-500 text-sm">8:30 AM</div>
                    </div>
                  </div>

                  
                  <div className="border-t border-dashed border-gray-300 my-4"></div>

                  
                  <div className="flex justify-between text-sm">
                    <div>
                      <div className="text-gray-500">Passenger</div>
                      <div className="font-semibold text-gray-900">Nikita Sharma</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Seat</div>
                      <div className="font-semibold text-gray-900">4A</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Terminal</div>
                      <div className="font-semibold text-gray-900">D</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Gate</div>
                      <div className="font-semibold text-gray-900">32</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Boarding</div>
                      <div className="font-semibold text-gray-900">12:40 PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="w-24 bg-gray-800 flex flex-col justify-between text-white relative">
              <div className="flex justify-center pt-8">
                <div className="transform -rotate-90 whitespace-nowrap">
                  <div className="text-[10px] font-semibold">Boarding Pass</div>
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-gray-800 font-bold text-xs">J</span>
                </div>
              </div>

              <div className="flex flex-col items-center pb-8">
                <div className="transform -rotate-90 text-[10px] font-semibold tracking-wide whitespace-nowrap">
                  JET AIRWAYS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}