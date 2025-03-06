export function generateMockData(startDate, endDate) {
  const days = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
  
  // Generate stats data
  const statsData = {
    totalSales: Math.floor(Math.random() * 50000) + 10000,
    growth: Math.floor(Math.random() * 30) + 10,
    newUserOrders: Math.floor(Math.random() * 2000) + 500,
    cartAbandonment: Math.floor(Math.random() * 40) + 10,
    deliveryTime: (Math.random() * 5 + 1).toFixed(1),
    onTimeDelivery: Math.floor(Math.random() * 20) + 80,
  };

  // Generate chart data
  const chartData = Array.from({ length: days }, (_, i) => ({
    date: new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000),
    sales: Math.floor(Math.random() * 1000) + 500,
    orders: Math.floor(Math.random() * 200) + 50,
  }));

  // Generate time-based activity data
  const timeSlots = [
    '12 AM - 06 AM',
    '06 AM - 12 PM',
    '12 PM - 06 PM',
    '06 PM - 12 AM'
  ].map(time => ({
    time,
    activeUsers: Math.floor(Math.random() * 200) + 100,
    completedOrders: Math.floor(Math.random() * 30) + 5,
  }));

  // Generate countries data
  const countriesData = [
    'Saudi Arabia',
    'UAE',
    'Kuwait',
    'Indonesia',
    'Bahrain'
  ].map(country => ({
    country,
    totalUsers: Math.floor(Math.random() * 1000) + 500,
    loggedUsers: Math.floor(Math.random() * 800) + 300,
    orders: Math.floor(Math.random() * 500) + 100,
    revenue: Math.floor(Math.random() * 10000) + 5000,
  }));

  return {
    stats: statsData,
    chartData,
    timeSlots,
    countries: countriesData,
  };
} 