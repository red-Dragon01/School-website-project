import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { ownerId, password } = await request.json();

    if (
      ownerId !== "schoolowner" ||
      password !== "Bright@2026"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid Owner ID or Password",
        },
        { status: 401 }
      );
    }

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
    });

    response.cookies.set("school_owner_auth", "authenticated", {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8,
    });

    return response;

  } catch (error) {
    console.error("OWNER LOGIN ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Login request failed",
      },
      { status: 500 }
    );
  }
}

const handleLogin = async (e) => {
  e.preventDefault();

  setError("");
  setLoading(true);

  try {
    const response = await fetch("/api/owner-login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ownerId: ownerId.trim(),
        password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message || "Invalid Owner ID or Password");
      setLoading(false);
      return;
    }

    if (data.success) {
      window.location.href = "/admin/accounts";
    }

  } catch (error) {
    console.error(error);
    setError("Unable to connect to login server.");
    setLoading(false);
  }
};