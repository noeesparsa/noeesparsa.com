import type { FC } from "react";
import CardBadge from "../cardBadge/CardBadge.component";
import Text from "../Text/Text.component";

export type AboutProps = {};

export const About: FC<Readonly<AboutProps>> = () => {
  return (
    <div className="flex h-full w-full flex-col justify-between">
      <CardBadge>A propos</CardBadge>
      <div className="flex flex-col justify-start text-left font-sen">
        <Text>
          Salut 👋 Moi c'est <span className="font-extrabold text-2xl text-green-500">Noé</span> －
        </Text>
        <Text>
          <span className="font-bold text-2xl text-gray-600">Software Engineer Fullstack</span>
        </Text>
        <div />
        <Text>Ensemble, donnons vie à vos projets web avec passion et précision.</Text>
      </div>
    </div>
  );
};

export default About;
