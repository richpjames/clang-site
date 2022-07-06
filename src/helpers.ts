import showdown from "showdown";

type APIRoute = "welcome-slide";

export const fetchCopy = async (copyFor: APIRoute) => {
  const converter = new showdown.Converter();

  let html: string;

  await fetch(`https://clang-server.herokuapp.com/api/${copyFor}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((resJson) => resJson.data.attributes?.text)
    .then((md) => {
      html = converter.makeHtml(md);
    });

  return html;
};
