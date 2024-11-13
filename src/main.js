import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://mtrxvdvifoxsfhyhcyzc.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey)

async function getProduct(uuid) {
	try {
		const {data: Products, error} = await supabase
			.from('Products')
			.select("name,uuid,category,cost,description").eq("uuid", uuid)
		
		console.log(Products)
		
		return Products[0];
	} catch (e) {
		throw e;
	}
}

export {supabase, getProduct}