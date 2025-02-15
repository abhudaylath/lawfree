/**@type {import("drizzle-kit").Config}*/

export default config= {
    schema:'./utils/schema.tsx',
    dialect:'postgresql',
    dbCredentials:{
        url:'postgresql://neondb_owner:npg_oNqXUtm3MC6j@ep-red-snowflake-a1l0hpvm-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require'
    }
}