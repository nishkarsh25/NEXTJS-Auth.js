import User from "@/app/(models)/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;

    //Confirm data exists
    if (!userData?.email || !userData.password) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // check for duplicate emails
    const duplicate = await User.findOne({ email: userData.email })
      .lean()
      .exec();

    if (duplicate) {
      return NextResponse.json({ message: "Duplicate Email" }, { status: 409 });
    }

    

    
    
  } catch (error) {
    
  }
}
