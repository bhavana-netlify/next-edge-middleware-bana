
export default async (request: Request, Context) => {
  const url = new URL(request.url);
  const response = await Context.next();
  console.log('Header from SSR:', response.headers.get('cache-control'))
  console.log(`Adding a custom header to the response for ${url}`);
  response.headers.set("Cache-Control", "private, max-age=0, must-revalidate")
  console.log('Header from EF:', response.headers.get('cache-control'))
  return response;
}
