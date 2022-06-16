import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Table from './Components/Table/Table'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Table />} />
      </Routes>
    </>
  )
}

export default App;
