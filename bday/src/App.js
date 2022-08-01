import React, { useState } from 'react';
import data from './components/data';
import List from './components/List';
import Button from '@mui/material/Button';



function App() {
  const [people,setpeople] = useState(data)
  return(
  <main>
    <section className='container'>
    <h3>{people.length} Birthdays Today</h3>
    <List people={people} />

    
    <Button variant='contained' onClick={()=> console.log('You Clicked Me')}>Clear All</Button>
    </section>
    
    
  </main>
  );
}

export default App;