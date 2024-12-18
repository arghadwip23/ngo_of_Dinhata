import Swal from 'sweetalert2';
import withReactContent from  'sweetalert2-react-content';


const SERVICE_WORKER_FILE_PATH = './sw.js';
const MySwal = withReactContent(Swal);


export function notificationUnsupported() {
  let unsupported = false;
  if (
    !('serviceWorker' in navigator) ||
    !('PushManager' in window) ||
    !('showNotification' in ServiceWorkerRegistration.prototype)
  ) {
    unsupported = true;
  }
  return unsupported;
}

export function checkPermissionStateAndAct(onSubscribe) {
  const state = Notification.permission;
  switch (state) {
    case 'denied':
      break;
    case 'granted':
      registerAndSubscribe(onSubscribe);
      break;
    case 'default':
      MySwal.fire({
        text:"আমাদের এনজিওর গুরুত্বপূর্ণ আপডেট, ইভেন্ট এবং কার্যক্রমের তথ্য আপনার কাছে পৌঁছে দেওয়ার জন্য আমরা আপনার অনুমতি চাই। দয়া করে বিজ্ঞপ্তি গ্রহণের অনুমতি দিন। আপনি চাইলে যেকোনো সময় এটি বন্ধ করতে পারবেন।",
        showDenyButton: true,
        customClass: {
        confirmButton: 'bg-yellow-500' // Add your custom class here
  }
      }).then((e)=>{
        if(e.isConfirmed){
          registerAndSubscribe(onSubscribe);
        }
      })
      break;
  }
}

export function subscribe(onSubscribe) {
  navigator.serviceWorker.ready
    .then(function (registration) {
      return registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
      });
    })
    .then(function (subscription) {
      console.info('Created subscription Object: ', subscription.toJSON());
      submitSubscription(subscription).then(function () {
        onSubscribe(subscription);
      });
    })
    .catch(function (e) {
      console.error('Failed to subscribe cause of: ', e);
    });
}

export function submitSubscription(subscription) {
  const endpointUrl = '/api/web-push/subscription';
  return fetch(endpointUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ subscription }),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (result) {
      console.log(result);
    });
}

export function registerAndSubscribe(onSubscribe) {
  navigator.serviceWorker
    .register(SERVICE_WORKER_FILE_PATH)
    .then(function () {
      return subscribe(onSubscribe);
    })
    .catch(function (e) {
      console.error('Failed to register service-worker: ', e);
    });
}

export async function sendWebPush(message) {
  const endPointUrl = '/api/web-push/send';
  const pushBody = {
    title: message.title || 'Test Push',
    body:  message.message || 'This is a test push message',
    image: '/group6.png',
    icon: 'https://ztmiuwqaannhjkbpxfue.supabase.co/storage/v1/object/public/gallery/Mask%20group.png',
    url: 'https://google.com',
  };

  let req = await fetch(endPointUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pushBody),
  });
    let res = await req.json();
    if (res.ok){
       // tost.success("notification sent to all");
       console.log(res);
       
    }else{
       // tost.error(res.message);
        console.log(res);
        
    }
}
