import Header from "../Header";// Correct the import statement

const Overview = () => {
  const stats = [
    { id: 1, title: 'Total Users', value: '1,200' },
    { id: 2, title: 'Active Subscriptions', value: '300' },
    { id: 3, title: 'Revenue (Monthly)', value: '$12,500' },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
       <Header />
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-slate-100 p-4 rounded-lg text-center shadow-sm"
          >
            <h3 className="text-lg font-medium text-gray-600">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-800 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
