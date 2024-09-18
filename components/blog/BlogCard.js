import { CaretRight } from "@phosphor-icons/react";
import cn from "classnames";

import Badge from "components/common/Badge";
import StoryblokImage from "components/storyblok/StoryblokImage";
import StoryblokLink from "components/storyblok/StoryblokLink";

const BlogCard = ({ className = "", hideImage = false, data }) => {
  return (
    <StoryblokLink
      link={data}
      className={cn(className, "grid grid-cols-1 gap-6 hover:brightness-95")}
    >
      {!hideImage ? <StoryblokImage className="aspect-[16/9]" image={data.content.image} /> : null}

      <div>
        <div className="mb-4 flex items-center gap-4">
          {data.content.category?.content?.name ? (
            <Badge>{data.content.category?.content?.name}</Badge>
          ) : null}

          <span className="text-smaller font-semibold">{data.content.read_time} min read</span>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold">{data.content.title}</h3>
          <p className="text-gray-secondary text-small">{data.content.subtitle}</p>
        </div>
        <p className="text-button flex items-center gap-2.5 font-medium uppercase">
          <span>Read More</span> <CaretRight className="h-4 w-4" />
        </p>
      </div>
    </StoryblokLink>
  );
};

export default BlogCard;
