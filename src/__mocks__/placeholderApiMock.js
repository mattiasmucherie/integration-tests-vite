import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/photos/1", (req, res, ctx) => {
    return res(
      ctx.json({
        url: "https://myfakecloud.com/photo1",
        title: "photo 1",
      })
    );
  }),

  rest.get("https://jsonplaceholder.typicode.com/photos/2", (req, res, ctx) => {
    return res(
      ctx.json({
        url: "https://myfakecloud.com/photo2",
        title: "photo 2",
      })
    );
  }),
];
