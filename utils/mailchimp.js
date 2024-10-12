import jsonp from "jsonp";
import toQueryString from "to-querystring";

const getAjaxUrl = (url) => url.replace("/post?", "/post-json?");

const MailchimpURL =
  "https://carterandgeorge.us14.list-manage.com/subscribe/post?u=df81ecbe7f0ad9672946e135e&amp;id=c00a72a4f0&amp;f_id=002965e0f0";

export const mailchimpSubscribe = (e, setStatus, setMessage) => {
  e.preventDefault();

  const data = { EMAIL: e.target.email?.value, LOCATION: e.target.location?.value };

  const params = toQueryString(data);
  let url = getAjaxUrl(MailchimpURL) + "&" + params;

  jsonp(
    url,
    {
      param: "c",
    },
    (err, data) => {
      console.log(data);
      console.log(err);
      if (err) {
        setStatus("error");
        setMessage("There was an error. Please try again later.");
        console.error(err);
      } else if (data.result !== "success") {
        setStatus("error");
        // Remove link tags from the error message -> add again in the future when the page is styled
        setMessage(data.msg?.split(" <a ")[0]?.replace(/&amp;/g, "&"));
        console.error(data.msg);
      } else {
        setStatus("success");
        setMessage(data.msg);
      }
    }
  );
};
