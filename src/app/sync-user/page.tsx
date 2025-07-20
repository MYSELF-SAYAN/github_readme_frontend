import React from 'react';
import { auth, clerkClient } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import ButtonRedirect from '@/components/Home/ButtonRedirect';
const Sync = async () => {
    const { userId } = await auth();
    if (!userId) {
        return <div>Please sign in to sync your user data.</div>;
    }
    const Client = await clerkClient();
    const user = await Client.users.getUser(userId);
    const syncUserData = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/sync-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: user.id,
                username: user.username,
                email: user.emailAddresses[0]?.emailAddress,
                firstName: user.firstName,
                lastName: user.lastName,
                imageUrl: user.imageUrl,
                // password: user.password, // Ensure you handle passwords securely
            }),
        });
        if (response.ok) {
            redirect("/");
        } else {
            console.error("Error syncing user data:", response.statusText);
        }
        redirect("/");
    };
    syncUserData().catch((error) => {
        console.error("Error syncing user data:", error);
    });

    return (
        <div>
            {/* <Button onClick={redirect("/")}>Sync User Data</Button> */}
            <h1>Syncing user data...</h1>
            <ButtonRedirect />
        </div>
    );
}

export default Sync;

