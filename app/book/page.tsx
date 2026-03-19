'use client';

import { Suspense } from 'react';
import BookingForm from '@/components/BookingForm';

export default function BookPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50"></div>}>
      <BookingForm />
    </Suspense>
  );
}