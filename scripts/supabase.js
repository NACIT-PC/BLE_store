import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://mtrxvdvifoxsfhyhcyzc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im10cnh2ZHZpZm94c2ZoeWhjeXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE0OTQ3NjcsImV4cCI6MjA0NzA3MDc2N30.wLZp0pSsQrZaxaVHxn3QLF300B1CRwJNcnrPIIJZoc4')


async function getProduct() {
    const { data: Products, error } = await supabase
        .from('Products')
        .select("name,uuid,category,cost,description").eq("uuid", '7794dda5-80ef-462e-81de-ba6915e56100')

    console.log(Products)
}

await getProduct()