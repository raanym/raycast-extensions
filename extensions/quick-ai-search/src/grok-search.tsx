import { LaunchProps, open } from "@raycast/api";
import { buildGrokUrl } from "./utils/search-urls";

export default async function Command(
  props: LaunchProps<{ arguments: Arguments.GrokSearch }>,
) {
  const { query } = props.arguments;
  await open(buildGrokUrl(query));
}
