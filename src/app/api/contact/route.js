import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, subject, message } = body;

    // 1. Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address format." },
        { status: 400 }
      );
    }

    // 2. Data Preparation
    const enquiry = {
      id: `enq_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : "N/A",
      service: service || subject || "General Enquiry",
      message: message.trim(),
    };

    // 3. Save to enquiries.json
    // Store in a safe directory within workspace
    const filePath = path.join(process.cwd(), "enquiries.json");
    let currentEnquiries = [];

    try {
      const fileData = await fs.readFile(filePath, "utf-8");
      currentEnquiries = JSON.parse(fileData);
    } catch (readError) {
      // File doesn't exist yet, we will create a new list
    }

    currentEnquiries.push(enquiry);
    await fs.writeFile(filePath, JSON.stringify(currentEnquiries, null, 2), "utf-8");

    console.log("Enquiry successfully recorded on server:", enquiry);

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry successfully recorded.",
        enquiryId: enquiry.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Contact Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error. Failed to process your enquiry." },
      { status: 500 }
    );
  }
}
