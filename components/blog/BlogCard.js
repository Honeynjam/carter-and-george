import { CaretRight } from "@phosphor-icons/react/dist/ssr/CaretRight";
import cn from "classnames";

import Badge from "components/common/Badge";
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
  if (data.content) {
    return (
      <StoryblokLink
        link={data}
        className={cn(className, "@container h-full gap-6 hover:brightness-95", {
          "grid grid-cols-2": layout === "horizontal",
          "flex flex-col": layout === "vertical",
        })}
      >
        {!hideImage ? (
          <div
            className={cn("relative", {
              "aspect-square": layout === "horizontal",
              "aspect-[16/9]": layout === "vertical",
              "h-[234px]": size === "normal",
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
            <div className="@[260px]:flex-row @[260px]:items-center mb-4 flex flex-col items-start gap-4">
              {data.content.category?.content?.name ? (
                <Badge>{data.content.category?.content?.name}</Badge>
              ) : null}

              <span className="text-smaller font-semibold">{data.content.read_time} min read</span>
            </div>
            <div className="mb-6">
              <Heading size="large" level={3}>
                {data.content.title}
              </Heading>

              {layout === "vertical" ? (
                <p className="mt-2 text-small text-gray-secondary">{data.content.subtitle}</p>
              ) : null}
            </div>
          </div>
          <p className="font-petite-caps flex items-center gap-2.5 text-button font-medium">
            <span>Read More</span> <CaretRight className="h-4 w-4" />
          </p>
        </div>
      </StoryblokLink>
    );
  } else return null;
};

export default BlogCard;
