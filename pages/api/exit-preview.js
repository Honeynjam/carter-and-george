export default async function exit(req, res) {
  const { searchParams } = new URL(`https://www.carterandgeorge.co.uk/${req.url}`);
  const path = searchParams.has("path") ? searchParams.get("path") : "/";

  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData();

  // set the cookies to None
  const cookies = res.getHeader("Set-Cookie");
  res.setHeader(
    "Set-Cookie",
    cookies.map((cookie) => cookie.replace("SameSite=Lax", "SameSite=None;Secure"))
  );

  res.redirect(path);
}
