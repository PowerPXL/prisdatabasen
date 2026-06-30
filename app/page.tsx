import ContentCard from "@/components/ContentCard";
import ContentBlock from "@/components/ContentBlock";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      
      <ContentBlock title="**Prisdatabasen håller koll på hushållsvarornas priser**">
        Prisdatabasen hjälper dig att förstå vad en vara faktiskt är värd, inte bara vad butiken säger att du sparar. När du ser ett rea-pris kan du jämföra det mot ett verkligt normalpris och se hur stor rabatten egentligen är. Är det ett riktigt fynd, eller bara ett högt ordinarie pris som sänkts? Med Prisdatabasen kan du snabbt upptäcka om exempelvis toalettpapper för 70 kr/kg är ett bra köp eller om du betalar mer än normalt.

      </ContentBlock>
      
            <ContentCard
        blockTitle="Dagens pris"
        items={[
          {
            title: "Install",
            text: "npx create-next-app@latest",
          },
          {
            title: "COPY",
            text: "/components/\n\n/app/layout.tsx\n/app/page.tsx\n/app/globals.css\n\n/app/faq/\n/app/kontakt/\n/app/login/\n\n/lib/ ",
          },
          {
            title: "RUN",
            text: "npm run dev",
          },
        ]}
      />

    </main>
  );
}