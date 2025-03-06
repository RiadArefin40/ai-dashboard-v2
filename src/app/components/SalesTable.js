'use client';
import { useState, useRef, useEffect } from 'react';

export default function SalesTable() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const data = [
    {
      id: 1,
      country: 'Australia',
      totalUsers: '18,879',
      loggedUsers: '18,879',
      orders: '18,879',
      sales: 15,
      trend: 'down'
    },
    {
      id: 2,
      country: 'Canada',
      totalUsers: '10,357',
      loggedUsers: '10,357',
      orders: '10,357',
      sales: 85,
      trend: 'up'
    },
    {
      id: 3,
      country: 'India',
      totalUsers: '4,860',
      loggedUsers: '4,860',
      orders: '4,860',
      sales: 48,
      trend: 'up'
    },
    {
      id: 4,
      country: 'United State',
      totalUsers: '899',
      loggedUsers: '899',
      orders: '899',
      sales: 16,
      trend: 'down'
    },
    {
      id: 5,
      country: 'Japan',
      totalUsers: '43',
      loggedUsers: '43',
      orders: '43',
      sales: 35,
      trend: 'up'
    },
    {
      id: 6,
      country: 'Brazil',
      totalUsers: '18',
      loggedUsers: '18',
      orders: '18',
      sales: 12,
      trend: 'up'
    }
  ];

  return (
    <div className="bg-white dark:bg-[#141414] p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100/10 dark:border-gray-800/50">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-1">
        <p className="text-xl text-gray-500 dark:text-gray-400">
            Most Sales in Countries
          </p>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            22,842
            <span className="ml-2 text-xs font-medium text-green-500">+42%</span>
          </h3>
         
        </div>
        <div className="relative" ref={menuRef}>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 z-10">
              <div className="py-1">
                <button className="w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Download Report
                </button>
                <button className="w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Share Report
                </button>
                <button className="w-full px-4 py-2 text-sm text-left text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Generate PDF
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-800">
              <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                COUNTRY
              </th>
              <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                TOTAL USERS
              </th>
              <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                LOGGED USERS
              </th>
              <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                ORDERS
              </th>
              <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                SALES
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} className="border-b border-gray-100 dark:border-gray-800/50">
                <td className="py-3 text-sm font-medium text-gray-900 dark:text-white">
                  {row.country}
                </td>
                <td className="py-3 text-sm text-gray-500 dark:text-gray-400">
                  {row.totalUsers}
                </td>
                <td className="py-3 text-sm text-gray-500 dark:text-gray-400">
                  {row.loggedUsers}
                </td>
                <td className="py-3 text-sm text-gray-500 dark:text-gray-400">
                  {row.orders}
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-1">
                    <span className={`text-sm font-medium ${
                      row.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {row.sales}%
                    </span>
                    <svg 
                      className={`w-4 h-4 ${
                        row.trend === 'up' ? 'text-green-500' : 'text-red-500'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d={row.trend === 'up' 
                          ? "M5 10l7-7m0 0l7 7m-7-7v18" 
                          : "M19 14l-7 7m0 0l-7-7m7 7V3"
                        } 
                      />
                    </svg>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 