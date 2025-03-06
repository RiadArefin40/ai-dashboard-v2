'use client';
import { useState, useRef, useEffect } from 'react';

export default function TopDeliveryLocations() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const locations = [
    {
      location: 'Australia',
      orders: '18,879',
      revenue: '18,879',
      avgTime: '15%',
      trend: 'down'
    },
    {
      location: 'Canada',
      orders: '10,357',
      revenue: '10,357',
      avgTime: '85%',
      trend: 'up'
    },
    {
      location: 'India',
      orders: '4,860',
      revenue: '4,860',
      avgTime: '48%',
      trend: 'up'
    },
    {
      location: 'United State',
      orders: '899',
      revenue: '899',
      avgTime: '16%',
      trend: 'down'
    },
    {
      location: 'Japan',
      orders: '43',
      revenue: '43',
      avgTime: '35%',
      trend: 'up'
    },
    {
      location: 'Brazil',
      orders: '18',
      revenue: '18',
      avgTime: '12%',
      trend: 'up'
    }
  ];

  return (
    <div className="bg-white dark:bg-[#141414] p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100/10 dark:border-gray-800/50">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          Top 10 Delivery Locations
        </h3>
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
                LOCATION
              </th>
              <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                ORDERS
              </th>
              <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                REVENUE
              </th>
              <th className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400">
                AVG TIME
              </th>
            </tr>
          </thead>
          <tbody>
            {locations.map((item, index) => (
              <tr key={index} className="border-b border-gray-100 dark:border-gray-800/50">
                <td className="py-3 text-sm font-medium text-gray-900 dark:text-white">
                  {item.location}
                </td>
                <td className="py-3 text-sm text-gray-500 dark:text-gray-400">
                  {item.orders}
                </td>
                <td className="py-3 text-sm text-gray-500 dark:text-gray-400">
                  {item.revenue}
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-1">
                    <span className={`text-sm font-medium ${
                      item.trend === 'up' ? 'text-green-500' : 'text-red-500'
                    }`}>
                      {item.avgTime}
                    </span>
                    <svg 
                      className={`w-4 h-4 ${
                        item.trend === 'up' ? 'text-green-500' : 'text-red-500'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d={item.trend === 'up' 
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