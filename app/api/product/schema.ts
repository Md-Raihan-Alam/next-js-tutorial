import { deflate } from "zlib";
import { z } from "zod";

// z.object({
//     name:z.string().min(3),
//     email:z.string().email(),
//     age:z.number()
// })
const schema = z.object({
  name: z.string().min(3),
  price: z.number().refine((n) => {
    return (
      !z.number().int().safeParse(n).success &&
      z.number().finite().safeParse(n).success
    );
  }, "should not be an integer"),
});

export default schema;
