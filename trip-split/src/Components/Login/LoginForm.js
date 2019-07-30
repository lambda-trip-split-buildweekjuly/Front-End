import React from 'react';

function LoginForm() {

  return (
    <div className="login-container">
      <form onSubmit={null}>
        <label>Email
          <input value={null} name="name" onChange={null} type="email" />
        </label>
          <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm;