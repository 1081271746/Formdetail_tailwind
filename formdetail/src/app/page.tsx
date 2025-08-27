"use client";
import { useState } from "react";

function Toggle({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
        checked ? "bg-purple-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default function AppearanceGrid() {
  const [theme, setTheme] = useState("light");
  const [accent, setAccent] = useState("purple");
  const [motion, setMotion] = useState(true);
  const [autoplay, setAutoplay] = useState(true);
  const [hqPhoto, setHqPhoto] = useState(false);

  return (
    <div className="grid place-items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6 grid gap-6">
        {/* Header */}
        <div className="grid gap-1">
          <h2 className="text-xl font-bold text-gray-900">Appearance</h2>
          <p className="text-sm text-gray-500">
            Set or customize your preferences for the system
          </p>
        </div>

        {/* Language */}
        <div className="grid grid-cols-2 items-center">
          <div>
            <div className="font-medium text-gray-800">Language</div>
            <div className="text-sm text-gray-500">
              Select the language of the platform
            </div>
          </div>
          <select className="justify-self-end border rounded-md px-3 py-1 text-sm">
            <option>English</option>
          </select>
        </div>

        {/* Interface Theme */}
        <div className="grid gap-3">
          <div>
            <div className="font-medium text-gray-800">Interface theme</div>
            <div className="text-sm text-gray-500">
              Customize your application appearance
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { key: "auto", label: "Auto", bg: "from-gray-200 to-purple-200" },
              { key: "light", label: "Light", bg: "from-white to-gray-200" },
              { key: "dark", label: "Dark", bg: "from-purple-600 to-purple-800" },
            ].map((opt) => (
              <button
                key={opt.key}
                onClick={() => setTheme(opt.key)}
                className={`rounded-xl border p-2 flex flex-col items-center ${
                  theme === opt.key
                    ? "ring-2 ring-purple-500 border-transparent"
                    : "border-gray-300 hover:border-gray-400"
                }`}
              >
                <div
                  className={`h-16 w-full rounded-md bg-gradient-to-br ${opt.bg} relative`}
                >
                  <div className="absolute inset-x-2 top-2 h-2 bg-white/70 rounded" />
                  <div className="absolute inset-x-2 top-5 h-2 bg-white/50 rounded" />
                </div>
                <div className="text-sm mt-2 text-gray-700">{opt.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Accent color */}
        <div className="grid gap-3">
          <div>
            <div className="font-medium text-gray-800">Accent color</div>
            <div className="text-sm text-gray-500">
              Pick your platform's main color
            </div>
          </div>
          <div className="grid grid-cols-5 gap-3">
            {["#ef4444", "#f97316", "#22c55e", "#3b82f6", "#a855f7"].map((c) => (
              <button
                key={c}
                onClick={() => setAccent(c)}
                className={`w-6 h-6 rounded-full ${
                  accent === c
                    ? "ring-2 ring-offset-2 ring-purple-500"
                    : ""
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>

        {/* Toggles */}
        <div className="grid gap-4">
          {[
            { label: "Reduce motion", val: motion, set: setMotion },
            { label: "Auto play", val: autoplay, set: setAutoplay },
            { label: "High quality photo", val: hqPhoto, set: setHqPhoto },
          ].map((item) => (
            <div className="grid grid-cols-2 items-center" key={item.label}>
              <div className="font-medium text-gray-800">{item.label}</div>
              <div className="justify-self-end">
                <Toggle
                  checked={item.val}
                  onChange={() => item.set(!item.val)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="grid grid-cols-2 items-center">
          <button className="text-sm text-gray-500 justify-self-start">
            Reset to default
          </button>
          <div className="flex gap-3 justify-self-end">
            <button className="px-4 py-2 rounded-lg border">Cancel</button>
            <button className="px-4 py-2 rounded-lg bg-purple-600 text-white">
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
