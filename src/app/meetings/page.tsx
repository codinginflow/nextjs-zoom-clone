import { Metadata } from "next";
import MyMeetingsPage from "./MyMeetingsPage";

export const metadata: Metadata = {
  title: "My Meetings",
};

export default function Page() {
  return <MyMeetingsPage />;
}
