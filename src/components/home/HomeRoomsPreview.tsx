import { ROOMS } from "@/lib/rooms";
import HomeRoomsPreviewClient from "@/components/home/HomeRoomsPreviewClient";

export default function HomeRoomsPreview() {
  return <HomeRoomsPreviewClient rooms={ROOMS} />;
}
