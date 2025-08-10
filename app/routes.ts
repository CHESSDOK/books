import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("signup", "routes/signup.tsx"),
  route("login", "routes/login.tsx"),
  route("books", "routes/books.tsx"),
  route("category", "routes/category.tsx"),
  route("authors", "routes/authors.tsx"),
] satisfies RouteConfig;
