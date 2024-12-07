import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

function PublicationStatsDashboard() {
  // Sample publication data
  const publicationData = [
    { venue: 'Nature', publications: 12, citations: 450 },
    { venue: 'Science', publications: 8, citations: 320 },
    { venue: 'PNAS', publications: 15, citations: 280 },
    { venue: 'Cell', publications: 6, citations: 220 },
    { venue: 'Journal of Biological Chemistry', publications: 10, citations: 180 }
  ];

  const totalPublications = publicationData.reduce((sum, item) => sum + item.publications, 0);
  const totalCitations = publicationData.reduce((sum, item) => sum + item.citations, 0);

  return (
    <div style={{ padding: '1.5rem', backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto', backgroundColor: 'white', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', borderRadius: '0.5rem', padding: '1.5rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
          Scientific Publication Statistics
        </h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ backgroundColor: '#dbeafe', padding: '1rem', borderRadius: '0.25rem' }}>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Total Publications</h2>
            <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#2563eb' }}>{totalPublications}</p>
          </div>
          <div style={{ backgroundColor: '#dcfce7', padding: '1rem', borderRadius: '0.25rem' }}>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Total Citations</h2>
            <p style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#16a34a' }}>{totalCitations}</p>
          </div>
        </div>

        <div style={{ height: '24rem' }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={publicationData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="venue" />
              <YAxis label={{ value: 'Number of Publications', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="publications" fill="#8884d8" name="Publications" />
              <Bar dataKey="citations" fill="#82ca9d" name="Citations" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '1rem' }}>Venue Breakdown</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#e5e7eb' }}>
                <th style={{ border: '1px solid #d1d5db', padding: '0.5rem', textAlign: 'left' }}>Venue</th>
                <th style={{ border: '1px solid #d1d5db', padding: '0.5rem', textAlign: 'right' }}>Publications</th>
                <th style={{ border: '1px solid #d1d5db', padding: '0.5rem', textAlign: 'right' }}>Citations</th>
              </tr>
            </thead>
            <tbody>
              {publicationData.map((item, index) => (
                <tr key={index} style={{ ':hover': { backgroundColor: '#f3f4f6' } }}>
                  <td style={{ border: '1px solid #d1d5db', padding: '0.5rem' }}>{item.venue}</td>
                  <td style={{ border: '1px solid #d1d5db', padding: '0.5rem', textAlign: 'right' }}>{item.publications}</td>
                  <td style={{ border: '1px solid #d1d5db', padding: '0.5rem', textAlign: 'right' }}>{item.citations}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PublicationStatsDashboard;
