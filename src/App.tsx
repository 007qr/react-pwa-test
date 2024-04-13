import { useEffect } from 'react'
import {generateToken, messaging} from './firebase.ts';
import { onMessage } from 'firebase/messaging';
import './App.css'
import { toast } from 'sonner';

function App() {
  useEffect(() => {
    generateToken();
    onMessage(messaging, (payload) => {
      toast(payload.notification.title);
    })
  }, []);
  return (
    <>
      
      <button id='button'>
        Enable Notification
      </button>
    </>
  )
}

export default App
