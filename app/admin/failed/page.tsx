'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminFailedEvents() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [retryingId, setRetryingId] = useState<number | null>(null);

  const failedEvents = [
    {
      id: 1,
      name: 'Priya Sharma',
      eventDate: '2024-12-25',
      deliveryTime: '12:00 AM IST',
      failureReason: 'WhatsApp API timeout',
      retryAttempts: 3,
      createdDate: '2024-12-01'
    },
    {
      id: 6,
      name: 'Karan Malhotra',
      eventDate: '2024-12-22',
      deliveryTime: '12:00 AM IST',
      failureReason: 'Group link invalid or expired',
      retryAttempts: 3,
      createdDate: '2024-12-05'
    },
    {
      id: 10,
      name: 'Rohan Kapoor',
      eventDate: '2024-12-24',
      deliveryTime: '12:00 AM IST',
      failureReason: 'Media file upload failed',
      retryAttempts: 3,
      createdDate: '2024-12-06'
    }
  ];

  const filteredEvents = failedEvents.filter(event =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEvents.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedEvents = filteredEvents.slice(startIndex, startIndex + rowsPerPage);

  const handleRetryClick = (event: any) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const handleRetryConfirm = () => {
    if (selectedEvent) {
      setRetryingId(selectedEvent.id);
      setTimeout(() => {
        setRetryingId(null);
        setShowModal(false);
        setSelectedEvent(null);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-['Pacifico'] text-purple-600">WishHapp</div>
              <span className="text-sm text-gray-500 font-medium">Admin Panel</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <i className="ri-user-line text-purple-600"></i>
                </div>
                <span className="text-sm font-medium text-gray-700">Admin</span>
              </div>
              <Link
                href="/admin/login"
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap cursor-pointer"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-73px)]">
          <nav className="p-4">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg mb-2 transition-colors cursor-pointer"
            >
              <i className="ri-dashboard-line text-lg"></i>
              <span className="font-medium">Dashboard</span>
            </Link>
            <Link
              href="/admin/events"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg mb-2 transition-colors cursor-pointer"
            >
              <i className="ri-calendar-line text-lg"></i>
              <span className="font-medium">All Events</span>
            </Link>
            <Link
              href="/admin/failed"
              className="flex items-center gap-3 px-4 py-3 bg-purple-50 text-purple-700 rounded-lg mb-2"
            >
              <i className="ri-error-warning-line text-lg"></i>
              <span className="font-medium">Failed Events</span>
            </Link>
            <Link
              href="/admin/logs"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
            >
              <i className="ri-file-list-line text-lg"></i>
              <span className="font-medium">Delivery Logs</span>
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Failed Events</h1>
              <p className="text-gray-600">Events that require manual review and retry.</p>
            </div>

            {filteredEvents.length > 0 && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-error-warning-fill text-red-600 text-xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-red-900 mb-1">
                    {filteredEvents.length} {filteredEvents.length === 1 ? 'Event' : 'Events'} Failed to Deliver
                  </h3>
                  <p className="text-sm text-red-700">
                    Some events failed to deliver. Review and retry to maintain reliability.
                  </p>
                </div>
              </div>
            )}

            <div className="bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex items-center justify-between gap-4">
                  <div className="relative flex-1 max-w-md">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                      <i className="ri-search-line text-gray-400"></i>
                    </div>
                    <input
                      type="text"
                      placeholder="Search by name..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setCurrentPage(1);
                      }}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="font-semibold text-red-600">{filteredEvents.length}</span>
                    <span>failed events</span>
                  </div>
                </div>
              </div>

              {paginatedEvents.length === 0 ? (
                <div className="py-16 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-checkbox-circle-line text-3xl text-green-500"></i>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {searchQuery ? 'No failed events found' : 'No failed events'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {searchQuery
                      ? 'Try adjusting your search query.'
                      : 'All deliveries are successful. Great job!'}
                  </p>
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 sticky top-0">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Event Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Delivery Time
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Failure Reason
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Retry Attempts
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Created Date
                          </th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {paginatedEvents.map((event) => (
                          <tr
                            key={event.id}
                            className="hover:bg-gray-50 transition-colors border-l-4 border-l-red-500"
                          >
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">
                              {event.name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">{event.eventDate}</td>
                            <td className="px-6 py-4 text-sm text-purple-600 font-medium">
                              {event.deliveryTime}
                            </td>
                            <td className="px-6 py-4 text-sm text-red-600">{event.failureReason}</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-900">
                                  {event.retryAttempts}/3
                                </span>
                                <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-semibold rounded-full whitespace-nowrap">
                                  Max Reached
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-600">{event.createdDate}</td>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <Link
                                  href={`/admin/events/${event.id}`}
                                  className="text-purple-600 hover:text-purple-700 text-sm font-medium whitespace-nowrap transition-colors cursor-pointer"
                                >
                                  View Details
                                </Link>
                                <button
                                  onClick={() => handleRetryClick(event)}
                                  disabled={retryingId === event.id}
                                  className="px-3 py-1.5 border-2 border-red-500 text-red-600 rounded-lg text-xs font-semibold hover:bg-red-50 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
                                >
                                  {retryingId === event.id ? (
                                    <>
                                      <i className="ri-loader-4-line animate-spin"></i>
                                      Retrying...
                                    </>
                                  ) : (
                                    <>
                                      <i className="ri-refresh-line"></i>
                                      Retry Now
                                    </>
                                  )}
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {totalPages > 1 && (
                    <div className="px-6 py-4 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">Rows per page:</span>
                          <div className="relative">
                            <select
                              value={rowsPerPage}
                              onChange={(e) => {
                                setRowsPerPage(Number(e.target.value));
                                setCurrentPage(1);
                              }}
                              className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-1.5 pr-8 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
                            >
                              <option value={10}>10</option>
                              <option value={25}>25</option>
                              <option value={50}>50</option>
                              <option value={100}>100</option>
                            </select>
                            <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                              <i className="ri-arrow-down-s-line text-gray-500 text-sm"></i>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-600">
                            Page {currentPage} of {totalPages}
                          </span>
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                              disabled={currentPage === 1}
                              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                            >
                              <i className="ri-arrow-left-s-line"></i>
                            </button>
                            <button
                              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                              disabled={currentPage === totalPages}
                              className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                            >
                              <i className="ri-arrow-right-s-line"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </main>
      </div>

      {showModal && selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="ri-alert-fill text-amber-500 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Confirm Manual Retry</h3>
            </div>
            <p className="text-sm text-gray-600 mb-5">
              This will attempt to resend the message to the WhatsApp group. Please confirm before proceeding.
            </p>
            <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-100">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Name</span>
                <span className="font-medium text-gray-900">{selectedEvent.name}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500">Event Date</span>
                <span className="font-medium text-gray-900">{selectedEvent.eventDate}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Failure Reason</span>
                <span className="font-medium text-red-600">{selectedEvent.failureReason}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setShowModal(false);
                  setSelectedEvent(null);
                }}
                disabled={retryingId !== null}
                className="flex-1 px-4 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleRetryConfirm}
                disabled={retryingId !== null}
                className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {retryingId !== null ? (
                  <>
                    <i className="ri-loader-4-line animate-spin"></i>
                    Retrying...
                  </>
                ) : (
                  'Confirm Retry'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}