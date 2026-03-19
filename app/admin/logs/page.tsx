'use client';

import { useState } from 'react';
import Link from 'next/link';

interface DeliveryLog {
  id: number;
  eventId: string;
  name: string;
  attemptNumber: string;
  timestamp: string;
  status: 'Success' | 'Retry' | 'Failed' | 'Manual';
  errorMessage?: string;
  finalOutcome: string;
  apiResponseCode?: string;
  retryDelay?: string;
  queueStatus?: string;
  deliveryConfirmation?: string;
}

const mockLogs: DeliveryLog[] = [
  {
    id: 1,
    eventId: 'EVT-2024-001',
    name: 'Priya Sharma',
    attemptNumber: '1',
    timestamp: '2024-01-15 12:00:03 AM',
    status: 'Success',
    finalOutcome: 'Delivered Successfully',
    apiResponseCode: '200',
    queueStatus: 'Completed',
    deliveryConfirmation: 'Message delivered to WhatsApp group'
  },
  {
    id: 2,
    eventId: 'EVT-2024-002',
    name: 'Rahul Verma',
    attemptNumber: '1',
    timestamp: '2024-01-16 12:00:05 AM',
    status: 'Retry',
    errorMessage: 'Network timeout - WhatsApp API unreachable',
    finalOutcome: 'Retry Scheduled',
    apiResponseCode: '504',
    retryDelay: '5 minutes',
    queueStatus: 'Pending Retry'
  },
  {
    id: 3,
    eventId: 'EVT-2024-002',
    name: 'Rahul Verma',
    attemptNumber: '2',
    timestamp: '2024-01-16 12:05:12 AM',
    status: 'Success',
    finalOutcome: 'Delivered Successfully',
    apiResponseCode: '200',
    queueStatus: 'Completed',
    deliveryConfirmation: 'Message delivered to WhatsApp group'
  },
  {
    id: 4,
    eventId: 'EVT-2024-003',
    name: 'Anjali Patel',
    attemptNumber: '1',
    timestamp: '2024-01-17 12:00:02 AM',
    status: 'Retry',
    errorMessage: 'Invalid group invite link - Group not found',
    finalOutcome: 'Retry Scheduled',
    apiResponseCode: '404',
    retryDelay: '5 minutes',
    queueStatus: 'Pending Retry'
  },
  {
    id: 5,
    eventId: 'EVT-2024-003',
    name: 'Anjali Patel',
    attemptNumber: '2',
    timestamp: '2024-01-17 12:05:08 AM',
    status: 'Retry',
    errorMessage: 'Invalid group invite link - Group not found',
    finalOutcome: 'Retry Scheduled',
    apiResponseCode: '404',
    retryDelay: '10 minutes',
    queueStatus: 'Pending Retry'
  },
  {
    id: 6,
    eventId: 'EVT-2024-003',
    name: 'Anjali Patel',
    attemptNumber: '3',
    timestamp: '2024-01-17 12:15:15 AM',
    status: 'Failed',
    errorMessage: 'Invalid group invite link - Group not found',
    finalOutcome: 'Delivery Failed - Manual Retry Required',
    apiResponseCode: '404',
    queueStatus: 'Failed',
    deliveryConfirmation: 'Max retry attempts reached'
  },
  {
    id: 7,
    eventId: 'EVT-2024-003',
    name: 'Anjali Patel',
    attemptNumber: 'Manual',
    timestamp: '2024-01-17 09:30:22 AM',
    status: 'Manual',
    finalOutcome: 'Delivered Successfully',
    apiResponseCode: '200',
    queueStatus: 'Completed',
    deliveryConfirmation: 'Manual retry successful'
  },
  {
    id: 8,
    eventId: 'EVT-2024-004',
    name: 'Vikram Singh',
    attemptNumber: '1',
    timestamp: '2024-01-18 12:00:01 AM',
    status: 'Success',
    finalOutcome: 'Delivered Successfully',
    apiResponseCode: '200',
    queueStatus: 'Completed',
    deliveryConfirmation: 'Message delivered to WhatsApp group'
  },
  {
    id: 9,
    eventId: 'EVT-2024-005',
    name: 'Meera Reddy',
    attemptNumber: '1',
    timestamp: '2024-01-19 12:00:04 AM',
    status: 'Retry',
    errorMessage: 'Rate limit exceeded - Too many requests',
    finalOutcome: 'Retry Scheduled',
    apiResponseCode: '429',
    retryDelay: '5 minutes',
    queueStatus: 'Pending Retry'
  },
  {
    id: 10,
    eventId: 'EVT-2024-005',
    name: 'Meera Reddy',
    attemptNumber: '2',
    timestamp: '2024-01-19 12:05:09 AM',
    status: 'Success',
    finalOutcome: 'Delivered Successfully',
    apiResponseCode: '200',
    queueStatus: 'Completed',
    deliveryConfirmation: 'Message delivered to WhatsApp group'
  }
];

export default function DeliveryLogsPage() {
  const [statusFilter, setStatusFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const filteredLogs = mockLogs.filter(log => {
    const matchesStatus = statusFilter === 'All' || log.status === statusFilter;
    const matchesSearch = 
      log.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.eventId.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const totalPages = Math.ceil(filteredLogs.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedLogs = filteredLogs.slice(startIndex, startIndex + rowsPerPage);

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Success':
        return 'bg-green-100 text-green-700';
      case 'Retry':
        return 'bg-amber-100 text-amber-700';
      case 'Failed':
        return 'bg-red-100 text-red-700';
      case 'Manual':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const failureRate = (mockLogs.filter(log => log.status === 'Failed').length / mockLogs.length) * 100;
  const showFailureAlert = failureRate > 15;

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="font-['Pacifico'] text-2xl text-purple-900">WishHapp</div>
          <div className="text-xs text-gray-500 mt-1">Admin Panel</div>
        </div>
        
        <nav className="flex-1 p-4">
          <Link href="/admin/dashboard" className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors mb-1">
            <i className="ri-dashboard-line text-xl w-5 h-5 flex items-center justify-center"></i>
            <span>Dashboard</span>
          </Link>
          
          <Link href="/admin/events" className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors mb-1">
            <i className="ri-calendar-event-line text-xl w-5 h-5 flex items-center justify-center"></i>
            <span>All Events</span>
          </Link>
          
          <Link href="/admin/failed" className="flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors mb-1">
            <i className="ri-alert-line text-xl w-5 h-5 flex items-center justify-center"></i>
            <span>Failed Events</span>
          </Link>
          
          <Link href="/admin/logs" className="flex items-center gap-3 px-4 py-3 text-purple-700 bg-purple-50 rounded-lg transition-colors mb-1">
            <i className="ri-file-list-3-line text-xl w-5 h-5 flex items-center justify-center"></i>
            <span>Delivery Logs</span>
          </Link>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-end gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-purple-100 text-purple-700 hover:bg-purple-200 transition-colors">
            <i className="ri-user-line text-xl"></i>
          </button>
          
          <button className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors flex items-center gap-2">
            <i className="ri-logout-box-r-line text-lg w-5 h-5 flex items-center justify-center"></i>
            <span>Logout</span>
          </button>
        </header>

        <main className="flex-1 p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Delivery Logs</h1>
            <p className="text-gray-600">Monitor message delivery attempts and retry behavior.</p>
          </div>

          {showFailureAlert && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
              <i className="ri-error-warning-line text-xl text-red-600 w-5 h-5 flex items-center justify-center mt-0.5"></i>
              <div className="flex-1">
                <div className="font-semibold text-red-900 mb-1">High Failure Rate Detected</div>
                <div className="text-sm text-red-700">
                  Current failure rate is {failureRate.toFixed(1)}%. Please review failed deliveries and check system health.
                </div>
              </div>
            </div>
          )}

          <div className="bg-white rounded-lg border border-gray-200 mb-6 p-4 flex items-center gap-4">
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:border-gray-400 transition-colors cursor-pointer"
            >
              <option>All</option>
              <option>Success</option>
              <option>Retry</option>
              <option>Failed</option>
              <option>Manual</option>
            </select>

            <div className="flex-1 relative">
              <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg w-5 h-5 flex items-center justify-center"></i>
              <input
                type="text"
                placeholder="Search by name or event ID..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-gray-700 placeholder-gray-400"
              />
            </div>

            <div className="text-sm text-gray-600 whitespace-nowrap">
              Total Logs: <span className="font-semibold text-gray-900">{filteredLogs.length}</span>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Event ID</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Attempt</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Timestamp</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Error Message</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Final Outcome</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {paginatedLogs.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="px-6 py-16 text-center">
                        <i className="ri-file-list-3-line text-5xl text-gray-300 mb-4 w-12 h-12 flex items-center justify-center mx-auto"></i>
                        <div className="text-gray-900 font-semibold mb-1">No delivery logs available</div>
                        <div className="text-sm text-gray-500">Logs will appear here once deliveries are attempted.</div>
                      </td>
                    </tr>
                  ) : (
                    paginatedLogs.map((log) => (
                      <>
                        <tr 
                          key={log.id} 
                          className="hover:bg-gray-50 transition-colors cursor-pointer"
                          onClick={() => setExpandedRow(expandedRow === log.id ? null : log.id)}
                        >
                          <td className="px-6 py-4 text-sm font-mono text-purple-700">{log.eventId}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-gray-900">{log.name}</td>
                          <td className="px-6 py-4 text-sm text-gray-700">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              log.attemptNumber === 'Manual' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'
                            }`}>
                              {log.attemptNumber === 'Manual' ? 'Manual' : `Attempt ${log.attemptNumber}`}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{log.timestamp}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusBadgeClass(log.status)}`}>
                              {log.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-red-600 font-mono max-w-xs">
                            {log.errorMessage ? (
                              <div className="truncate">{log.errorMessage}</div>
                            ) : (
                              <span className="text-gray-400">—</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-700">{log.finalOutcome}</td>
                          <td className="px-6 py-4 text-right">
                            <i className={`ri-arrow-${expandedRow === log.id ? 'up' : 'down'}-s-line text-gray-400 text-lg w-5 h-5 flex items-center justify-center ml-auto`}></i>
                          </td>
                        </tr>
                        {expandedRow === log.id && (
                          <tr>
                            <td colSpan={8} className="px-6 py-4 bg-gray-50">
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <div className="text-xs font-semibold text-gray-500 uppercase mb-1">API Response Code</div>
                                  <div className="font-mono text-gray-900">{log.apiResponseCode || '—'}</div>
                                </div>
                                <div>
                                  <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Queue Status</div>
                                  <div className="text-gray-900">{log.queueStatus || '—'}</div>
                                </div>
                                {log.retryDelay && (
                                  <div>
                                    <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Retry Delay</div>
                                    <div className="text-gray-900">{log.retryDelay}</div>
                                  </div>
                                )}
                                {log.deliveryConfirmation && (
                                  <div>
                                    <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Delivery Confirmation</div>
                                    <div className="text-gray-900">{log.deliveryConfirmation}</div>
                                  </div>
                                )}
                                {log.errorMessage && (
                                  <div className="col-span-2">
                                    <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Full Error Message</div>
                                    <div className="font-mono text-red-600 bg-red-50 p-3 rounded border border-red-200">{log.errorMessage}</div>
                                  </div>
                                )}
                              </div>
                            </td>
                          </tr>
                        )}
                      </>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {paginatedLogs.length > 0 && (
              <div className="border-t border-gray-200 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Rows per page:</span>
                  <select
                    value={rowsPerPage}
                    onChange={(e) => {
                      setRowsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 bg-white cursor-pointer"
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    Page {currentPage} of {totalPages}
                  </span>
                  
                  <div className="flex gap-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}