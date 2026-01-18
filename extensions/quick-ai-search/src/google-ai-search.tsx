import { LaunchProps, open } from "@raycast/api";
import { buildGoogleAiUrl } from "./utils/search-urls";

export default async function Command(
  props: LaunchProps<{ arguments: Arguments.GoogleAiSearch }>,
) {
  const { query } = props.arguments;
  await open(buildGoogleAiUrl(query));
}
