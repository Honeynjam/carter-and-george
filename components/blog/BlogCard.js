import cn from "classnames";

import { formatDate } from "utils/formatDate";

import Badge from "components/common/Badge";
import TextButton from "components/common/TextButton";
import { Heading } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";
import StoryblokLink from "components/storyblok/StoryblokLink";

const BlogCard = ({
  layout = "vertical",
  className = "",
  hideImage = false,
  data,
  size = "normal",
}) => {
  if (data?.content) {
    return (
      <StoryblokLink
        link={data}
        className={cn(className, "group h-full gap-6 @container hover:brightness-95", {
          "grid lg:grid-cols-2": layout === "horizontal",
          "flex flex-col": layout === "vertical",
        })}
      >
        {!hideImage ? (
          <div
            className={cn("relative", {
              "max-lg:aspect-[16/9]": layout === "horizontal",
              "aspect-[16/9]": layout === "vertical",
              "lg:h-[234px]": size === "normal",
              "h-[362px]": size === "large",
            })}
          >
            <StoryblokImage
              fill
              className={cn("h-full object-cover", {})}
              image={data.content.image}
            />
          </div>
        ) : null}

        <div className="flex flex-1 flex-col justify-between">
          <div>
            <div className="mb-4 flex flex-col items-start gap-4 @[260px]:flex-row @[260px]:items-center">
              {data.content.category?.content?.name ? (
                <Badge>{data.content.category?.content?.name}</Badge>
              ) : null}

              <span className="text-smaller font-semibold">
                {formatDate(data.content.published_at)}
              </span>
            </div>
            <div className="mb-6">
              <Heading size="large" level={3}>
                {data.content.title}
              </Heading>

              {layout === "vertical" ? (
                <p
                  className={cn("mt-2 text-small text-gray-secondary", {
                    "max-lg:hidden": hideImage,
                  })}
                >
                  {data.content.subtitle}
                </p>
              ) : null}
            </div>
          </div>
          <TextButton className="self-start">Read more</TextButton>
        </div>
      </StoryblokLink>
    );
  } else return null;
};

export default BlogCard;
