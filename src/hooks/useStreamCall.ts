import { useCall } from "@stream-io/video-react-sdk";

export default function useStreamCall() {
  const call = useCall();

  if (!call) {
    throw new Error(
      "useStreamCall must be used within a StreamCall component with a valid call prop.",
    );
  }

  return call;
}
