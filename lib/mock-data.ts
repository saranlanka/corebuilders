export const mockKPIs = {
  currentIndex: 128.6,
  dailyChange: 2.4,
  weeklyChange: 5.8,
  monthlyChange: 8.2,
  routesTracked: 2450,
  dataPointsCollected: 1280000,
  airlinesCovered: 8,
  dataSourcesCount: 14,
}

export const mockTrendData = [
  { date: 'Jan 1', index: 100, change: 0 },
  { date: 'Jan 8', index: 102.3, change: 2.3 },
  { date: 'Jan 15', index: 104.1, change: 4.1 },
  { date: 'Jan 22', index: 106.5, change: 6.5 },
  { date: 'Jan 29', index: 108.2, change: 8.2 },
  { date: 'Feb 5', index: 110.1, change: 10.1 },
  { date: 'Feb 12', index: 112.4, change: 12.4 },
  { date: 'Feb 19', index: 115.3, change: 15.3 },
  { date: 'Feb 26', index: 118.1, change: 18.1 },
  { date: 'Mar 5', index: 120.5, change: 20.5 },
  { date: 'Mar 12', index: 123.2, change: 23.2 },
  { date: 'Mar 19', index: 125.8, change: 25.8 },
  { date: 'Mar 26', index: 128.6, change: 28.6 },
]

export const mockCityData = [
  { city: 'Delhi', activity: 95, avgFare: 4850, routes: 245 },
  { city: 'Mumbai', activity: 88, avgFare: 5120, routes: 198 },
  { city: 'Hyderabad', activity: 72, avgFare: 4320, routes: 156 },
  { city: 'Bengaluru', activity: 85, avgFare: 4680, routes: 187 },
  { city: 'Chennai', activity: 68, avgFare: 4100, routes: 142 },
  { city: 'Kolkata', activity: 55, avgFare: 3980, routes: 98 },
  { city: 'Pune', activity: 62, avgFare: 4450, routes: 115 },
  { city: 'Ahmedabad', activity: 58, avgFare: 4200, routes: 102 },
  { city: 'Kochi', activity: 48, avgFare: 4680, routes: 78 },
  { city: 'Guwahati', activity: 42, avgFare: 3850, routes: 65 },
]

export const mockLiveFares = [
  {
    timestamp: '10:42 AM',
    source: 'Airline Portal',
    airline: 'IndiAir Demo',
    origin: 'Hyderabad',
    destination: 'Delhi',
    travelDate: '15 Sep',
    fare: 5420,
    cabinClass: 'Economy',
    availability: 'Available',
    status: 'Validated',
  },
  {
    timestamp: '10:38 AM',
    source: 'OTA Portal',
    airline: 'SkyIndia Demo',
    origin: 'Mumbai',
    destination: 'Bengaluru',
    travelDate: '16 Sep',
    fare: 4850,
    cabinClass: 'Economy',
    availability: 'Available',
    status: 'Validated',
  },
  {
    timestamp: '10:35 AM',
    source: 'Airline Portal',
    airline: 'Eastern Airways Demo',
    origin: 'Delhi',
    destination: 'Mumbai',
    travelDate: '15 Sep',
    fare: 5680,
    cabinClass: 'Economy',
    availability: 'Available',
    status: 'Validated',
  },
  {
    timestamp: '10:32 AM',
    source: 'OTA Portal',
    airline: 'IndiAir Demo',
    origin: 'Bengaluru',
    destination: 'Chennai',
    travelDate: '17 Sep',
    fare: 3420,
    cabinClass: 'Economy',
    availability: 'Limited',
    status: 'Validated',
  },
  {
    timestamp: '10:28 AM',
    source: 'Airline Portal',
    airline: 'SkyIndia Demo',
    origin: 'Delhi',
    destination: 'Hyderabad',
    travelDate: '15 Sep',
    fare: 4950,
    cabinClass: 'Economy',
    availability: 'Available',
    status: 'Validated',
  },
]

export const mockRoutes = [
  { route: 'Delhi → Mumbai', avg: 5420, min: 4800, max: 6200, index: 132.5, change24h: 1.2, change7d: 3.8 },
  { route: 'Mumbai → Delhi', avg: 5380, min: 4750, max: 6150, index: 131.9, change24h: 0.8, change7d: 3.5 },
  { route: 'Hyderabad → Bengaluru', avg: 3850, min: 3200, max: 4500, index: 128.3, change24h: -0.5, change7d: 2.1 },
  { route: 'Hyderabad → Delhi', avg: 5120, min: 4500, max: 5800, index: 135.2, change24h: 2.1, change7d: 4.3 },
  { route: 'Bengaluru → Mumbai', avg: 4680, min: 4100, max: 5300, index: 129.8, change24h: 1.5, change7d: 3.2 },
  { route: 'Chennai → Delhi', avg: 5680, min: 5000, max: 6400, index: 138.1, change24h: 2.8, change7d: 5.1 },
]

export const mockAirlines = [
  { name: 'IndiAir Demo', avgFare: 4850, observations: 24500, trend: 'up', coverage: 156, contribution: 22.5 },
  { name: 'SkyIndia Demo', avgFare: 5120, observations: 22300, trend: 'up', coverage: 142, contribution: 20.8 },
  { name: 'Eastern Airways Demo', avgFare: 5680, observations: 18900, trend: 'down', coverage: 98, contribution: 17.6 },
  { name: 'AeroIndia Demo', avgFare: 4320, observations: 16200, trend: 'up', coverage: 78, contribution: 15.1 },
  { name: 'Blue Skies Demo', avgFare: 5420, observations: 12800, trend: 'stable', coverage: 65, contribution: 11.9 },
  { name: 'Northern Wings Demo', avgFare: 4680, observations: 8500, trend: 'up', coverage: 42, contribution: 7.9 },
]

export const mockAlerts = [
  { id: 1, message: 'Airfare prices increased by 4.2% on Hyderabad–Delhi route.', type: 'info', time: '15 mins ago' },
  { id: 2, message: 'Unusual fare variation detected on Mumbai–Bengaluru route.', type: 'warning', time: '32 mins ago' },
  { id: 3, message: 'Data validation completed successfully.', type: 'success', time: '1 hour ago' },
  { id: 4, message: 'New airfare observations received from 3 data sources.', type: 'info', time: '2 hours ago' },
]

export const mockDataQuality = {
  recordsCollected: 128000,
  recordsValidated: 123840,
  recordsRejected: 4160,
  duplicateRecords: 1280,
  missingValues: 2560,
  lastCollection: '2 minutes ago',
  validationSuccessRate: 96.8,
}
