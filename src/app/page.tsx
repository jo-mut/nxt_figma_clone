"use client"

import { RoomProvider } from '@liveblocks/react';
import React, { useEffect } from 'react';
import { Room } from "./Room";
import { CollaborativeApp } from './CollaborativeApp';

export default function Home() {

  useEffect(() => {
    // Dynamically load the ClojureScript file
    const script = document.createElement('script');
    script.src = "/js/main.js"; // Ensure this path matches the output in public
    script.onload = () => {
      // Call window.init once the script is loaded
      if (typeof window.init === "function") {
        window.init();
      }
    };
    script.onerror = () => {
      console.error("Failed to load main.js from /js/main.js");
    };
    document.body.appendChild(script);
  }, []);

  return <div id="app">
    {/* <Room>
      <CollaborativeApp/>
    </Room> */}
  </div>;
}