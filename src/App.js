import './App.css';
import PublicationStatsDashboard from './publication-stats-js.js';
import ScholarProfile from './google-scholar-profile.js';
import { SearchPage, ResultsPage, ProfilePage } from './scholar-search-app.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


function App() {
  console.log('App component rendering');
  return (
    
    <Router basename="/google_scholar_stats">
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
    
  );
}

export default App;
