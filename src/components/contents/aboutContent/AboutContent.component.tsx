import type { FC } from "react";

import { Text } from "../../atoms/text/Text.component";
import { Title } from "../../atoms/title/Title.component";

const AboutContent: FC = () => {
  return (
    <div className="text-left flex flex-col gap-2 content-end">
      <Title additionalClasses="pb-2">Hi I&#39;m Noé,</Title>
      <Text additionalClasses="flex flex-col gap-2 md:gap-0">
        <span>
          Fullstack software engineer based in Lille 🇫🇷 and currently working at Decathlon.
        </span>
        <span>
          Passionate about frontend — where design meets performance and UX. I love building useful,
          thoughtful products.
        </span>
      </Text>
    </div>
  );
};

export default AboutContent;
