import { auth } from '@/lib/authOptions';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET() {
  const session = await getServerSession(auth);
  if (session) {
    return NextResponse.json({ protected: session });
  } else {
    return NextResponse.json({ protected: false });
  }
}
