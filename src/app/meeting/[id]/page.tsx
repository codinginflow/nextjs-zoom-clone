import { Metadata } from "next";
import MeetingPage from "./MeetingPage";

interface PageProps {
  params: { id: string };
}

export function generateMetadata({ params: { id } }: PageProps): Metadata {
  return {
    title: `Meeting ${id}`,
  };
}

export default function Page({ params: { id } }: PageProps) {
  return <MeetingPage id={id} />;
}
