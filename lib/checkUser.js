import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  const user = await currentUser();
  if (!user) return null;
  try {
    const loggedIn = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });
    if (loggedIn) return loggedIn;
    const name = `${user.firstName} ${user.lastName}`;
    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name: name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });
    return newUser;
  } catch (err) {
    console.log(err.message);
  }
};
