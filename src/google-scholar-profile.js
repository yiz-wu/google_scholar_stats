import React, { useState } from 'react';

const ScholarProfile = () => {
  const [activeSection, setActiveSection] = useState('all');

  const authorData = {
    name: "John A. Researcher",
    email: "researcher@university.edu",
    affiliation: "Computer Science Department, Tech University",
    citationMetrics: {
      totalCitations: 1245,
      hIndex: 24,
      i10Index: 37
    },
    publications: [
      {
        id: 1,
        title: "Machine Learning Approaches in Computer Vision",
        authors: ["John A. Researcher", "Emily Wong", "Michael Chen"],
        journal: "IEEE Transactions on Pattern Analysis and Machine Intelligence",
        year: 2023,
        citations: 124
      },
      {
        id: 2,
        title: "Deep Neural Networks for Predictive Analytics",
        authors: ["John A. Researcher", "Sarah Kim"],
        journal: "Nature Machine Intelligence",
        year: 2022,
        citations: 89
      },
      {
        id: 3,
        title: "Ethical Considerations in AI Development",
        authors: ["John A. Researcher"],
        journal: "AI Ethics Quarterly",
        year: 2021,
        citations: 56
      }
    ]
  };

  const renderPublicationCard = (pub) => (
    <div key={pub.id} className="border-b py-4 hover:bg-gray-50 transition-colors">
      <h3 className="text-blue-700 font-semibold hover:underline cursor-pointer">
        {pub.title}
      </h3>
      <p className="text-gray-600 text-sm">
        {pub.authors.join(", ")}
      </p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-gray-500 text-xs">
          {pub.journal} • {pub.year}
        </span>
        <span className="text-green-600 text-xs">
          {pub.citations} citations
        </span>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      {/* Profile Header */}
      <div className="bg-gray-100 p-6 flex items-center">
        <div className="bg-gray-300 rounded-full w-20 h-20 flex items-center justify-center mr-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-gray-500"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div>
          <h1 className="text-2xl font-bold">{authorData.name}</h1>
          <p className="text-gray-600">{authorData.affiliation}</p>
          <p className="text-gray-500 text-sm">{authorData.email}</p>
        </div>
      </div>

      {/* Citation Metrics */}
      <div className="flex bg-gray-50 p-4 justify-around">
        <div className="text-center">
          <h3 className="font-bold text-xl text-blue-700">
            {authorData.citationMetrics.totalCitations}
          </h3>
          <p className="text-gray-600 text-sm">Total Citations</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-xl text-green-700">
            {authorData.citationMetrics.hIndex}
          </h3>
          <p className="text-gray-600 text-sm">h-index</p>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-xl text-purple-700">
            {authorData.citationMetrics.i10Index}
          </h3>
          <p className="text-gray-600 text-sm">i10-index</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex border-b">
        {['All', 'Articles', 'Citations', 'Co-authors'].map((section) => (
          <button 
            key={section} 
            className={`px-4 py-2 ${
              activeSection === section.toLowerCase() 
                ? 'border-b-2 border-blue-600 text-blue-600' 
                : 'text-gray-600'
            }`}
            onClick={() => setActiveSection(section.toLowerCase())}
          >
            {section}
          </button>
        ))}
      </div>

      {/* Publications List */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Publications</h2>
          <div className="flex items-center text-gray-600">
            Sort by 
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-2"
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        </div>
        {authorData.publications.map(renderPublicationCard)}
      </div>
    </div>
  );
};

export default ScholarProfile;
