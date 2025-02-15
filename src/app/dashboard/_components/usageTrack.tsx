import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import React, { useEffect, useCallback, useContext } from 'react';
import { AIOutput } from '../../../../utils/schema';
import { db } from '../../../../utils/db';
import { eq } from 'drizzle-orm';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';

type AIOutputEntry = typeof AIOutput.$inferSelect;

function UsageTrack() {
    const { user } = useUser();
    const context = useContext(TotalUsageContext);
    
    if (!context) {
        throw new Error("UsageTrack must be used within a TotalUsageContext.Provider");
    }

    const { totalUsage, setTotalUsage } = context;
    const totalCredits = 2000;

    const GetTotalUsage = useCallback((result: AIOutputEntry[]) => {
        let totalWord = 0;
        result.forEach(element => {
            totalWord += element.aiResponse ? element.aiResponse.split(" ").length : 0;
        });
        if(totalWord>=2000){
            totalWord=2000
        }
        setTotalUsage(totalWord);
        
    }, [setTotalUsage]);

    const GetData = useCallback(async () => {
        if (!user?.primaryEmailAddress?.emailAddress) return;
        const result: AIOutputEntry[] = await db.select()
            .from(AIOutput)
            .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));
        GetTotalUsage(result);
    }, [user, GetTotalUsage]);

    useEffect(() => {
        GetData();
    }, [GetData]);

    if (!user || !user.primaryEmailAddress?.emailAddress) {
        return <p>Loading user data...</p>; // Prevents undefined errors
    }

    return (
        <div>
            <div className="bg-blue-500 text-white rounded-lg p-3">
                <h2 className="font-medium">Credits</h2>
                <div className="h-2 bg-blue-300 w-full rounded-full mt-3">
                    <div className="h-2 bg-white rounded-full" style={{ width: `${(totalUsage / totalCredits) * 100}%` }}></div>
                </div>
                <h2 className="text-sm my-2">{totalUsage}/{totalCredits} Credits used</h2>
            </div>
            <Button className="w-full my-3 bg-blue-500 hover:bg-blue-700">Upgrade</Button>
        </div>
    );
}

export default UsageTrack;
