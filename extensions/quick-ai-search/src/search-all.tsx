import { LaunchProps, open } from "@raycast/api";
import {
  buildChatGptUrl,
  buildGoogleAiUrl,
  buildGrokUrl,
  buildPerplexityUrl,
} from "./utils/search-urls";

export default async function Command(
  props: LaunchProps<{ arguments: Arguments.SearchAll }>,
) {
  const { query } = props.arguments;
  await open(buildGoogleAiUrl(query));
  await open(buildChatGptUrl(query));
  await open(buildPerplexityUrl(query));
  await open(buildGrokUrl(query));
}
