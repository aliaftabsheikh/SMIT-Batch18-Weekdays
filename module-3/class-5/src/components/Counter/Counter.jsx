import React, { useState } from 'react'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    padding: '2.5rem 3rem',
    maxWidth: '320px',
    margin: '4rem auto',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #1f1f2e, #2c2c3e)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    fontFamily: "'Segoe UI', Roboto, sans-serif",
  },
  heading: {
    margin: 0,
    color: '#ffffff',
    fontSize: '1.75rem',
    fontWeight: 600,
    letterSpacing: '1px',
  },
  counter: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  btn: {
    width: '48px',
    height: '48px',
    border: 'none',
    borderRadius: '50%',
    fontSize: '1.5rem',
    fontWeight: 700,
    color: '#ffffff',
    background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)',
    transition: 'transform 0.15s ease, box-shadow 0.15s ease',
  },
  value: {
    minWidth: '60px',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 700,
    color: '#ffffff',
    background: 'rgba(255, 255, 255, 0.06)',
    borderRadius: '10px',
    padding: '0.25rem 1rem',
  },
}

const Counter = () => {
    // let count = 0;
    
    const [count, setCount] = useState(0);


    function increment() {
       setCount(count + 1);
    }

    function decrement() {
        if(count === 0) return;
        setCount(count - 1);
    }

  return (
    <div style={styles.container}>
        <h1 style={styles.heading}>Counter</h1>

        <div style={styles.counter}>
            <button
              style={styles.btn}
              onClick={decrement}
            >-</button>
            <span style={styles.value}>{count}</span>
            <button
            onClick={increment}
              style={styles.btn}
            >+</button>
        </div>
    </div>
  )
}

export default Counter