const { supabase } = require('../config/config');  // Assuming supabase is correctly configured

// Get All Deliverymen
const getDeliverymen = async () => {
  const { data, error } = await supabase.from('user_deliveryman').select('*');
  if (error) throw error;
  return data;
};

// Add a New Deliveryman
const addDeliveryman = async ({ id, name, phone, email, location, latitude, longitude }) => {
  const { data, error } = await supabase
    .from('user_deliveryman')
    .insert({ id, name, phone, email, location, latitude, longitude })
    .select('*');
  
  if (error) throw error;
  return data;
};

module.exports = { getDeliverymen, addDeliveryman };
