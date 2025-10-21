import type { FC } from "react";
import Text from "../typography/text/Text.component";
import Title from "../typography/title/Title.component";

export const Header: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <img alt="avatar" className="md:h-30 h-20 w-auto rounded-2xl" src="/me_square.png" />
        <div className="flex flex-col items-start">
          <div className="flex flex-col items-start justify-end h-full">
            <Title level={1}>Noé</Title>
            <Title level={1}>Esparsa</Title>
          </div>
        </div>
      </div>
      <Text className="w-full md:w-1/2">
        I'm a full-stack software engineer who loves turning ideas into clean, intuitive, and lively front-end
        experiences.
      </Text>
    </div>
  );
};

export default Header;
