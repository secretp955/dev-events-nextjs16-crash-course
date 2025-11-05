import { NextRequest, NextResponse } from 'next/server';

import connectDB from '@/lib/mongodb';
import Event from '@/database/event.model';
import Booking from '@/database/booking.model';

// Define route params type for type safety
type RouteParams = {
    params: Promise<{
        slug: string;
    }>;
};

/**
 * POST /api/events/[slug]/bookings
 * Creates a booking for an event by slug
 */
export async function POST(
    req: NextRequest,
    { params }: RouteParams
): Promise<NextResponse> {
    try {
        await connectDB();

        const { slug } = await params;

        // Validate slug parameter
        if (!slug || typeof slug !== 'string' || slug.trim() === '') {
            return NextResponse.json(
                { message: 'Invalid or missing slug parameter' },
                { status: 400 }
            );
        }

        // Get request body
        const body = await req.json();
        const { email } = body;

        // Validate email
        if (!email || typeof email !== 'string' || email.trim() === '') {
            return NextResponse.json(
                { message: 'Email is required' },
                { status: 400 }
            );
        }

        // Find event by slug
        const event = await Event.findOne({ slug: slug.trim().toLowerCase() });

        if (!event) {
            return NextResponse.json(
                { message: `Event with slug '${slug}' not found` },
                { status: 404 }
            );
        }

        // Create booking
        try {
            const booking = await Booking.create({
                eventId: event._id,
                email: email.trim().toLowerCase(),
            });

            return NextResponse.json(
                { message: 'Booking created successfully', booking },
                { status: 201 }
            );
        } catch (bookingError: any) {
            // Handle duplicate booking error
            if (bookingError.code === 11000 || bookingError.name === 'MongoServerError') {
                return NextResponse.json(
                    { message: 'You have already booked this event' },
                    { status: 409 }
                );
            }

            // Handle validation errors
            if (bookingError.name === 'ValidationError') {
                return NextResponse.json(
                    { message: bookingError.message || 'Validation error', error: bookingError.message },
                    { status: 400 }
                );
            }

            throw bookingError;
        }
    } catch (error) {
        // Log error for debugging (only in development)
        if (process.env.NODE_ENV === 'development') {
            console.error('Error creating booking:', error);
        }

        // Handle specific error types
        if (error instanceof Error) {
            // Handle database connection errors
            if (error.message.includes('MONGODB_URI')) {
                return NextResponse.json(
                    { message: 'Database configuration error' },
                    { status: 500 }
                );
            }

            // Return generic error with error message
            return NextResponse.json(
                { message: 'Failed to create booking', error: error.message },
                { status: 500 }
            );
        }

        // Handle unknown errors
        return NextResponse.json(
            { message: 'An unexpected error occurred' },
            { status: 500 }
        );
    }
}
