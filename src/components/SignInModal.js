import React, { useState } from 'react';

function SignInModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Sign In</button>
      {isOpen && (
        <div className="modal">
          <form>
            <label>Username</label>
            <input type="text" />
            <label>Password</label>
            <input type="password" />
            <button type="submit">Sign In</button>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </form>
        </div>
      )}
    </>
  );
}

export default SignInModal;
