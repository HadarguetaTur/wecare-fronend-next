import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/action/gerCurrentUser';

export async function POST(request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return new Response('Unauthorized', { status: 401 });
  }

  const body = await request.json();
  const {
    category,
    location,
    imageSrc,
    meetingPrice,
    isReceiveHealthInsuranceFund,
    isReceiveHealthInsuranceCompanies,
    authority,
    instagramLink,
    facebookLink,
    contactEmail,
    phoneNumber,
    title,
    about,
    description,
    availability,
  } = body;

  Object.keys(body).forEach((value) => {
    if (!body[value]) {
      return new Response('Bad Request', { status: 400 }); 
    }
  });

  if (isNaN(parseFloat(meetingPrice))) {
    return new Response('Bad Request', { status: 400 }); 
  }

  try {
    const listing = await prisma.listing.create({
      data: {
        title,
        description,
        imageSrc,
        category,
        locationValue: location.value,
        meetingPrice: parseInt(meetingPrice, 10),
        user: { connect: { id: currentUser.id } },
        about,
        phoneNumber,
        authority,
        instagramLink,
        facebookLink,
        contactEmail,
        isReceiveHealthInsuranceFund:false,
        isReceiveHealthInsuranceCompanies:false,
        availability,
      },
    });

    return new Response(JSON.stringify(listing), { status: 200 }); // Return a success response with a 200 status code
  } catch (error) {
    console.error(error);
    return new Response('Internal Server Error', { status: 500 }); // Return an error response with a 500 status code
  }
}