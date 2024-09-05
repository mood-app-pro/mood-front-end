import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SidebarNav from '@/components/topup/SidebarNav';

const TopUpPage = () => {
  const topUpOptions = [
    { id: 1, amount: 13000, bonus: 105, expired: true },
    { id: 2, amount: 13000, bonus: 105, expired: false },
    { id: 3, amount: 13000, bonus: 105, expired: false },
    // Tambahkan lebih banyak opsi sesuai kebutuhan
  ];

  const transactionHistory = [
    { date: '25-05-2024 19:59', activity: 'Withdraw', amount: -50 },
    { date: '25-05-2024 19:59', activity: 'Top up', amount: 50 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex flex-1 mt-8 flex-col md:flex-row container mx-auto px-4">
        <SidebarNav />
        <main className="w-full md:w-4/5 p-4 md:p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Dompet Saya</h2>

          <div className="mb-6 flex justify-between items-center">
            <div>
              <div className="text-sm text-gray-500">Username</div>
              <div className="text-xl font-semibold">123123123</div>
              <a href="#" className="text-blue-500 text-sm">Top up akun Anda lebih lanjut</a>
            </div>
          </div>

          <div className="flex mb-8">
            <button className="mr-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200">
              Topup
            </button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-lg hover:bg-gray-400 transition duration-200">
              Withdraw
            </button>
          </div>

          <section className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Pilih Jumlah Top Up</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {topUpOptions.map(option => (
                <div
                  key={option.id}
                  className={`border p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200 ${
                    option.expired ? 'bg-red-100' : 'bg-white'
                  }`}
                >
                  <p className="text-sm font-medium">Rp {option.amount.toLocaleString()}</p>
                  <p className="text-xs text-gray-500">{option.bonus} Bonus</p>
                  {option.expired && <span className="text-xs text-red-500">Expired</span>}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold mb-4">Aktivitas Transaksi</h3>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="p-3">Tanggal</th>
                  <th className="p-3">Aktivitas</th>
                  <th className="p-3">Jumlah Koin</th>
                </tr>
              </thead>
              <tbody>
                {transactionHistory.map((transaction, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-3">{transaction.date}</td>
                    <td className="p-3">{transaction.activity}</td>
                    <td className="p-3 text-right">
                      {transaction.amount > 0 ? `+${transaction.amount}` : transaction.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default TopUpPage;