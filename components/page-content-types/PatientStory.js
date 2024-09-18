import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

import Badge from "components/common/Badge";
import Breadcrumbs from "components/common/Breadcrumbs";
import Container from "components/common/Container";
import StoryblokImage from "components/storyblok/StoryblokImage";

const PatientStory = ({ blok }) => (
  <div className="my-20" {...storyblokEditable(blok)} key={blok._uid}>
    <Container>
      <div className="mb-6">
        <Breadcrumbs
          data={[
            { name: "Patient Stories", href: "/patient-stories/" },
            { name: blok.title, current: true },
          ]}
        />
      </div>
      <div className="border-stroke-light border-t py-12">
        <div className="grid grid-cols-12 items-start">
          <div className="sticky top-8 col-span-3 mr-12">
            <h2 className="text-md mb-6">Key Facts</h2>
            <div className="grid grid-cols-1 gap-6">
              {blok.key_facts?.map((fact) => (
                <div className="border-stroke-light border-b pb-4" key={fact._uid}>
                  <strong className="text-blue">{fact.title}:</strong>
                  <div className="prose text-small mb-4 mt-2">{render(fact.subtitle)}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="border-stroke-light col-span-9 border-l pl-12">
            <Badge className="mb-7">Patient Story</Badge>

            <h1 className="mb-12 text-3xl font-medium">{blok.title}</h1>
            <StoryblokImage className="rounded" image={blok.image} />
            <div className="mt-14">
              {blok.body?.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
    {/* TODO bottom sections */}
  </div>
);

export default PatientStory;
