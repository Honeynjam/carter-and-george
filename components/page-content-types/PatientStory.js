import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

import Badge from "components/common/Badge";
import Breadcrumbs from "components/common/Breadcrumbs";
import Container from "components/common/Container";
import { Heading } from "components/common/Typography";
import StoryblokImage from "components/storyblok/StoryblokImage";

const PatientStory = ({ blok }) => (
  <div className="mt-20" {...storyblokEditable(blok)} key={blok._uid}>
    <Container className="mb-20">
      <div className="mb-6">
        <Breadcrumbs
          data={[
            { name: "Patient Stories", href: "/patient-stories/" },
            { name: blok.title, current: true },
          ]}
        />
      </div>
      <div className="md:border-t md:border-stroke-light md:py-12">
        <div className="grid items-start md:grid-cols-12">
          <div className="order-2 max-md:mt-12 md:sticky md:top-32 md:order-1 md:col-span-4 md:mr-12 lg:col-span-3">
            <h2 className="text-large mb-6 font-semibold md:mb-12">Key Facts</h2>
            <div className="grid grid-cols-1 gap-6">
              {blok.key_facts?.map((fact) => (
                <div className="border-b border-stroke-light pb-4" key={fact._uid}>
                  <strong className="text-blue">{fact.title}:</strong>
                  <div className="prose mb-4 mt-2 text-small">{render(fact.subtitle)}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 md:col-span-8 md:border-l md:border-stroke-light md:pl-12 lg:col-span-9">
            <Badge className="mb-7">Patient Story</Badge>

            <Heading className="mb-5 lg:mb-12" size="3xl" level={1}>
              {blok.title}
            </Heading>
            <StoryblokImage
              className="aspect-[16/9] w-full object-contain object-left"
              image={blok.image}
            />
            <div className="mt-14">
              {blok.body?.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
    {blok.bottom_sections?.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>
);

export default PatientStory;
