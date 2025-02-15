import { pgTable, serial, text, varchar, json } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("aiOutput", {
    id: serial("id").primaryKey(),
    formData: json("formData"), 
    aiResponse: text("aiResponse"),
    temptateSlug: varchar("temptateSlug"),
    createdBy: varchar("createdBy"),
    createdAt: varchar("createdAt"),
});
