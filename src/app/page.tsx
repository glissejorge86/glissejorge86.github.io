import { Hero } from "@/components/Hero";
import { Speakers } from "@/components/Speakers";
import { Organizer } from "@/components/Organizer";
import { Sponsors } from "@/components/Sponsors";
import { Collage } from "@/components/Collage";
import { Agenda } from "@/components/Agenda";
import { Site } from "@/components/Site";

export default function Home() {
  return (
    <div id="main">
      <Hero />
      <Sponsors />
      <Speakers />
      <Organizer />
      <Agenda />
      <Site />
      <Collage />
    </div>
  );
}
