import { FeatureFlags } from "@/shared/types/featureFlags";
import { ReactElement, memo } from "react";
import { getFeatureFlag } from "../../lib/setGetFeatures";


interface ToggleFeaturesProps {
  feature: keyof FeatureFlags;
  on: ReactElement;
  off: ReactElement;
}

export const ToggleFeatures = memo((props: ToggleFeaturesProps) => {
  const { on, off, feature } = props;

  if (getFeatureFlag(feature)) {
    return on;
  }
  return off;
});
