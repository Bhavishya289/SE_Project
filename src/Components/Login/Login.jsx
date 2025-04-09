import React from 'react';
import { motion } from 'framer-motion';
import './Login.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value.trim();
    const password = e.target.password.value.trim();

    if (!username) {
      alert('Please enter your username.');
      return;
    }
    if (!password) {
      alert('Please enter your password.');
      return;
    }
    alert(`Username: ${username}\nPassword: ${password}`);
  };

  return (
    <div className="login-page-container">
      {/* Animated background elements */}
      <div className="bg-bubbles">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="bubble"
            initial={{ y: 0, x: Math.random() * 100 }}
            animate={{
              y: [0, -100, -200, -300, -400],
              x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25, Math.random() * 50 - 25, 0]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div 
        className='login-container'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Rest of your login form remains the same */}
        <motion.div 
          className='login-form'
          whileHover={{ scale: 1.02 }}
        >
          <h2 className='login-title'>Welcome Back</h2>
          <form className='form' onSubmit={handleSubmit}>
            <motion.div
              className='input-container'
              whileFocus={{ scale: 1.03 }}
            >
              <input 
                type='text' 
                name='username' 
                placeholder='Username' 
                className='input-field' 
                required
              />
            </motion.div>
            <motion.div
              className='input-container'
              whileFocus={{ scale: 1.03 }}
            >
              <input 
                type='password' 
                name='password' 
                placeholder='Password' 
                className='input-field' 
                required
              />
            </motion.div>
            
            <div className='form-options'>
              <label className='remember-me'>
                <input type='checkbox' id='remember'/>
                <span className='checkmark'></span>
                Remember me
              </label>
              <a href='#forgot' className='forgot-password'>Forgot password?</a>
            </div>
            
            <motion.button 
              type='submit' 
              className='login-button'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Login
            </motion.button>
          </form>
        </motion.div>
        
        <div className='register-link'>
          <p>Don't have an account?</p>
          <motion.a 
            href='#register' 
            className='register-cta'
            whileHover={{ scale: 1.05 }}
          >
            Create Account
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;