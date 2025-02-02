const { supabase } = require('../config/config');

// Get All Users
const getUsers = async () => {
  const { data, error } = await supabase.from('user_customer').select('*');
  if (error) throw error;
  return data;
};

// Create New User (Taking Location Directly from Frontend)
const addUser = async ({ name, phone, email, location, latitude, longitude }) => {
  const { data, error } = await supabase
    .from('user_customer')
    .insert({ name, phone, email, location, latitude, longitude })
    .select('*');

  if (error) throw error;
  return data;
};

module.exports = { getUsers, addUser };
