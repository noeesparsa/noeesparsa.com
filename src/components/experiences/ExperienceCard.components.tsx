import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Item, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "../ui/item";

const ExperienceCard = () => {
  return (
    <Item className="p-0 bg-white" variant="default">
      <ItemMedia variant="image">
        <Avatar className="rounded-md size-15">
          <AvatarImage src="/decathlon_logo.png" />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Decathlon - Sports Retailer</ItemTitle>
        <ItemDescription>Fullstack Software Engineer </ItemDescription>
      </ItemContent>
      <ItemContent>
        <ItemDescription>2021 - Today</ItemDescription>
      </ItemContent>
    </Item>
  );
};

export default ExperienceCard;
