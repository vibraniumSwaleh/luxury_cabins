'use server';

import { revalidatePath } from 'next/cache';
import { signIn, signOut, auth } from './auth';
import { supabase } from '@/app/_lib/supabase';

export async function signInAction() {
  await signIn('google', { redirectTo: '/account' });
}

export async function signOutAction() {
  await signOut({ redirectTo: '/' });
}

export async function updateGuest(formData) {
  const session = await auth();

  if (!session) throw new Error('Unauthorized - Please sign in to continue.');

  const nationalID = formData.get('nationalID');
  const [nationality, countryFlag] = formData.get('nationality').split('%');

  if (!/^[a-zA-Z0-9]{5,12}$/.test(nationalID))
    throw new Error('Invalid National ID number.');

  const updateData = { nationalID, nationality, countryFlag };

  const { data, error } = await supabase
    .from('guests')
    .update(updateData)
    .eq('id', session.user.guestId);

  if (error) throw new Error('Guest could not be updated');
  revalidatePath('/account/profile');
}

export async function deleteReservation(bookingId) {
  const session = await auth();

  if (!session) throw new Error('Unauthorized - Please sign in to continue.');

  const { error } = await supabase
    .from('bookings')
    .delete()
    .eq('id', bookingId)
    .eq('guestId', session.user.guestId);

  if (error) throw new Error('Booking could not be deleted');
  revalidatePath('/account/reservations');
}
