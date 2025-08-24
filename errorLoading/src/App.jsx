import { useState } from 'react'
import { Suspense, lazy } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ErrorBoundary from './Components/ErrorBoundary'
const Profile= lazy(()=> import('./Components/Profile'));
const Settings=lazy(()=> import('./Components/Setting'));

function App() {
  

  return (
    <>
      <ErrorBoundary>
      <Suspense fallback={<h3>⏳ Loading Profile...</h3>}>
        <Profile/>
      </Suspense>
      </ErrorBoundary>


      <ErrorBoundary>
      <Suspense fallback={<h3>⏳ Loading Settings...</h3>}>
        <Settings/>
      </Suspense>
      </ErrorBoundary>


    </>
  )
}

export default App
