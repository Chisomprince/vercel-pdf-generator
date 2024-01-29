import { Card, CardContent } from "@/components/ui/card";
import { IconType } from "react-icons";

type CreateResumeCardType = {
  title: string;
  description: string;
  icon: IconType;
};
export default function CreateResumeCard(props: CreateResumeCardType) {
  const { title, description } = props;

  return (
    <>
      <Card>
        <CardContent className="pt-6 lg:pt-12 lg:pb-12 h-full">
          <div className="space-y-0.5 flex flex-col items-center">
            <props.icon className="w-8 h-8 lg:w-12 lg:h-12 mb-2 text-orange-500" />
            <h2 className="lg:text-lg text-base text-center font-bold tracking-tight">
              {title}
            </h2>
            <p className="text-muted-foreground  text-sm lg:text-base text-center">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
