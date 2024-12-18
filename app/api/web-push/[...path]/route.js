import webpush from 'web-push';
import clientPromise from '@/lib/mongodb';
import { NextResponse } from 'next/server';

webpush.setVapidDetails(
  'mailto:mail@example.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
  process.env.NEXT_PUBLIC_VAPID_PRIVATE_KEY,
);

let subscription;
const client = await clientPromise;
const db = client.db("gallery");
const collection = db.collection("notification");


export async function POST(request) {
  const { pathname } = new URL(request.url);
  switch (pathname) {
    case '/api/web-push/subscription':
      return setSubscription(request);
    case '/api/web-push/send':
      return sendPush(request);
    default:
      return notFoundApi();
  }
}

async function setSubscription(request) {
  const body = await request.json();
  subscription = body.subscription;
  try {
    let set = await collection.insertOne(subscription);
   // return new Response(JSON.stringify({ message: 'Subscription set.' }), {});
   return NextResponse.json({
    ok: true,
    message: "subscription added",
    status:200
   })
  } catch (error) {
    return NextResponse.json({
        ok:false,
        message:"something went wrong",
        status:500
    })
  }
 
}

async function sendPush(request) {
 // console.log(subscription, 'subs');
  try {
    const body = await request.json();
    const pushPayload = JSON.stringify(body);
    const subscriptions = await collection.find().toArray();
    await subscriptions.forEach(subs => {
      webpush.sendNotification(subs, pushPayload);
    });

    //

    return NextResponse.json({
      ok:true,
      message:"push sent to all",
      status:200
    }); 
  } catch (error) {
    return NextResponse.json({
        ok:false,
        status:500,
        message:error
    })
  }
  
}

async function notFoundApi() {
  return new Response(JSON.stringify({ error: 'Invalid endpoint' }), {
    headers: { 'Content-Type': 'application/json' },
    status: 404,
  });
}