import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, name, phone, city, trade } = body;

    // Validate name
    if (!name || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Name must be at least 2 characters long." },
        { status: 400 }
      );
    }

    // Validate phone (Pakistani 11-digit mobile: 03xxxxxxxx)
    const cleanPhone = phone.replace(/[-\s]/g, "");
    const phoneRegex = /^03\d{9}$/;
    if (!phoneRegex.test(cleanPhone)) {
      return NextResponse.json(
        { error: "Invalid mobile number. Must match format 03xxxxxxxxx (11 digits)." },
        { status: 400 }
      );
    }

    // Validate city
    const allowedCities = ["Lahore", "Karachi", "Islamabad", "Other"];
    if (!allowedCities.includes(city)) {
      return NextResponse.json(
        { error: "Invalid city selection." },
        { status: 400 }
      );
    }

    // Validate trade if worker (karigar)
    if (type === "karigar") {
      const allowedTrades = [
        "Electrician",
        "Plumber",
        "Carpenter",
        "AC Technician",
        "Welder",
        "Painter",
        "Mason",
        "Other",
      ];
      if (!trade || !allowedTrades.includes(trade)) {
        return NextResponse.json(
          { error: "Invalid trade selection." },
          { status: 400 }
        );
      }
    }

    // Simulate database write delay (300ms - 800ms)
    const delay = 300 + Math.random() * 500;
    await new Promise((resolve) => setTimeout(resolve, delay));

    // Return success
    return NextResponse.json(
      {
        success: true,
        message: "Successfully registered on the waitlist.",
        data: {
          type,
          name: name.trim(),
          phone: cleanPhone,
          city,
          trade: type === "karigar" ? trade : undefined,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to process request. Invalid JSON payload." },
      { status: 400 }
    );
  }
}
