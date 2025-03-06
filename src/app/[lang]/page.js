import { useTranslation } from '../i18n';
import StatsDashboard from '../components/StatsDashboard';
import DateRangeSelector from '../components/DateRangeSelector';
import SalesComparisonChart from '../components/SalesComparisonChart';
import TopCountriesChart from '../components/TopCountriesChart';
import SalesTable from '../components/SalesTable';
import TimeBasedActivity from '../components/TimeBasedActivity';
import TopDeliveryLocations from '../components/TopDeliveryLocations';
import { DateRangeProvider } from '../contexts/DateRangeContext';

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'ar' }
  ];
}

export default async function Home({ params }) {
  const { lang } = await Promise.resolve(params);
  const isRTL = lang === 'ar';
  const { t } = await useTranslation(lang);

  return (
    <DateRangeProvider>
      <div className="min-h-screen pt-12 px-8">
        <DateRangeSelector />
        <div className="space-y-6">
          <StatsDashboard />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SalesComparisonChart />
            <TopCountriesChart />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TimeBasedActivity />
            <TopDeliveryLocations />
          </div>
          <SalesTable />
        </div>
      </div>
    </DateRangeProvider>
  );
} 