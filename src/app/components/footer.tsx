'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="mt-10 py-10 text-center text-sm text-gray-600">
      <p>© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
}
