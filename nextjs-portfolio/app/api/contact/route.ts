import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, budget, message } = body;

    // Validate required fields
    if (!name || !email || !subject) {
      return NextResponse.json(
        { error: 'Name, email, and subject are required' },
        { status: 400 }
      );
    }

    // In a real application, you would send an email here
    // using a service like Resend, SendGrid, or Nodemailer
    console.log('Contact form submission:', { name, email, subject, budget, message });

    // For now, just return success
    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
