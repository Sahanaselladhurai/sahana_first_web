import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function ProfilePage() {
  const { user } = useAuth();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold">Profile</h2>
      <p className="mt-4">Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
}
