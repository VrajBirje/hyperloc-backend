const { supabase } = require('../config/config');  // Assuming supabase is correctly configured

// Get All Vendors
const getVendors = async () => {
  const { data, error } = await supabase.from('user_vendor').select('*');
  if (error) throw error;
  return data;
};

// Add a New Vendor
const addVendor = async ({ id, business_name, business_type, phone, email, location, latitude, longitude }) => {
  const { data, error } = await supabase
    .from('user_vendor')
    .insert({ id, business_name, business_type, phone, email, location, latitude, longitude })
    .select('*');
  
  if (error) throw error;
  return data;
};

module.exports = { getVendors, addVendor };
