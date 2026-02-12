/**
 * Dev-only handler so the contact form shows success when testing locally.
 * On Netlify, the form POSTs to "/" and Netlify Forms handles it.
 */
export async function POST(request: Request) {
  // Consume body so the request is valid (Netlify doesn't use this route)
  await request.formData();
  return new Response(null, { status: 200 });
}
