// import { remark } from "remark";
// import html from "remark-html";
// import { prism } from "remark-prism";
// import rehypeHighlight from "rehype-highlight";
// import rehypeStringify from "rehype-stringify";
// import stringify from "remark-stringify";

// export default async function markdownToHtml(markdown) {
//   const result = await remark()
//     .use(prism)
//     .use(stringify)
//     .use(rehypeHighlight)
//     .use(rehypeStringify)
//     .process(markdown);
//   const newline = result.value.replace(/\n/g, "<br/>");
//   console.log(newline);
//   // const hi = result.value.split("\n").map((p) => {
//   //   return p + "<br/>";
//   // });

//   return newline;
// }
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
