import { Card, CardContent } from "@/components/ui/card";
import { GoDotFill } from "react-icons/go";

export default function ResumeTips() {
  return (
    <Card className="border-none">
      <CardContent className="space-y-4 pt-12 pb-12">
        <div className="w-40 h-40 bg-muted rounded mx-auto"></div>
        <h2 className="text-center mt-1 font-medium">Personal Tips</h2>
        <ul className="text-sm space-y-4">
          <li className="flex gap-2">
            <GoDotFill className="text-orange-500 w-4 min-w-[16px] h-4" />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </li>
          <li className="flex gap-2">
            <GoDotFill className="text-orange-500 w-4 min-w-[16px] h-4" />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </li>
          <li className="flex gap-2">
            <GoDotFill className="text-orange-500 w-4 min-w-[16px] h-4" />
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
}
