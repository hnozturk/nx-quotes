import React, { useEffect, useState } from 'react';
import { Quotes } from '@quotes/api-interfaces';

export const App = () => {
  const [quotes, setQuotes] = useState<Quotes[]>([{ text: '', author: ' ' }]);

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then((data) => setQuotes(data));
  }, []);

  console.log(quotes);

  return (
    <>
      {quotes?.map((q) => (
        <div style={{ textAlign: 'center' }}>
          <h1>{q.text}</h1>
          <p>{q.author}</p>
        </div>
      ))}
    </>
  );
};

export default App;
