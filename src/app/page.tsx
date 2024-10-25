"use client"

import React, { useEffect } from 'react';
import init from '../../public/js/main'


export default function Home() {
  // useEffect(() => {
  //   import('@cljs/main').then(({ init }) => {
  //     init()
  //     if (typeof window.init === "function") {
  //       console.log("ClojureScript init function found!");
  //       window.init();
  //     } else {
  //       console.error("ClojureScript init function is still not found on window!");
  //     }
  //   });
  // }, []);

  useEffect(() => {
    // Dynamically load the ClojureScript file
    const script = document.createElement('script');
    script.src = "/js/main.js"; // Ensure this path matches the output in public
    console.error(script.src);
    script.onload = () => {
      // Call window.init once the script is loaded
      if (typeof window.init === "function") {
        window.init();
      } else {
        console.error("window.init is not defined or not a function.");
      }
    };
    script.onerror = () => {
      console.error("Failed to load main.js from /js/main.js");
    };
    document.body.appendChild(script);
  }, []);

  return <div id="app"></div>;
}