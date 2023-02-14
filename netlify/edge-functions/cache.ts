

export default async (Context) => {
  const response = await Context.next();
  response.headers.set("Cache-Control", "private, max-age=0, must-revalidate");
  return response;
}

export const config = { path: "/" }