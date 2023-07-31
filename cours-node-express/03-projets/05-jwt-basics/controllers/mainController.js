const login = async (req, res) => {
  res.send('login');
};

const dashboard = async (req, res) => {
  res.send('dashboard');
};

module.exports = { login, dashboard };
