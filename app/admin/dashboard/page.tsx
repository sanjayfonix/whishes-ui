'use client';

import { useState } from 'react';
import Link from 'next/link';

const stats = [
  {
    label: 'Active Schedules',
    count: 24,
    subtext: 'Upcoming events not yet delivered',
    color: 'purple',
    icon: 'ri-calendar-schedule-line',
    trend: '+3 today'
  },
  {
    label: 'Completed Deliveries',
    count: 156,
    subtext: 'Successfully delivered wishes',
    color: 'green',
    icon: 'ri-checkbox-circle-line',
    trend: '+8 this week'
  },
  {
    label: 'Renewal Pipeline',
    count: 12,
    subtext: 'Events eligible for renewal soon',
    color: 'amber',
    icon: 'ri-refresh-line',
    trend: '7-day window'
  },
  {
    label: 'Total Groups Scheduled',
    count: 87,
    subtext: 'Groups across all active events',
    color: 'blue',
    icon: 'ri-group-line',
    trend: 'Across 24 events'
  }
];

const todaysEvents = [
  {
    id: 1,
    name: 'Priya Sharma',
    eventDate: '25 Dec 2026',
    deliveryTime: '12:00 AM',
    recipientType: 'Group',
    groupCount: 3,
    status: 'Scheduled'
  },
  {
    id: 2,
    name: 'Rahul Verma',
    eventDate: '26 Dec 2026',
    deliveryTime: '09:00 AM',
    recipientType: 'Personal',
    groupCount: 1,
    status: 'Scheduled'
  },
  {
    id: 3,
    name: 'Anjali Patel',
    eventDate: '27 Dec 2026',
    deliveryTime: '06:00 AM',
    recipientType: 'Group',
    groupCount: 5,
    status: 'Renewal Upcoming'
  },
  {
    id: 4,
    name: 'Vikram Singh',
    eventDate: '28 Dec 2026',
    deliveryTime: '10:30 AM',
    recipientType: 'Group',
    groupCount: 2,
    status: 'Scheduled'
  },
  {
    id: 5,
    name: 'Meera Reddy',
    eventDate: '29 Dec 2026',
    deliveryTime: '08:00 AM',
    recipientType: 'Personal',
    groupCount: 1,
    status: 'Completed'
  },
  {
    id: 6,
    name: 'Karan Malhotra',
    eventDate: '30 Dec 2026',
    deliveryTime: '12:00 AM',
    recipientType: 'Group',
    groupCount: 8,
    status: 'Failed'
  }
];

const recentActivity = [
  {
    id: 1,
    message: 'Bot triggered message for Priya Sharma',
    detail: '3 groups · 12:00 AM delivery',
    time: '2 minutes ago',
    type: 'bot'
  },
  {
    id: 2,
    message: 'Event completed — Meera Reddy',
    detail: 'Bot exited group after delivery',
    time: '18 minutes ago',
    type: 'success'
  },
  {
    id: 3,
    message: 'Renewal reminder sent — Anjali Patel',
    detail: 'Event date in 7 days',
    time: '45 minutes ago',
    type: 'renewal'
  },
  {
    id: 4,
    message: 'New wish scheduled — Divya Iyer',
    detail: 'Personal chat · 10:00 AM',
    time: '1 hour ago',
    type: 'info'
  },
  {
    id: 5,
    message: 'Delivery failed — Karan Malhotra',
    detail: 'Bot not found in group',
    time: '2 hours ago',
    type: 'error'
  },
  {
    id: 6,
    message: 'New wish scheduled — Arjun Nair',
    detail: '5 groups · 09:00 AM',
    time: '3 hours ago',
    type: 'info'
  }
];

export default function AdminDashboard() {
  const [isLoading] = useState(false);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Scheduled':
        return 'bg-purple-100 text-purple-700 border border-purple-200';
      case 'Completed':
        return 'bg-green-100 text-green-700 border border-green-200';
      case 'Renewal Upcoming':
        return 'bg-amber-100 text-amber-700 border border-amber-200';
      case 'Failed':
        return 'bg-red-100 text-red-700 border border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border border-gray-200';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'success':
        return { icon: 'ri-checkbox-circle-fill', bg: 'bg-green-100', color: 'text-green-600' };
      case 'error':
        return { icon: 'ri-error-warning-fill', bg: 'bg-red-100', color: 'text-red-600' };
      case 'renewal':
        return { icon: 'ri-refresh-line', bg: 'bg-amber-100', color: 'text-amber-600' };
      case 'bot':
        return { icon: 'ri-robot-line', bg: 'bg-purple-100', color: 'text-purple-600' };
      default:
        return { icon: 'ri-calendar-check-line', bg: 'bg-blue-100', color: 'text-blue-600' };
    }
  };

  const failedCount = todaysEvents.filter(e => e.status === 'Failed').length;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-2xl font-['Pacifico'] text-purple-600">WishHapp</div>
              <span className="text-sm text-gray-500 font-medium bg-gray-100 px-2 py-0.5 rounded">Admin Panel</span>
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
                className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <i className="ri-logout-box-line"></i>
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-65px)]">
          <nav className="p-4 space-y-1">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 px-4 py-3 bg-purple-50 text-purple-700 rounded-lg"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-dashboard-line text-lg"></i>
              </div>
              <span className="font-medium text-sm">Dashboard</span>
            </Link>
            <Link
              href="/admin/events"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-calendar-line text-lg"></i>
              </div>
              <span className="font-medium text-sm">All Events</span>
            </Link>
            <Link
              href="/admin/failed"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-error-warning-line text-lg"></i>
              </div>
              <span className="font-medium text-sm">Failed Events</span>
              {failedCount > 0 && (
                <span className="ml-auto bg-red-100 text-red-600 text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                  {failedCount}
                </span>
              )}
            </Link>
            <Link
              href="/admin/logs"
              className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className="ri-file-list-line text-lg"></i>
              </div>
              <span className="font-medium text-sm">Delivery Logs</span>
            </Link>
          </nav>

          <div className="p-4 mx-4 mt-4 bg-purple-50 rounded-lg border border-purple-100">
            <p className="text-xs font-semibold text-purple-700 mb-1">System Status</p>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
              <span className="text-xs text-gray-600">Bot service active</span>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
              <span className="text-xs text-gray-600">Scheduler running</span>
            </div>
          </div>
        </aside>

        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Dashboard Overview</h1>
                <p className="text-sm text-gray-500">Monitor scheduled wishes, deliveries, and renewal activity.</p>
              </div>
              <div className="text-sm text-gray-500 bg-white border border-gray-200 px-3 py-2 rounded-lg">
                <i className="ri-time-line mr-1.5"></i>
                Last updated: just now
              </div>
            </div>

            {failedCount > 0 && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-error-warning-fill text-red-500 text-xl"></i>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-red-900 mb-0.5 text-sm">{failedCount} delivery failure{failedCount > 1 ? 's' : ''} require attention</h3>
                  <p className="text-xs text-red-700">Check that the WishHapp bot was added to the relevant WhatsApp groups.</p>
                </div>
                <Link href="/admin/failed" className="text-xs font-semibold text-red-700 hover:text-red-900 whitespace-nowrap">View Failed →</Link>
              </div>
            )}

            {isLoading ? (
              <div className="grid grid-cols-4 gap-6 mb-8">
                {[1,2,3,4].map(i => (
                  <div key={i} className="bg-white rounded-lg border border-gray-100 p-6 animate-pulse">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded w-16 mb-2"></div>
                    <div className="h-3 bg-gray-100 rounded w-32"></div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${
                        stat.color === 'purple' ? 'bg-purple-100' :
                        stat.color === 'green' ? 'bg-green-100' :
                        stat.color === 'amber' ? 'bg-amber-100' :
                        'bg-blue-100'
                      }`}>
                        <i className={`${stat.icon} text-xl ${
                          stat.color === 'purple' ? 'text-purple-600' :
                          stat.color === 'green' ? 'text-green-600' :
                          stat.color === 'amber' ? 'text-amber-600' :
                          'text-blue-600'
                        }`}></i>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.count}</div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</p>
                    <p className="text-xs text-gray-500">{stat.subtext}</p>
                    <div className={`mt-3 text-xs font-medium px-2 py-0.5 rounded-full inline-block ${
                      stat.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                      stat.color === 'green' ? 'bg-green-50 text-green-600' :
                      stat.color === 'amber' ? 'bg-amber-50 text-amber-600' :
                      'bg-blue-50 text-blue-600'
                    }`}>
                      {stat.trend}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <div>
                      <h2 className="text-base font-semibold text-gray-900">Today's Events</h2>
                      <p className="text-xs text-gray-500 mt-0.5">Upcoming deliveries sorted by date</p>
                    </div>
                    <Link href="/admin/events" className="text-xs text-purple-600 font-semibold hover:text-purple-800 whitespace-nowrap">
                      View All →
                    </Link>
                  </div>

                  {todaysEvents.length === 0 ? (
                    <div className="py-16 text-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="ri-calendar-line text-3xl text-gray-400"></i>
                      </div>
                      <p className="text-gray-500 font-medium">No events scheduled today</p>
                      <p className="text-sm text-gray-400 mt-1">New scheduled wishes will appear here</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Recipient</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Event Date</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Time</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Groups</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                          {todaysEvents.map((event) => (
                            <tr key={event.id} className="hover:bg-gray-50 transition-colors">
                              <td className="px-4 py-3.5 text-sm font-semibold text-gray-900">{event.name}</td>
                              <td className="px-4 py-3.5 text-sm text-gray-600">{event.eventDate}</td>
                              <td className="px-4 py-3.5 text-sm text-purple-700 font-medium">{event.deliveryTime}</td>
                              <td className="px-4 py-3.5">
                                <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ${
                                  event.recipientType === 'Group'
                                    ? 'bg-blue-50 text-blue-700'
                                    : 'bg-teal-50 text-teal-700'
                                }`}>
                                  <i className={event.recipientType === 'Group' ? 'ri-group-line' : 'ri-user-line'}></i>
                                  {event.recipientType}
                                </span>
                              </td>
                              <td className="px-4 py-3.5 text-sm text-gray-600 font-medium">
                                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-semibold">
                                  {event.groupCount}
                                </span>
                              </td>
                              <td className="px-4 py-3.5">
                                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${getStatusStyle(event.status)}`}>
                                  {event.status}
                                </span>
                              </td>
                              <td className="px-4 py-3.5">
                                <Link
                                  href={`/admin/events/${event.id}`}
                                  className="text-purple-600 hover:text-purple-800 text-xs font-semibold whitespace-nowrap cursor-pointer"
                                >
                                  View
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-span-1 space-y-4">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="px-5 py-4 border-b border-gray-100">
                    <h2 className="text-base font-semibold text-gray-900">Recent Activity</h2>
                    <p className="text-xs text-gray-500 mt-0.5">Latest system events</p>
                  </div>
                  <div className="p-4 space-y-3">
                    {recentActivity.map((activity) => {
                      const ic = getActivityIcon(activity.type);
                      return (
                        <div key={activity.id} className="flex gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${ic.bg}`}>
                            <i className={`${ic.icon} ${ic.color} text-sm`}></i>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-gray-900 leading-snug">{activity.message}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{activity.detail}</p>
                            <p className="text-xs text-gray-400 mt-0.5">{activity.time}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Status Guide</h3>
                  <div className="space-y-2">
                    {[
                      { label: 'Scheduled', style: 'bg-purple-100 text-purple-700 border border-purple-200', desc: 'Awaiting delivery' },
                      { label: 'Completed', style: 'bg-green-100 text-green-700 border border-green-200', desc: 'Wish delivered' },
                      { label: 'Renewal Upcoming', style: 'bg-amber-100 text-amber-700 border border-amber-200', desc: 'Reminder in 7 days' },
                      { label: 'Failed', style: 'bg-red-100 text-red-700 border border-red-200', desc: 'Bot not in group' },
                    ].map(s => (
                      <div key={s.label} className="flex items-center justify-between gap-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap ${s.style}`}>{s.label}</span>
                        <span className="text-xs text-gray-400">{s.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
