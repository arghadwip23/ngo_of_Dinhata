'use client';
import { useEffect, useState } from 'react';
//import styles from './page.module.css';
import {
  checkPermissionStateAndAct,
  notificationUnsupported,
  registerAndSubscribe,
  sendWebPush,
} from '../Push';

export default function Push({tost}) {
  const [unsupported, setUnsupported] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [message, setMessage] = useState(null);
  useEffect(() => {
    const isUnsupported = notificationUnsupported();
    setUnsupported(isUnsupported);
    if (isUnsupported) {
      return;
    }
    checkPermissionStateAndAct(setSubscription);
  }, []);

  return (
    <main className='bg-red-200 p-4'>
      <div className="text-center">
        <button
          disabled={unsupported}
          onClick={() => registerAndSubscribe(setSubscription)}
          className="border border-amber-300 p-4 bg-yellow-500">
          {unsupported
            ? 'Notification Unsupported'
            : subscription
              ? 'Notification allowed'
              : 'Allow notification'}
        </button>
        {subscription ? (
          <>
            <input
              placeholder={'Type push message ...'}
              style={{ marginTop: '5rem' }}
              value={message ?? ''}
              onChange={e => setMessage(e.target.value)}
            />
            <button onClick={() => sendWebPush(message,tost)} >Test Web Push</button>
          </>
        ) : null}
        {/* <div className="text-blue-700">
          <span>Push subscription:</span>
        </div>
        <code className="text-center">
          {subscription
            ? JSON.stringify(subscription?.toJSON(), undefined, 2)
            : 'There is no subscription'}
        </code> */}
      </div>
    </main>
  );
}