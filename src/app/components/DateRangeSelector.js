'use client';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useDateRange } from '../contexts/DateRangeContext';
import { format } from 'date-fns';

export default function DateRangeSelector() {
  const [showPicker, setShowPicker] = useState(false);
  const { dateRange, setDateRange } = useDateRange();
  const [quickSelect, setQuickSelect] = useState('7d');

  const handleQuickSelect = (days) => {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - days);
    
    setDateRange({
      startDate: start,
      endDate: end,
      key: 'selection'
    });
    setQuickSelect(`${days}d`);
  };

  return (
    <div className="relative mb-6">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-gray-100/50 dark:bg-gray-900/50 rounded-full p-1">
          {['7d', '14d', '30d', '90d'].map((range) => (
            <button
              key={range}
              onClick={() => handleQuickSelect(parseInt(range))}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                quickSelect === range
                  ? 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
        <button
          onClick={() => setShowPicker(!showPicker)}
          className="flex items-center gap-2 px-4 py-1.5 bg-white dark:bg-gray-800 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
        >
          <span>
            {format(dateRange.startDate, 'MMM dd, yyyy')} - {format(dateRange.endDate, 'MMM dd, yyyy')}
          </span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      
      {showPicker && (
        <div className="absolute mt-2 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <DateRange
            ranges={[dateRange]}
            onChange={item => setDateRange(item.selection)}
            months={2}
            direction="horizontal"
            maxDate={new Date()}
            rangeColors={['#818cf8']}
          />
        </div>
      )}
    </div>
  );
} 