import React from 'react';

const LandingPage = () => {
  const containerStyle = {
    display: 'flex',
    height: '100vh',
    width: '100%',
    background: 'linear-gradient(to bottom right, #fff9c4, #ffcc80)',
  };

  const leftStyle = {
    flex: 6,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '4rem',
    textAlign: 'left',
  };

  const rightStyle = {
    flex: 4,
  };

  const titleStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '1rem',
  };

  const textStyle = {
    fontSize: '1.25rem',
    color: '#555',
    maxWidth: '600px',
  };

  const iframeStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '120px',
    width: '380px',
    height: '450px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    zIndex: 1000,
  };

  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <h1 style={titleStyle}>Bhagavad Gita Chatbot</h1>
        <p style={textStyle}>
          Welcome! Ask your spiritual questions and receive answers based on the timeless wisdom of the Bhagavad Gita.
        </p>
      </div>
      <div style={rightStyle}></div>

      <iframe
        src="https://copilotstudio.microsoft.com/environments/Default-8ee0f3e4-b788-4efa-bd84-e6bfe7fe9943/bots/cr053_copilot3kl2Q5f/webchat?__version__=2"
        frameBorder="0"
        title="GitaBot"
        style={iframeStyle}
      />

  
  
    </div>
  );
};

export default LandingPage;
