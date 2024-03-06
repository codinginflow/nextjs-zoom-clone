import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";

export default function useLoadCall(id: string) {
  const client = useStreamVideoClient();

  const [call, setCall] = useState<Call>();
  const [callLoading, setCallLoading] = useState(true);

  useEffect(() => {
    async function loadCall() {
      setCallLoading(true);

      if (!client) return;

      const { calls } = await client.queryCalls({
        filter_conditions: { id },
      });

      if (calls.length > 0) {
        const call = calls[0];

        await call.get();

        setCall(call);
      }

      setCallLoading(false);
    }
    loadCall();
  }, [client, id]);

  return { call, callLoading };
}
