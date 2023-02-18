import { remark } from "remark";
import remark2rehype from "remark-rehype";
import stringify from "rehype-stringify";
import rehypePrism from "rehype-prism";
import rehypeFormat from "rehype-format";

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remark2rehype)
    .use(rehypePrism)
    .use(rehypeFormat, { allowDangerousHtml: true })
    .use(stringify)
    .process(markdown);

  return result.toString();
}
