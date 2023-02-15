
export default async (request: Request, Context) => {
  const url = new URL(request.url);
  const response = await Context.next();
  console.log('Header from SSR:', response.headers.get('cache-control'))
  response.headers.set("Cache-Control", "private, max-age=0, must-revalidate")
  return response;
}