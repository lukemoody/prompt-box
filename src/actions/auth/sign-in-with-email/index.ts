"use server";
import mockUserDB from "@/mock-data/users-db.json";

export const signInWithEmail = async (email: string) => {
  // Mock auth login
  const doesExist = mockUserDB.find((user) => user.email === email);

  if (doesExist) {
    return { status: 200, message: "User authenticated", data: doesExist };
  }

  // Return 401 to prevent user enumeration (not revealing if email exists)
  return { status: 401, message: "Invalid email or password", data: null };
};
