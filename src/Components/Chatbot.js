import React, { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "Could I find some hostels with a better review?",
    answer: "Yes! We have a rating system where students can leave reviews. You can filter hostels by their ratings to find the most highly reviewed options."
  },
  {
    id: 2,
    question: "Which hostels are budget-friendly?",
    answer: "We have several budget-friendly options starting from ₹5000/month. You can use our price filter to see hostels within your budget range."
  },
  {
    id: 3,
    question: "Hostels with attached bathrooms?",
    answer: "Many of our listed hostels offer rooms with attached bathrooms. You can specifically filter for this amenity in the search options."
  },
  {
    id: 4,
    question: "Hostels with good quality of facilities?",
    answer: "You can check the detailed amenities list for each hostel. Most of our premium hostels offer facilities like WiFi, laundry, AC, gym, and recreation areas."
  },
  {
    id: 5,
    question: "Hostels having transport service for college?",
    answer: "Several hostels provide transport services to nearby colleges. This information is listed under the 'Transportation' section of each hostel's details."
  },
  {
    id: 6,
    question: "Are meals included with rent?",
    answer: "This varies by hostel. Many hostels offer meal plans that can be included with your rent. Check the 'Meal Plans' section in hostel details."
  },
  {
    id: 7,
    question: "Want to upload photos with my review?",
    answer: "Yes, you can upload photos along with your review to help other students get a better idea of the hostel facilities."
  },
  {
    id: 8,
    question: "Any discounts for students?",
    answer: "Yes! Many hostels offer student discounts. Some also have special rates for long-term stays and early bookings."
  }
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showQuestions, setShowQuestions] = useState(true);

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setShowQuestions(false);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowQuestions(true);
    setSelectedQuestion(null);
  };

  const handleBack = () => {
    setShowQuestions(true);
    setSelectedQuestion(null);
  };

  return (
    <div>
      <button
        className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-600 transition duration-300"
        onClick={toggleChat}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
      {isOpen && (
        <div className="fixed bottom-24 right-5 w-80 bg-gray-900 rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-between bg-gray-800 p-4 border-b border-gray-700">
            <div className="flex items-center">
              <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
              <h2 className="text-white font-medium">Chat Support</h2>
            </div>
            <button onClick={toggleChat} className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="h-96 overflow-y-auto p-4 bg-gray-900">
            {!selectedQuestion && (
              <div className="text-gray-300 mb-4">
                Hello! I'm UniHostel's virtual assistant. How can I help you today? Feel free to ask about our hostels, services, or any other questions!
              </div>
            )}
            
            {showQuestions ? (
              <div className="space-y-2">
                {questions.map((q) => (
                  <button
                    key={q.id}
                    className="w-full text-left p-3 rounded bg-gray-800 text-gray-300 hover:bg-gray-700 transition duration-300"
                    onClick={() => handleQuestionClick(q)}
                  >
                    {q.question}
                  </button>
                ))}
              </div>
            ) : (
              <div className="bg-gray-800 rounded-lg p-4 text-gray-300">
                <button 
                  onClick={handleBack}
                  className="text-blue-400 mb-2 hover:text-blue-300"
                >
                  ← Back to questions
                </button>
                <div className="mt-2">
                  <p className="font-medium mb-2">{selectedQuestion?.question}</p>
                  <p className="text-gray-400">{selectedQuestion?.answer}</p>
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-gray-800 p-4 border-t border-gray-700">
            <div className="flex items-center bg-gray-700 rounded-lg">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 bg-transparent p-2 text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="p-2 text-blue-400 hover:text-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot; 