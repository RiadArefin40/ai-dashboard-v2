'use client';
import { useState, useEffect } from 'react';
import { useDateRange } from '../contexts/DateRangeContext';
import { generateMockData } from '../utils/mockData';

export default function TimeBasedActivity() {
  const { dateRange } = useDateRange();
  const [data, setData] = useState(null);

  useEffect(() => {
    const mockData = generateMockData(dateRange.startDate, dateRange.endDate);
    setData(mockData.timeSlots);
  }, [dateRange]);

  if (!data) return null;

  return (
    <div className="bg-white dark:bg-[#141414] p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100/10 dark:border-gray-800/50">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
        Time-based User Activity
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {data.map((slot, index) => (
          <div 
            key={index}
            className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50"
          >
            <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              {slot.time}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Active Users:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{slot.activeUsers}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Completed Orders:</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{slot.completedOrders}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 