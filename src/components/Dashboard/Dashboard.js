import React, {useCallback} from 'react';
import {useNavigate} from 'react-router-dom';


export default function Dashboard() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/members', {replace: true}), [navigate]);
  
  return(
    <div>
      <h2>Dashboard</h2>
      <button type="button" onClick={handleOnClick}>
        Add Member
      </button>    
    </div>
  );
}
