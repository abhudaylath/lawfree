import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState, useCallback } from 'react'
import { AIOutput } from '../../../../utils/schema';
import { db } from '../../../../utils/db';
import { eq } from 'drizzle-orm';

type AIOutputEntry = typeof AIOutput.$inferSelect;

function UsageTrack() {
    const { user } = useUser();
    const [totalWords, setTotalWords] = useState(0);
    const totalCredits = 5000;

    const GetData = useCallback(async () => {
        if (!user?.primaryEmailAddress?.emailAddress) return;
        const result: AIOutputEntry[] = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress));
        GetTotalUsage(result);
    }, [user]);

    useEffect(() => {
        GetData();
    }, [GetData]);

    const GetTotalUsage = (result: AIOutputEntry[]) => {
        let totalWords:number = 0;
        result.forEach(element => {
            totalWords += element.aiResponse ? element.aiResponse.split(" ").length : 0;
        });
        //console.log(totalWords);
        setTotalWords(totalWords);
    };

    return (
        <div>
            <div className='bg-blue-500 text-white rounded-lg p-3'>
                <h2 className='font-medium'>Credits</h2>
                <div className='h-2 bg-blue-300 w-full rounded-full mt-3'>
                    <div className='h-2 bg-white rounded-full' style={{ width: `${(totalWords / totalCredits) * 100}%` }}></div>
                </div>
                <h2 className='text-sm my-2'>{totalWords}/{totalCredits} Credits used</h2>
            </div>
            <Button className='w-full my-3 bg-blue-500 hover:bg-blue-700'>Upgrade</Button>
        </div>
    );
}

export default UsageTrack;
