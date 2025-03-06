'use client';
import { useState, useEffect } from 'react';
import { useDateRange } from '../contexts/DateRangeContext';
import { generateMockData } from '../utils/mockData';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function TopCountriesChart() {
  const { dateRange } = useDateRange();
  const [data, setData] = useState(null);

  useEffect(() => {
    const mockData = generateMockData(dateRange.startDate, dateRange.endDate);
    setData({
      labels: mockData.countries.map(country => country.country),
      datasets: [
        {
          label: 'Total Users',
          data: mockData.countries.map(country => country.totalUsers),
          backgroundColor: '#818cf8',
          borderRadius: 4,
        },
        {
          label: 'Logged Users',
          data: mockData.countries.map(country => country.loggedUsers),
          backgroundColor: '#34d399',
          borderRadius: 4,
        }
      ]
    });
  }, [dateRange]);

  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'start',
        labels: {
          boxWidth: 6,
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          color: '#9CA3AF'
        }
      },
      tooltip: {
        backgroundColor: '#1F2937',
        padding: 12,
        bodySpacing: 4,
        bodyFont: {
          size: 12,
        },
        titleFont: {
          size: 12,
          weight: 'normal'
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 12
          }
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 12
          }
        }
      }
    },
    barPercentage: 0.8,
    categoryPercentage: 0.8
  };

  if (!data) return null;

  return (
    <div className="bg-white dark:bg-[#141414] p-6 rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100/10 dark:border-gray-800/50">
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-6">
        Top Countries
      </h3>
      <div className="h-[300px]">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
} 