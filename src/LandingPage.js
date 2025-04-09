import React from 'react';

const LandingPage = () => {
  return (
    <>
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
          }

          .landing-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 2rem 1rem;
            background: linear-gradient(to bottom right, #fff9c4, #ffcc80);
            box-sizing: border-box;
            text-align: center;
          }

          .left-section {
            max-width: 700px;
          }

          .title {
            font-size: 2.5rem;
            font-weight: bold;
            color: #333;
            margin-bottom: 1rem;
          }

          .description {
            font-size: 1.1rem;
            color: #555;
            line-height: 1.6;
          }

          .chatbot-iframe {
            width: 100%;
            max-width: 400px;
            height: 450px;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            margin-top: 2rem;
          }

          /* Tablet & desktop */
          @media (min-width: 768px) {
            .landing-container {
              flex-direction: row;
              align-items: flex-start;
              justify-content: space-between;
              text-align: left;
              padding: 4rem;
            }

            .left-section {
              flex: 6;
              padding-right: 2rem;
            }

            .chatbot-iframe {
              flex: 4;
              margin-top: 0;
            }
          }

          /* Large screens */
          @media (min-width: 1024px) {
            .title {
              font-size: 3rem;
            }

            .description {
              font-size: 1.25rem;
            }
          }
        `}
      </style>

      <div className="landing-container">
        <div className="left-section">
          <h1 className="title">Bhagavad Gita Chatbot</h1>
          <p className="description">
            Welcome! Ask your spiritual questions and receive answers based on the timeless wisdom of the Bhagavad Gita.
          </p>
        </div>
        <iframe
          src="https://copilotstudio.microsoft.com/environments/Default-8ee0f3e4-b788-4efa-bd84-e6bfe7fe9943/bots/cr053_copilot3kl2Q5f/webchat?__version__=2"
          frameBorder="0"
          title="GitaBot"
          className="chatbot-iframe"
        />
      </div>
    </>
  );
};

export default LandingPage;
