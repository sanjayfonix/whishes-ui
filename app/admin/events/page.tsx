'use client';

import { useState } from 'react';
import Link from 'next/link';

type Event = {
  id: number;
  name: string;
  recipientType: 'Group' | 'Personal';
  eventDate: string;
  deliveryTime: string;
  groupCount: number;
  status: 'Scheduled' | 'Completed' | 'Renewal Upcoming' | 'Failed';
  isRenewal: boolean;
  createdDate: string;
};

const allEvents: Event[] = [
  { id: 1,  name: 'Priya Sharma',    recipientType: 'Group',    eventDate: '25 Dec 2026', deliveryTime: '12:00 AM', groupCount: 3,  status: 'Scheduled',        isRenewal: false, createdDate: '01 Dec 2026' },
  { id: 2,  name: 'Rahul Verma',     recipientType: 'Personal', eventDate: '26 Dec 2026', deliveryTime: '09:00 AM', groupCount: 1,  status: 'Scheduled',        isRenewal: false, createdDate: '02 Dec 2026' },
  { id: 3,  name: 'Anjali Patel',    recipientType: 'Group',    eventDate: '20 Dec 2026', deliveryTime: '06:00 AM', groupCount: 5,  status: 'Renewal Upcoming', isRenewal: true,  createdDate: '28 Nov 2025' },
  { id: 4,  name: 'Vikram Singh',    recipientType: 'Group',    eventDate: '18 Dec 2026', deliveryTime: '10:30 AM', groupCount: 2,  status: 'Completed',        isRenewal: false, createdDate: '25 Nov 2026' },
  { id: 5,  name: 'Meera Reddy',     recipientType: 'Personal', eventDate: '15 Dec 2026', deliveryTime: '08:00 AM', groupCount: 1,  status: 'Completed',        isRenewal: true,  createdDate: '20 Nov 2025' },
  { id: 6,  name: 'Karan Malhotra',  recipientType: 'Group',    eventDate: '22 Dec 2026', deliveryTime: '12:00 AM', groupCount: 8,  status: 'Failed',           isRenewal: false, createdDate: '05 Dec 2026' },
  { id: 7,  name: 'Sneha Gupta',     recipientType: 'Group',    eventDate: '28 Dec 2026', deliveryTime: '07:00 AM', groupCount: 4,  status: 'Scheduled',        isRenewal: false, createdDate: '03 Dec 2026' },
  { id: 8,  name: 'Arjun Nair',      recipientType: 'Group',    eventDate: '30 Dec 2026', deliveryTime: '09:00 AM', groupCount: 5,  status: 'Scheduled',        isRenewal: false, createdDate: '04 Dec 2026' },
  { id: 9,  name: 'Divya Iyer',      recipientType: 'Personal', eventDate: '12 Dec 2026', deliveryTime: '11:00 AM', groupCount: 1,  status: 'Completed',        isRenewal: true,  createdDate: '18 Nov 2025' },
  { id: 10, name: 'Rohan Kapoor',    recipientType: 'Group',    eventDate: '24 Dec 2026', deliveryTime: '12:00 AM', groupCount: 6,  status: 'Failed',           isRenewal: false, createdDate: '06 Dec 2026' },
  { id: 11, name: 'Pooja Desai',     recipientType: 'Group',    eventDate: '10 Dec 2026', deliveryTime: '08:30 AM', groupCount: 3,  status: 'Renewal Upcoming', isRenewal: true,  createdDate: '15 Nov 2025' },
  { id: 12, name: 'Aditya Joshi',    recipientType: 'Personal', eventDate: '29 Dec 2026', deliveryTime: '10:00 AM', groupCount: 1,  status: 'Scheduled',        isRenewal: false, createdDate: '07 Dec 2026' },
  { id: 13, name: 'Nisha Pillai',    recipientType: 'Group',    eventDate: '14 Jan 2027', deliveryTime: '12:00 AM', groupCount: 10, status: 'Scheduled',        isRenewal: false, createdDate: '08 Dec 2026' },
  { id: 14, name: 'Suresh Menon',    recipientType: 'Group',    eventDate: '02 Jan 2027', deliveryTime: '09:00 AM', groupCount: 2,  status: 'Renewal Upcoming', isRenewal: true,  createdDate: '10 Jan 2026' },
  { id: 15, name: 'Kavya Rajan',     recipientType: 'Personal', eventDate: '05 Jan 2027', deliveryTime: '07:30 AM', groupCount: 1,  status: 'Scheduled',        isRenewal: false, createdDate: '10 Dec 2026' },
];

const STATUS_OPTIONS = ['All', 'Scheduled', 'Completed', 'Renewal Upcoming', 'Failed'] as const;
const TYPE_OPTIONS = ['All', 'Group', 'Personal'] as const;

export default function AdminAllEvents() {
  const [statusFilter, setStatusFilter] = useState('All');
  const [typeFilter, setTypeFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isLoading] = useState(false);

  const filtered = allEvents.filter(e => {
    const matchStatus = statusFilter === 'All' || e.status === statusFilter;
    const matchType = typeFilter === 'All' || e.recipientType === typeFilter;
    const matchSearch = e.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchStatus && matchType && matchSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / rowsPerPage));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * rowsPerPage;
  const paginated = filtered.slice(startIndex, startIndex + rowsPerPage);

  const resetFilters = () => {
    setStatusFilter('All');
    setTypeFilter('All');
    setSearchQuery('');
    setCurrentPage(1);
  };

  const hasActiveFilter = statusFilter !== 'All' || typeFilter !== 'All' || searchQuery !== '';

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Scheduled':        return 'bg-purple-100 text-purple-700 border border-purple-200';
      case 'Completed':        return 'bg-green-100 text-green-700 border border-green-200';
      case 'Renewal Upcoming': return 'bg-amber-100 text-amber-700 border border-amber-200';
      case 'Failed':           return 'bg-red-100 text-red-700 border border-red-200';
      default:                 return 'bg-gray-100 text-gray-700 border border-gray-200';
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'Scheduled':        return 'bg-purple-500';
      case 'Completed':        return 'bg-green-500';
      case 'Renewal Upcoming': return 'bg-amber-500';
      case 'Failed':           return 'bg-red-500';
      default:                 return 'bg-gray-400';
    }
  };

  const summaryStats = {
    total: allEvents.length,
    scheduled: allEvents.filter(e => e.status === 'Scheduled').length,
    renewalUpcoming: allEvents.filter(e => e.status === 'Renewal Upcoming').length,
    failed: allEvents.filter(e => e.status === 'Failed').length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-['Pacifico'] text-purple-600">WishHapp</div>
            <span className="text-sm text-gray-500 font-medium bg-gray-100 px-2 py-0.5 rounded">Admin Panel</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <i className="ri-user-line text-purple-600 text-sm"></i>
              </div>
              <span className="text-sm font-medium text-gray-700">Admin</span>
            </div>
            <Link href="/admin/login" className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer">
              <i className="ri-logout-box-line"></i>Logout
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-65px)] flex-shrink-0">
          <nav className="p-4 space-y-1">
            <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center"><i className="ri-dashboard-line text-lg"></i></div>
              <span className="font-medium text-sm">Dashboard</span>
            </Link>
            <Link href="/admin/events" className="flex items-center gap-3 px-4 py-3 bg-purple-50 text-purple-700 rounded-lg">
              <div className="w-5 h-5 flex items-center justify-center"><i className="ri-calendar-line text-lg"></i></div>
              <span className="font-medium text-sm">All Events</span>
            </Link>
            <Link href="/admin/failed" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center"><i className="ri-error-warning-line text-lg"></i></div>
              <span className="font-medium text-sm">Failed Events</span>
              {summaryStats.failed > 0 && (
                <span className="ml-auto bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">{summaryStats.failed}</span>
              )}
            </Link>
            <Link href="/admin/logs" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center"><i className="ri-file-list-line text-lg"></i></div>
              <span className="font-medium text-sm">Delivery Logs</span>
            </Link>
          </nav>

          <div className="mx-4 mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Quick Stats</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Total Events</span>
                <span className="text-xs font-bold text-gray-900">{summaryStats.total}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Scheduled</span>
                <span className="text-xs font-bold text-purple-700">{summaryStats.scheduled}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Renewal Soon</span>
                <span className="text-xs font-bold text-amber-600">{summaryStats.renewalUpcoming}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Failed</span>
                <span className="text-xs font-bold text-red-600">{summaryStats.failed}</span>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-8 min-w-0">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">All Events</h1>
                <p className="text-sm text-gray-500">Monitor all scheduled wishes and delivery status.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center pointer-events-none">
                      <i className="ri-search-line text-gray-400 text-sm"></i>
                    </div>
                    <input
                      type="text"
                      placeholder="Search by name..."
                      value={searchQuery}
                      onChange={e => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                      className="bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white transition-colors w-52"
                    />
                  </div>

                  <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                    {STATUS_OPTIONS.map(opt => (
                      <button
                        key={opt}
                        onClick={() => { setStatusFilter(opt); setCurrentPage(1); }}
                        className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                          statusFilter === opt
                            ? 'bg-white text-purple-700 shadow-sm'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                    {TYPE_OPTIONS.map(opt => (
                      <button
                        key={opt}
                        onClick={() => { setTypeFilter(opt); setCurrentPage(1); }}
                        className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                          typeFilter === opt
                            ? 'bg-white text-purple-700 shadow-sm'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {opt === 'All' ? 'All Types' : opt === 'Group' ? 'WA Group' : 'Personal'}
                      </button>
                    ))}
                  </div>

                  <div className="ml-auto flex items-center gap-3">
                    {hasActiveFilter && (
                      <button
                        onClick={resetFilters}
                        className="text-xs text-gray-500 hover:text-gray-800 flex items-center gap-1 whitespace-nowrap cursor-pointer"
                      >
                        <i className="ri-close-line"></i> Clear filters
                      </button>
                    )}
                    <span className="text-sm text-gray-500">
                      <span className="font-bold text-gray-900">{filtered.length}</span> event{filtered.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                </div>
              </div>

              {isLoading ? (
                <div className="divide-y divide-gray-50">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="px-6 py-4 flex items-center gap-4 animate-pulse">
                      <div className="h-4 bg-gray-200 rounded w-36"></div>
                      <div className="h-6 bg-gray-100 rounded-full w-20"></div>
                      <div className="h-4 bg-gray-100 rounded w-24"></div>
                      <div className="h-4 bg-gray-100 rounded w-16"></div>
                      <div className="h-4 bg-gray-100 rounded w-12"></div>
                      <div className="h-6 bg-gray-200 rounded-full w-24 ml-auto"></div>
                    </div>
                  ))}
                </div>
              ) : paginated.length === 0 ? (
                <div className="py-20 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-calendar-line text-3xl text-gray-400"></i>
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    {hasActiveFilter ? 'No matching events' : 'No events yet'}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    {hasActiveFilter
                      ? 'Try adjusting your filters or search query.'
                      : 'Scheduled wishes will appear here once users book.'}
                  </p>
                  {hasActiveFilter && (
                    <button onClick={resetFilters} className="text-sm text-purple-600 font-semibold hover:text-purple-800 cursor-pointer whitespace-nowrap">
                      Clear all filters
                    </button>
                  )}
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 sticky top-0 z-10">
                        <tr>
                          <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Recipient</th>
                          <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Type</th>
                          <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Event Date</th>
                          <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Delivery Time</th>
                          <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Groups</th>
                          <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Renewal</th>
                          <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Created</th>
                          <th className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-50">
                        {paginated.map(event => (
                          <tr
                            key={event.id}
                            className={`hover:bg-purple-50/30 transition-colors group ${
                              event.status === 'Failed' ? 'border-l-4 border-l-red-400' : ''
                            }`}
                          >
                            <td className="px-5 py-3.5">
                              <span className="text-sm font-semibold text-gray-900">{event.name}</span>
                            </td>
                            <td className="px-5 py-3.5">
                              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
                                event.recipientType === 'Group'
                                  ? 'bg-violet-100 text-violet-700'
                                  : 'bg-sky-100 text-sky-700'
                              }`}>
                                <i className={`${event.recipientType === 'Group' ? 'ri-group-line' : 'ri-user-line'} text-xs`}></i>
                                {event.recipientType === 'Group' ? 'WA Group' : 'Personal'}
                              </span>
                            </td>
                            <td className="px-5 py-3.5 text-sm text-gray-700">{event.eventDate}</td>
                            <td className="px-5 py-3.5 text-sm font-semibold text-purple-700">{event.deliveryTime}</td>
                            <td className="px-5 py-3.5">
                              <div className="flex items-center gap-1.5">
                                <div className="w-4 h-4 flex items-center justify-center">
                                  <i className="ri-group-line text-gray-400 text-xs"></i>
                                </div>
                                <span className="text-sm font-bold text-gray-800">
                                  {event.groupCount}
                                </span>
                                <span className="text-xs text-gray-400">
                                  {event.groupCount === 1 ? 'group' : 'groups'}
                                </span>
                              </div>
                            </td>
                            <td className="px-5 py-3.5">
                              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusStyle(event.status)}`}>
                                <span className={`w-1.5 h-1.5 rounded-full inline-block ${getStatusDot(event.status)}`}></span>
                                {event.status}
                              </span>
                            </td>
                            <td className="px-5 py-3.5">
                              {event.isRenewal ? (
                                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-100 text-teal-700 whitespace-nowrap">
                                  <i className="ri-refresh-line text-xs"></i>Renewal
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 whitespace-nowrap">
                                  <i className="ri-add-circle-line text-xs"></i>New
                                </span>
                              )}
                            </td>
                            <td className="px-5 py-3.5 text-xs text-gray-500">{event.createdDate}</td>
                            <td className="px-5 py-3.5">
                              <Link
                                href={`/admin/events/${event.id}`}
                                className="inline-flex items-center gap-1 text-xs font-semibold text-purple-600 hover:text-purple-900 transition-colors whitespace-nowrap cursor-pointer"
                              >
                                View Details
                                <i className="ri-arrow-right-line text-xs"></i>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">Rows per page:</span>
                      <div className="relative">
                        <select
                          value={rowsPerPage}
                          onChange={e => { setRowsPerPage(Number(e.target.value)); setCurrentPage(1); }}
                          className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 pr-8 text-xs font-semibold text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-400"
                        >
                          {[10, 25, 50, 100].map(n => <option key={n} value={n}>{n}</option>)}
                        </select>
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 flex items-center justify-center">
                          <i className="ri-arrow-down-s-line text-gray-500 text-sm"></i>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 ml-2">
                        Showing {startIndex + 1}–{Math.min(startIndex + rowsPerPage, filtered.length)} of {filtered.length}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setCurrentPage(Math.max(1, safeCurrentPage - 1))}
                        disabled={safeCurrentPage === 1}
                        className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      >
                        <i className="ri-arrow-left-s-line text-sm"></i>
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(p => p === 1 || p === totalPages || Math.abs(p - safeCurrentPage) <= 1)
                        .reduce<(number | string)[]>((acc, p, i, arr) => {
                          if (i > 0 && (p as number) - (arr[i - 1] as number) > 1) acc.push('…');
                          acc.push(p);
                          return acc;
                        }, [])
                        .map((p, i) =>
                          p === '…' ? (
                            <span key={`ellipsis-${i}`} className="text-xs text-gray-400 px-1">…</span>
                          ) : (
                            <button
                              key={p}
                              onClick={() => setCurrentPage(p as number)}
                              className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                                safeCurrentPage === p
                                  ? 'bg-purple-600 text-white'
                                  : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                              }`}
                            >
                              {p}
                            </button>
                          )
                        )}
                      <button
                        onClick={() => setCurrentPage(Math.min(totalPages, safeCurrentPage + 1))}
                        disabled={safeCurrentPage === totalPages}
                        className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                      >
                        <i className="ri-arrow-right-s-line text-sm"></i>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
