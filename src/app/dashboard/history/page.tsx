"use client";

import React, { useEffect, useState } from "react";
import { db } from "../../../../utils/db";
import { AIOutput } from "../../../../utils/schema";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { useClipboard } from "@mantine/hooks";
import { eq } from "drizzle-orm";
import legalAiServices from "@/app/(data)/template";
import Image from "next/image";

type AIOutputEntry = typeof AIOutput.$inferSelect;

const HistoryPage = () => {
  const { user } = useUser();
  const [history, setHistory] = useState<AIOutputEntry[]>([]);
  const clipboard = useClipboard({ timeout: 1000 });

  useEffect(() => {
    if (!user) return;

    const fetchHistory = async () => {
      const email = user?.primaryEmailAddress?.emailAddress || "";
      try {
        const result = await db
          .select()
          .from(AIOutput)
          .where(eq(AIOutput.createdBy, email))
          .execute();

        setHistory(result);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, [user]);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold">History</h2>
      <p className="text-gray-500 mb-4">
        Search your previously generated AI content
      </p>
      <div className="mt-5 bg-white shadow-md rounded-lg overflow-x-scroll">
        <table className="min-w-[600px] w-full border-collapse">
          <thead>
            <tr className="bg-gray-300 text-left">
              <th className="p-2 text-xs sm:text-sm">TEMPLATE</th>
              <th className="p-2 text-xs sm:text-sm">AI RESP</th>
              <th className="p-2 text-xs sm:text-sm">DATE</th>
              <th className="p-2 text-xs sm:text-sm">WORDS</th>
              <th className="p-2 text-xs sm:text-sm">COPY</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry) => {
              const template =
                legalAiServices.find(
                  (item) => item.slug === entry.temptateSlug
                )?.name || "Unknown";
              const icon =
                legalAiServices.find(
                  (item) => item.slug === entry.temptateSlug
                )?.icon || "";
              return (
                <tr key={entry.id} className="border-t">
                  <td className="p-2 flex items-center gap-2">
                    <Image src={icon} width={14} height={14} alt="icon" />
                    <span className="font-medium text-xs sm:text-sm">
                      {template}
                    </span>
                  </td>
                  <td className="p-2 text-gray-600 truncate max-w-xs text-xs sm:text-sm">
                    {entry.aiResponse?.substring(0, 100)}...
                  </td>
                  <td className="p-2 text-xs sm:text-sm">{entry.createdAt}</td>
                  <td className="p-2 text-xs sm:text-sm">
                    {entry.aiResponse?.split(" ").length}
                  </td>
                  <td className="p-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => clipboard.copy(entry.aiResponse)}
                    >
                      {clipboard.copied ? (
                        'Copied'
                      ) : (
                        <Copy size={16} />
                      )}
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryPage;
