'use client';

import Link from 'next/link';

type EventStatus = 'Scheduled' | 'Completed' | 'Renewal Upcoming' | 'Failed';
type RecipientType = 'Group' | 'Personal';

type EventData = {
  id: string;
  name: string;
  recipientType: RecipientType;
  eventDate: string;
  deliveryTime: string;
  groupCount: number;
  message: string;
  priceTier: string;
  pricePaid: string;
  isRenewal: boolean;
  status: EventStatus;
  createdDate: string;
  renewalEligibleDate: string;
};

const allEvents: EventData[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    recipientType: 'Group',
    eventDate: '25 Dec 2026',
    deliveryTime: '12:00 AM',
    groupCount: 3,
    message: "Happy Birthday Priya! 🎂 Wishing you a wonderful day filled with joy, love, and all your favourite things. May this year bring you incredible happiness and success. You deserve all the best! 🎉",
    priceTier: 'Standard Pack (2–5 groups)',
    pricePaid: '₹99',
    isRenewal: false,
    status: 'Scheduled',
    createdDate: '01 Dec 2026',
    renewalEligibleDate: '18 Dec 2027',
  },
  {
    id: '2',
    name: 'Rahul Verma',
    recipientType: 'Personal',
    eventDate: '26 Dec 2026',
    deliveryTime: '09:00 AM',
    groupCount: 1,
    message: "Happy Anniversary Rahul & Neha! 💍 May your bond grow stronger with every passing year. Wishing you a lifetime of love, laughter, and togetherness. Celebrate big today!",
    priceTier: 'Single (1 group)',
    pricePaid: '₹9',
    isRenewal: false,
    status: 'Scheduled',
    createdDate: '02 Dec 2026',
    renewalEligibleDate: '19 Dec 2027',
  },
  {
    id: '3',
    name: 'Anjali Patel',
    recipientType: 'Group',
    eventDate: '20 Dec 2026',
    deliveryTime: '06:00 AM',
    groupCount: 5,
    message: "Happy Birthday Anjali! 🎊 Sending you loads of love and best wishes on your special day. May all your dreams come true this year. You are truly amazing — have a spectacular birthday!",
    priceTier: 'Standard Pack (2–5 groups)',
    pricePaid: '₹99',
    isRenewal: true,
    status: 'Renewal Upcoming',
    createdDate: '28 Nov 2025',
    renewalEligibleDate: '13 Dec 2026',
  },
  {
    id: '4',
    name: 'Vikram Singh',
    recipientType: 'Group',
    eventDate: '18 Dec 2026',
    deliveryTime: '10:30 AM',
    groupCount: 2,
    message: "Happy Birthday Vikram! 🥳 May your day be as amazing as you are. Wishing you great health, happiness, and success in everything you do. Celebrate to the fullest!",
    priceTier: 'Single (1 group)',
    pricePaid: '₹49',
    isRenewal: false,
    status: 'Completed',
    createdDate: '25 Nov 2026',
    renewalEligibleDate: '11 Dec 2027',
  },
  {
    id: '5',
    name: 'Meera Reddy',
    recipientType: 'Personal',
    eventDate: '15 Dec 2026',
    deliveryTime: '08:00 AM',
    groupCount: 1,
    message: "Happy Birthday Meera! 🌸 Hope your day is filled with beautiful moments and wonderful surprises. You bring so much light into everyone's lives — may this year be your best yet!",
    priceTier: 'Single (1 group)',
    pricePaid: '₹9',
    isRenewal: true,
    status: 'Completed',
    createdDate: '20 Nov 2025',
    renewalEligibleDate: '08 Dec 2026',
  },
  {
    id: '6',
    name: 'Karan Malhotra',
    recipientType: 'Group',
    eventDate: '22 Dec 2026',
    deliveryTime: '12:00 AM',
    groupCount: 8,
    message: "Happy Birthday Karan! 🎂 Wishing you the most wonderful birthday surrounded by people who love you. May this year bring great adventures, new opportunities, and endless joy. Have an amazing day!",
    priceTier: 'Premium Pack (6–10 groups)',
    pricePaid: '₹199',
    isRenewal: false,
    status: 'Failed',
    createdDate: '05 Dec 2026',
    renewalEligibleDate: '15 Dec 2027',
  },
  {
    id: '7',
    name: 'Sneha Gupta',
    recipientType: 'Group',
    eventDate: '28 Dec 2026',
    deliveryTime: '07:00 AM',
    groupCount: 4,
    message: "Happy Birthday Sneha! 🎉 May your special day be filled with happiness and laughter. Wishing you a year full of wonderful moments, achievements, and beautiful memories. You deserve it all!",
    priceTier: 'Standard Pack (2–5 groups)',
    pricePaid: '₹99',
    isRenewal: false,
    status: 'Scheduled',
    createdDate: '03 Dec 2026',
    renewalEligibleDate: '21 Dec 2027',
  },
  {
    id: '8',
    name: 'Arjun Nair',
    recipientType: 'Group',
    eventDate: '30 Dec 2026',
    deliveryTime: '09:00 AM',
    groupCount: 5,
    message: "Happy Birthday Arjun! 🎊 Sending you warm wishes on your birthday. May this new year of your life bring exciting new chapters, wonderful surprises, and all the happiness you deserve!",
    priceTier: 'Standard Pack (2–5 groups)',
    pricePaid: '₹99',
    isRenewal: false,
    status: 'Scheduled',
    createdDate: '04 Dec 2026',
    renewalEligibleDate: '23 Dec 2027',
  },
  {
    id: '9',
    name: 'Divya Iyer',
    recipientType: 'Personal',
    eventDate: '12 Dec 2026',
    deliveryTime: '11:00 AM',
    groupCount: 1,
    message: "Happy Birthday Divya! 🌟 Wishing you a day as special and bright as you are. May all your wishes come true and may this year be filled with great health, happiness, and success in everything you do!",
    priceTier: 'Single (1 group)',
    pricePaid: '₹9',
    isRenewal: true,
    status: 'Completed',
    createdDate: '18 Nov 2025',
    renewalEligibleDate: '05 Dec 2026',
  },
  {
    id: '10',
    name: 'Rohan Kapoor',
    recipientType: 'Group',
    eventDate: '24 Dec 2026',
    deliveryTime: '12:00 AM',
    groupCount: 6,
    message: "Happy Birthday Rohan! 🎂 May your birthday be a blast and your year ahead even better. Wishing you nothing but the best — great health, big dreams, and all the love in the world. Celebrate well!",
    priceTier: 'Premium Pack (6–10 groups)',
    pricePaid: '₹199',
    isRenewal: false,
    status: 'Failed',
    createdDate: '06 Dec 2026',
    renewalEligibleDate: '17 Dec 2027',
  },
  {
    id: '11',
    name: 'Pooja Desai',
    recipientType: 'Group',
    eventDate: '10 Dec 2026',
    deliveryTime: '08:30 AM',
    groupCount: 3,
    message: "Happy Birthday Pooja! 💐 On your special day, wishing you all the things that make you happiest. May this year be filled with beautiful moments, new adventures, and incredible joy. You are amazing!",
    priceTier: 'Standard Pack (2–5 groups)',
    pricePaid: '₹99',
    isRenewal: true,
    status: 'Renewal Upcoming',
    createdDate: '15 Nov 2025',
    renewalEligibleDate: '03 Dec 2026',
  },
  {
    id: '12',
    name: 'Aditya Joshi',
    recipientType: 'Personal',
    eventDate: '29 Dec 2026',
    deliveryTime: '10:00 AM',
    groupCount: 1,
    message: "Happy Birthday Aditya! 🎉 Wishing you a fantastic birthday! May this year bring you great achievements, unforgettable moments, and all the happiness your heart can hold. Have an incredible day!",
    priceTier: 'Single (1 group)',
    pricePaid: '₹9',
    isRenewal: false,
    status: 'Scheduled',
    createdDate: '07 Dec 2026',
    renewalEligibleDate: '22 Dec 2027',
  },
  {
    id: '13',
    name: 'Nisha Pillai',
    recipientType: 'Group',
    eventDate: '14 Jan 2027',
    deliveryTime: '12:00 AM',
    groupCount: 10,
    message: "Happy Birthday Nisha! 🎊 May your birthday be the beginning of a year filled with good luck, good health, and much happiness. You are such a wonderful person — wishing you all the best on your special day!",
    priceTier: 'Premium Pack (6–10 groups)',
    pricePaid: '₹199',
    isRenewal: false,
    status: 'Scheduled',
    createdDate: '08 Dec 2026',
    renewalEligibleDate: '07 Jan 2028',
  },
  {
    id: '14',
    name: 'Suresh Menon',
    recipientType: 'Group',
    eventDate: '02 Jan 2027',
    deliveryTime: '09:00 AM',
    groupCount: 2,
    message: "Happy Anniversary Suresh & Latha! 💑 Wishing you another beautiful year together. May your love continue to grow stronger and your bond remain unbreakable. Congratulations on this special milestone!",
    priceTier: 'Single (1 group)',
    pricePaid: '₹49',
    isRenewal: true,
    status: 'Renewal Upcoming',
    createdDate: '10 Jan 2026',
    renewalEligibleDate: '26 Dec 2026',
  },
  {
    id: '15',
    name: 'Kavya Rajan',
    recipientType: 'Personal',
    eventDate: '05 Jan 2027',
    deliveryTime: '07:30 AM',
    groupCount: 1,
    message: "Happy Birthday Kavya! 🌺 Sending you the warmest wishes on your birthday. May this special day mark the beginning of a wonderful year ahead filled with blessings, success, and beautiful memories!",
    priceTier: 'Single (1 group)',
    pricePaid: '₹9',
    isRenewal: false,
    status: 'Scheduled',
    createdDate: '10 Dec 2026',
    renewalEligibleDate: '29 Dec 2027',
  },
];

type TimelineStep = {
  label: string;
  desc: string;
  time: string;
  state: 'done' | 'active' | 'pending' | 'failed';
};

function buildTimeline(event: EventData): TimelineStep[] {
  const scheduled: TimelineStep = {
    label: 'Event Scheduled',
    desc: 'User submitted the wish form and event was created in the system.',
    time: event.createdDate,
    state: 'done',
  };
  const payment: TimelineStep = {
    label: 'Payment Confirmed',
    desc: `Payment of ${event.pricePaid} received and verified via Razorpay.`,
    time: event.createdDate,
    state: 'done',
  };
  const botSetup: TimelineStep = {
    label: 'Bot Setup Required',
    desc: `User must add the WishHapp bot to their WhatsApp ${event.recipientType === 'Group' ? `group${event.groupCount > 1 ? 's' : ''}` : 'contact'} to enable delivery.`,
    time: event.status === 'Scheduled' ? 'Awaiting user action' : event.eventDate,
    state: event.status === 'Scheduled' ? 'active' : event.status === 'Failed' ? 'failed' : 'done',
  };
  const messageSent: TimelineStep = {
    label: 'Message Sent',
    desc: `Bot delivers the scheduled wish at ${event.deliveryTime} on ${event.eventDate}.`,
    time: event.status === 'Completed' || event.status === 'Renewal Upcoming' ? `${event.eventDate} · ${event.deliveryTime}` : 'Pending delivery',
    state: event.status === 'Completed' || event.status === 'Renewal Upcoming'
      ? 'done'
      : event.status === 'Failed' ? 'failed' : 'pending',
  };
  const botExit: TimelineStep = {
    label: 'Bot Exits Group',
    desc: 'WishHapp bot automatically exits the group within 24 hours after delivery.',
    time: event.status === 'Completed' || event.status === 'Renewal Upcoming' ? 'Within 24 hrs of delivery' : 'Pending',
    state: event.status === 'Completed' || event.status === 'Renewal Upcoming' ? 'done' : 'pending',
  };
  const followUp: TimelineStep = {
    label: 'Follow-up Message Sent',
    desc: 'System sends a follow-up asking about the experience after delivery.',
    time: event.status === 'Completed' || event.status === 'Renewal Upcoming' ? 'After delivery' : 'Pending',
    state: event.status === 'Completed' || event.status === 'Renewal Upcoming' ? 'done' : 'pending',
  };
  const renewalReminder: TimelineStep = {
    label: 'Renewal Reminder Scheduled',
    desc: `A renewal reminder will be sent approximately 7 days before ${event.renewalEligibleDate}.`,
    time: event.status === 'Renewal Upcoming' ? 'Reminder due soon' : event.renewalEligibleDate,
    state: event.status === 'Renewal Upcoming' ? 'active' : event.status === 'Completed' ? 'done' : 'pending',
  };

  return [scheduled, payment, botSetup, messageSent, botExit, followUp, renewalReminder];
}

function statusStyle(status: EventStatus) {
  switch (status) {
    case 'Scheduled':        return 'bg-purple-100 text-purple-700 border border-purple-200';
    case 'Completed':        return 'bg-green-100 text-green-700 border border-green-200';
    case 'Renewal Upcoming': return 'bg-amber-100 text-amber-700 border border-amber-200';
    case 'Failed':           return 'bg-red-100 text-red-700 border border-red-200';
  }
}

function timelineDot(state: TimelineStep['state']) {
  switch (state) {
    case 'done':    return { ring: 'border-green-400 bg-green-50',   icon: 'ri-checkbox-circle-fill text-green-500' };
    case 'active':  return { ring: 'border-amber-400 bg-amber-50',   icon: 'ri-time-fill text-amber-500' };
    case 'failed':  return { ring: 'border-red-400 bg-red-50',       icon: 'ri-close-circle-fill text-red-500' };
    case 'pending': return { ring: 'border-gray-200 bg-gray-50',     icon: 'ri-circle-line text-gray-300' };
  }
}

function timelineConnector(state: TimelineStep['state']) {
  return state === 'done' ? 'bg-green-300' : 'bg-gray-200';
}

export default function AdminEventDetailClient({ id }: { id: string }) {
  const event = allEvents.find(e => e.id === id) || allEvents[0];
  const timeline = buildTimeline(event);

  const renewalStatusLabel = () => {
    if (event.status === 'Renewal Upcoming') return 'Reminder due within 7 days';
    if (event.isRenewal) return 'Renewal event';
    if (event.status === 'Completed') return 'Scheduled for next year';
    return 'Not yet eligible';
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
            </Link>
            <Link href="/admin/logs" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
              <div className="w-5 h-5 flex items-center justify-center"><i className="ri-file-list-line text-lg"></i></div>
              <span className="font-medium text-sm">Delivery Logs</span>
            </Link>
          </nav>
        </aside>

        <main className="flex-1 p-8 min-w-0">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Link href="/admin/events" className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-white rounded-lg border border-gray-200 transition-colors cursor-pointer flex-shrink-0">
                <i className="ri-arrow-left-line text-base"></i>
              </Link>
              <div className="flex-1 min-w-0">
                <h1 className="text-2xl font-bold text-gray-900">Event Details</h1>
                <p className="text-sm text-gray-500 mt-0.5">View full event information and delivery lifecycle.</p>
              </div>
              <span className={`px-3 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap ${statusStyle(event.status)}`}>
                {event.status}
              </span>
            </div>

            {event.status === 'Failed' && (
              <div className="mb-5 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-error-warning-fill text-red-500 text-xl"></i>
                </div>
                <div>
                  <p className="text-sm font-semibold text-red-900">Delivery Failed — Bot Not Found in Group</p>
                  <p className="text-xs text-red-700 mt-0.5">The WishHapp bot was not present in the WhatsApp group at the scheduled delivery time. Ensure the user has added the bot before the next attempt.</p>
                </div>
              </div>
            )}

            {event.status === 'Renewal Upcoming' && (
              <div className="mb-5 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="ri-time-fill text-amber-500 text-xl"></i>
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-900">Renewal Reminder Due Soon</p>
                  <p className="text-xs text-amber-700 mt-0.5">A renewal reminder will be sent approximately 7 days before the next event date ({event.renewalEligibleDate}).</p>
                </div>
              </div>
            )}

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 space-y-5">
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                  <h2 className="text-base font-semibold text-gray-900 mb-5 flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-calendar-event-line text-purple-500"></i>
                    </div>
                    Event Overview
                  </h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-5">
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Recipient Name</p>
                        <p className="text-sm font-semibold text-gray-900">{event.name}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Recipient Type</p>
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
                          event.recipientType === 'Group' ? 'bg-violet-100 text-violet-700' : 'bg-sky-100 text-sky-700'
                        }`}>
                          <i className={event.recipientType === 'Group' ? 'ri-group-line' : 'ri-user-line'}></i>
                          {event.recipientType === 'Group' ? 'WhatsApp Group' : 'Personal Chat'}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Event Date</p>
                        <p className="text-sm text-gray-800">{event.eventDate}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Delivery Time</p>
                        <p className="text-sm font-semibold text-purple-700">{event.deliveryTime}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Group Count</p>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 flex items-center justify-center">
                            <i className="ri-group-line text-gray-400 text-sm"></i>
                          </div>
                          <span className="text-sm font-bold text-gray-900">{event.groupCount}</span>
                          <span className="text-xs text-gray-500">{event.groupCount === 1 ? 'group' : 'groups'}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Status</p>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap ${statusStyle(event.status)}`}>
                          {event.status}
                        </span>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Event Type</p>
                        {event.isRenewal ? (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-teal-100 text-teal-700 whitespace-nowrap">
                            <i className="ri-refresh-line"></i>Renewal
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 whitespace-nowrap">
                            <i className="ri-add-circle-line"></i>New Event
                          </span>
                        )}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Pricing Plan</p>
                        <p className="text-sm text-gray-800">{event.priceTier}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Price Paid</p>
                        <p className="text-lg font-bold text-gray-900">{event.pricePaid}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Created On</p>
                        <p className="text-sm text-gray-600">{event.createdDate}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                  <h2 className="text-base font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-message-3-line text-purple-500"></i>
                    </div>
                    Scheduled Message
                  </h2>
                  <div className="bg-gray-50 rounded-lg border border-gray-100 p-4">
                    <p className="text-sm text-gray-800 leading-relaxed">{event.message}</p>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                    <i className="ri-information-line"></i>
                    Message will include WishHapp branding when delivered by the bot.
                  </p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-robot-line text-amber-600 text-lg"></i>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-amber-900 mb-1">Bot Setup Required</h3>
                      <p className="text-xs text-amber-800 leading-relaxed">
                        Message delivery depends on the WishHapp bot being added to the WhatsApp {event.recipientType === 'Group' ? `group${event.groupCount > 1 ? 's' : ''}` : 'contact'}.
                        If the bot is not added before the scheduled time, the message may not be delivered.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                  <h2 className="text-base font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-refresh-line text-purple-500"></i>
                    </div>
                    Renewal Details
                  </h2>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Renewal Status</p>
                      <p className="text-sm font-medium text-gray-800">{renewalStatusLabel()}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Next Renewal Eligible</p>
                      <p className="text-sm font-medium text-gray-800">{event.renewalEligibleDate}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 flex items-start gap-1.5">
                      <i className="ri-information-line text-gray-400 mt-0.5 flex-shrink-0"></i>
                      A renewal reminder is sent approximately 7 days before the next year's event date to help the user schedule this wish again.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <Link
                    href="/admin/events"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#4C1D95] text-white rounded-lg text-sm font-semibold hover:bg-purple-900 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-arrow-left-line text-sm"></i>
                    View All Events
                  </Link>
                  <Link
                    href="/admin/dashboard"
                    className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <i className="ri-dashboard-line text-sm"></i>
                    Dashboard
                  </Link>
                </div>
              </div>

              <div className="col-span-1">
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sticky top-6">
                  <h2 className="text-base font-semibold text-gray-900 mb-5 flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <i className="ri-list-check-2 text-purple-500"></i>
                    </div>
                    Delivery Lifecycle
                  </h2>
                  <div className="relative">
                    {timeline.map((step, index) => {
                      const dot = timelineDot(step.state);
                      const isLast = index === timeline.length - 1;
                      return (
                        <div key={index} className="flex gap-3">
                          <div className="flex flex-col items-center flex-shrink-0">
                            <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${dot.ring}`}>
                              <i className={`${dot.icon} text-sm`}></i>
                            </div>
                            {!isLast && (
                              <div className={`w-0.5 flex-1 my-1 min-h-[20px] ${timelineConnector(step.state)}`}></div>
                            )}
                          </div>
                          <div className={`pb-5 flex-1 min-w-0 ${isLast ? '' : ''}`}>
                            <p className={`text-xs font-semibold leading-snug ${
                              step.state === 'done' ? 'text-gray-900' :
                              step.state === 'active' ? 'text-amber-700' :
                              step.state === 'failed' ? 'text-red-700' :
                              'text-gray-400'
                            }`}>
                              {step.label}
                            </p>
                            <p className={`text-xs mt-0.5 ${
                              step.state === 'pending' ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              {step.time}
                            </p>
                            <p className={`text-xs mt-1 leading-snug ${
                              step.state === 'pending' ? 'text-gray-300' : 'text-gray-500'
                            }`}>
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Legend</p>
                    {[
                      { dot: 'bg-green-400', label: 'Completed' },
                      { dot: 'bg-amber-400', label: 'Pending / Upcoming' },
                      { dot: 'bg-red-400', label: 'Failed' },
                      { dot: 'bg-gray-200', label: 'Not reached yet' },
                    ].map(l => (
                      <div key={l.label} className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full inline-block flex-shrink-0 ${l.dot}`}></span>
                        <span className="text-xs text-gray-500">{l.label}</span>
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
