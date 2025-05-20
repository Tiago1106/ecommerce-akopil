import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Skeleton } from "../ui/skeleton";

interface AccordionDescriptionProps {
  description: string | undefined;
  isLoading: boolean;
}

export function AccordionDescription({ description, isLoading }: AccordionDescriptionProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <Skeleton className="w-full h-4" />
      </div>
    );
  }
  return (
    <Accordion
      type="single"
      className="w-full border-1 px-4 rounded-lg"
      collapsible
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <span className="font-medium text-gray-700">Descrição</span>
        </AccordionTrigger>
        <AccordionContent>
          <p className="text-gray-500">{description}</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}