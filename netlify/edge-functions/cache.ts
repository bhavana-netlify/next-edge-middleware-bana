

export default async (request: Request, Context) => {
  const url = new URL(request.url);
  const response = await Context.next();
  response.headers.set("Cache-Control", "private, max-age=0, must-revalidate");
  console.log(`Adding a custom header to the response for ${url}`);
  return response;
}



export const config = { path: "/" }