import { Hero } from "@/components/Hero";
import { Speakers } from "@/components/Speakers";
import { Collage } from "@/components/Collage";
// import { Volunteer } from "@/components/Volunteer";
import { Organizer } from "@/components/Organizer";
import { Sponsors } from "@/components/Sponsors";
// import { Agenda } from "@/components/Agenda";
// import { Site } from "@/components/Site";

export default function Home() {
  return (
    <div id="main">
      <Hero />
      <Sponsors />
      <Collage />
      <Speakers />
      {/* <Volunteer /> */}
      <Organizer />
      {/* <Agenda /> */}
      
      {/* <Site /> */}
    </div>
  );
}
