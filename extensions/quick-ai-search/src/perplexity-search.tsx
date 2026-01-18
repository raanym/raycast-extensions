import { LaunchProps, open } from "@raycast/api";
import { buildPerplexityUrl } from "./utils/search-urls";

export default async function Command(
  props: LaunchProps<{ arguments: Arguments.PerplexitySearch }>,
) {
  const { query } = props.arguments;
  await open(buildPerplexityUrl(query));
}
