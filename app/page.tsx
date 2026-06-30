import ContentCard from "@/components/ContentCard";
import ContentBlock from "@/components/ContentBlock";

export default function Home() {
  return (
    <main className="flex flex-col gap-10">
      
      <ContentBlock title="next-canvas by Pavent">
        Run the steps below to get startedd
      </ContentBlock>
      
            <ContentCard
        blockTitle="INSTALL the COPY and RUN"
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