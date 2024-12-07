import React, { useState } from 'react';
import { useNavigate, useLocation} from 'react-router-dom';
import ScholarProfile from './google-scholar-profile.js';

// Mock database of researchers
const researcherDatabase = [
  {
    id: 1,
    name: "John A. Researcher",
    email: "researcher@university.edu",
    affiliation: "Computer Science Department, Tech University",
    citationMetrics: {
      totalCitations: 1245,
      hIndex: 24,
      i10Index: 37
    }
  },
  {
    id: 2,
    name: "Emily Wong",
    email: "emily.wong@research.org",
    affiliation: "AI Research Institute",
    citationMetrics: {
      totalCitations: 876,
      hIndex: 18,
      i10Index: 22
    }
  },
  {
    id: 3,
    name: "Michael Chen",
    email: "m.chen@tech.edu",
    affiliation: "Machine Learning Department, Innovation University",
    citationMetrics: {
      totalCitations: 1532,
      hIndex: 32,
      i10Index: 45
    }
  }
];

// Search Page Component
function SearchPage() {
  console.log('SearchPage is rendering');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/results', { state: { query: searchQuery } });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Scholar Search</h1>
        <form onSubmit={handleSearch} className="space-y-4">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for researchers by name" 
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

// Results Page Component
function ResultsPage() {
  console.log('ResultsPage is rendering');
  const navigate = useNavigate();
  const { state } = useLocation();
  const searchQuery = state?.query || '';

  const filteredResearchers = researcherDatabase.filter(researcher => 
    researcher.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAuthorClick = (researcher) => {
    navigate(`/profile/${researcher.id}`, { state: { researcher } });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">
        Search Results for "{searchQuery}"
      </h1>
      <div className="space-y-4">
        {filteredResearchers.map(researcher => (
          <div 
            key={researcher.id} 
            onClick={() => handleAuthorClick(researcher)}
            className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-blue-700">
              {researcher.name}
            </h2>
            <p className="text-gray-600">{researcher.affiliation}</p>
            <p className="text-gray-500 text-sm">{researcher.email}</p>
            <div className="mt-4 flex justify-between">
              <div className="text-center">
                <span className="font-bold text-blue-700">
                  {researcher.citationMetrics.totalCitations}
                </span>
                <p className="text-gray-600 text-xs">Total Citations</p>
              </div>
              <div className="text-center">
                <span className="font-bold text-green-700">
                  {researcher.citationMetrics.hIndex}
                </span>
                <p className="text-gray-600 text-xs">h-index</p>
              </div>
              <div className="text-center">
                <span className="font-bold text-purple-700">
                  {researcher.citationMetrics.i10Index}
                </span>
                <p className="text-gray-600 text-xs">i10-index</p>
              </div>
            </div>
          </div>
        ))}
        {filteredResearchers.length === 0 && (
          <p className="text-center text-gray-600">
            No researchers found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}

// Profile Page Component (similar to previous implementation)
function ProfilePage() {
  console.log('ProfilePage is rendering');
  const { state } = useLocation();
  const researcher = state?.researcher;

  if (!researcher) {
    return <div>No researcher data found</div>;
  }

  // Rest of the profile page implementation remains the same as in the previous artifact
  return (
    <div>
      <ScholarProfile authorData={researcher} />
    </div>
  );
}



export {SearchPage, ResultsPage, ProfilePage};
