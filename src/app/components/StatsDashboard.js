'use client';
import { useDateRange } from '../contexts/DateRangeContext';
import { generateMockData } from '../utils/mockData';
import { useEffect, useState } from 'react';

export default function StatsDashboard() {
  const { dateRange } = useDateRange();
  const [data, setData] = useState(null);

  useEffect(() => {
    const mockData = generateMockData(dateRange.startDate, dateRange.endDate);
    setData(mockData.stats);
  }, [dateRange]);

  if (!data) return null;

  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Total Sales Card */}
      <div className="bg-white dark:bg-[#141414] p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100/10 dark:border-gray-800/50">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-purple-50/50 dark:bg-purple-500/5 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-purple-500">
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25z" />
            </svg>
          </div>
          <div className="text-xs font-medium bg-green-50 dark:bg-green-500/5 text-green-600 dark:text-green-500 py-1 px-2.5 rounded-full">
            +{data.growth}%
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Sales</div>
          <div className="text-2xl font-semibold text-gray-900 dark:text-white">${data.totalSales.toLocaleString()}</div>
          <div className="h-[2px] bg-gray-200 dark:bg-gray-900/70"></div>
          <div className="flex flex-col gap-2.5 pt-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Guest</span>
              <span className="font-medium text-gray-900 dark:text-gray-200">${Math.floor(data.totalSales/2).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Logged</span>
              <span className="font-medium text-gray-900 dark:text-gray-200">${Math.floor(data.totalSales/2).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* New User Orders Card */}
      <div className="bg-white dark:bg-[#141414] p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100/10 dark:border-gray-800/50">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-green-50/50 dark:bg-green-500/5 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500">
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25z" />
            </svg>
          </div>
          <div className="text-xs font-medium bg-green-50 dark:bg-green-500/5 text-green-600 dark:text-green-500 py-1 px-2.5 rounded-full">
            +{data.growth}%
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">New User Orders</div>
          <div className="text-2xl font-semibold text-gray-900 dark:text-white">{data.newUserOrders.toLocaleString()}</div>
          <div className="h-[2px] bg-gray-200 dark:bg-gray-900/70"></div>
          <div className="flex flex-col gap-2.5 pt-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Guest</span>
              <span className="font-medium text-gray-900 dark:text-gray-200">{Math.floor(data.newUserOrders/2).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Logged</span>
              <span className="font-medium text-gray-900 dark:text-gray-200">{Math.floor(data.newUserOrders/2).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Abandonment Card */}
      <div className="bg-white dark:bg-[#141414] p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100/10 dark:border-gray-800/50">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-red-50/50 dark:bg-red-500/5 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-500">
              <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="text-xs font-medium bg-red-50 dark:bg-red-500/5 text-red-600 dark:text-red-500 py-1 px-2.5 rounded-full">
            +{data.cartAbandonment/10}%
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Cart Abandonment</div>
          <div className="text-2xl font-semibold text-gray-900 dark:text-white">{data.cartAbandonment}%</div>
          <div className="w-full bg-gray-100 dark:bg-gray-800/50 rounded-full h-1">
            <div className="bg-red-500 h-1 rounded-full" style={{ width: `${data.cartAbandonment}%` }}></div>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400 pt-1">
            New User's Only
          </div>
        </div>
      </div>

      {/* Deliveries Card */}
      <div className="bg-white dark:bg-[#141414] p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100/10 dark:border-gray-800/50">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-indigo-50/50 dark:bg-indigo-500/5 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-indigo-500">
              <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
              <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
              <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
            </svg>
          </div>
          <div className="text-xs font-medium bg-green-50 dark:bg-green-500/5 text-green-600 dark:text-green-500 py-1 px-2.5 rounded-full">
            +0.5h
          </div>
        </div>
        <div className="space-y-3">
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Deliveries</div>
          <div className="text-2xl font-semibold text-gray-900 dark:text-white">{data.deliveryTime}h</div>
          <div className="h-[2px] bg-gray-200 dark:bg-gray-900/70"></div>
          <div className="flex flex-col gap-2.5 pt-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Total</span>
              <span className="font-medium text-gray-900 dark:text-gray-200">2,450</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">On Time</span>
              <span className="font-medium text-gray-900 dark:text-gray-200">{data.onTimeDelivery}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 